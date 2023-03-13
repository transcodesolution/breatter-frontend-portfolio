import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Select from "react-select";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import * as yup from "yup";
import curve_arrow from "../../Assets/images/QA_pages/curve_arrow.png";
import questions_icon1 from "../../Assets/images/QA_pages/questions_icon1.png";
import questions_icon2 from "../../Assets/images/QA_pages/questions_icon2.png";
import questions_icon3 from "../../Assets/images/QA_pages/questions_icon3.png";
import questions_icon4 from "../../Assets/images/QA_pages/questions_icon4.png";
import questions_icon5 from "../../Assets/images/QA_pages/questions_icon5.png";
import questions_icon6 from "../../Assets/images/QA_pages/questions_icon6.png";
import pdf from '../../Assets/images/QA_pages/fpdf.png'
import { ApiDelete, ApiGetUser, ApiPostUser, ApiUpload } from "../../Helpers/Api/ApiData";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { initialVal } from "../../Constants/Uploadquestions/initialValue";
import Customeselect from "../../Components/Customeselect";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Tesseract from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';
import { Document, Packer } from "docx";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import _pdf from './1.pdf'


pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js'; // Replace with the path to your worker script

const UploadQuestions = () => {
    const [subjects, setSubjects] = useState([{ value: "pysics", label: "physics" }]);
    const [questionImages, setQuestionImages] = useState([]);
    const [disable, setDisable] = useState(false)

    const [transcribeText, setTranscribeText] = useState([])
    const [transcribeDocs, setTranscribeDocs] = useState([])
    const [questionDocs, setQuestionDocs] = useState([]);
    const [uploadedQuestions, setUploadedQuestions] = useState([]);

    const navigate = useNavigate()


    const schema = yup.object().shape({
        subjectId: yup.string().required('Please Select Subject'),
        question: yup.string().required('This Feild Is Require'),
    });

    const handleUploadquestion = (e, setFieldValue) => {
        let file = e.target.files[0];
        let allowedExtensions = /(\/jpg|\/jpeg|\/png|\/gif)$/i;
        let size = file.size / 1000000;
        console.log(size, file)
        // console.log(allowedExtensions.exec(file.type), file.type)
        if (allowedExtensions.exec(file.type)) {
            if (size <= 4096) {

                console.log(file)
                let formData = new FormData();
                formData.append("image", file);
                try {
                    ApiUpload('/upload/document', formData, {
                        Headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((response) => {
                        setDisable(true)
                        setQuestionImages((prev) => { return [...prev, response?.data?.data?.image] })
                        setFieldValue("images", [...questionImages, response?.data?.data?.image])
                        toast.success('Image Uploaded')
                        Tesseract.recognize(
                            URL.createObjectURL(e.target.files[0]), 'eng',
                            {
                                logger: m => console.log(m)
                            }
                        )
                            .catch(err => {
                                toast.error(err)
                            })
                            .then(result => {

                                // let confidence = result.confidence
                                console.log(result)
                                let text = result.data.text
                                setDisable(false)
                                setTranscribeText((prev) => [...prev, text]);

                            })
                    })
                } catch (error) {
                    toast.error(error.message)
                }
            } else {
                toast.error(`Upload File Less Than 4MB,Curent Size:${size / 4096}MB`)
            }
        } else {
            toast.error("Select Valid File Type")
        }
    }

    const handleUploadquestionDocs = (e, setFieldValue) => {
        for (let i = 0; i < e.target.files.length; i++) {
            if (questionDocs?.length <= 4) {
                let file = e.target.files[i];
                let size = (file?.size || 0) / 1000000;
                let allowedExtensionsPdf = /(\/pdf)$/i;
                if (size <= 4096) {
                    let formData = new FormData();
                    formData.append("image", file);
                    try {
                        ApiUpload('/upload/document', formData, {
                            Headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(async (response) => {
                            setQuestionDocs((prev) => { return [...prev, response?.data?.data?.image] })
                            setFieldValue("docs", [...questionDocs, response?.data?.data?.image])
                            if (allowedExtensionsPdf.exec(file.type)) {
                                pdfjsLib.getDocument(URL.createObjectURL(file)).promise.then(pdf => {
                                    for (let i = 1; i <= pdf.numPages; i++) {
                                        pdf.getPage(i).then(page => {
                                            page.getTextContent().then(textContent => {
                                                const text = textContent.items.map(item => item.str).join('');
                                                setTranscribeDocs([...transcribeDocs, text])
                                            });
                                        });
                                    }
                                });
                            } else if (file.name.endsWith('.doc') || file.name.endsWith('.docx') || file.name.endsWith('.document')) {
                                try {
                                    const reader = new FileReader();
                                    reader.readAsArrayBuffer(file);
                                    reader.onload = async () => {
                                        const buffer = reader.result;
                                        const zip = new PizZip(buffer);
                                        const doc = new Docxtemplater().loadZip(zip);
                                        doc.render();
                                        const text = doc.getFullText();
                                        setTranscribeDocs([...transcribeDocs, text])

                                    };
                                } catch (error) {
                                    toast.error('Something Went Wrong In Transcribe Text')
                                }

                            } else if (file.name.endsWith('.txt')) {
                                fetch(response?.data?.data?.data?.image)
                                    .then(response => response.text())  
                                    .then((response) => setTranscribeDocs([...transcribeDocs, response]))
                                    .catch(error => console.error(error));
                            } else {
                                toast.warning('Document uploaded But Transcribe is not Supported')
                            }
                            toast.success('Doc Uploaded')
                        })
                    } catch (error) {
                        toast.error(error.message)
                    }
                } else {
                    toast.error(`Upload File Less Than 4MB,Curent Size:${size / 4096}MB`)
                }
            } else {
                toast.error('max 4 File Is Allowed')
                return;
            }
        }
    }

    const handleQuestionSubmit = (values, resetForm) => {
        resetForm(initialVal)
        console.log(transcribeText)
        let final = ''
        for (let i = 0; i < transcribeText.length; i++) {
            final += transcribeText[i]

        }
        for (let i = 0; i < transcribeDocs.length; i++) {
            final += transcribeDocs[i]

        }
        values.transcribeQuestion = final
        try {
            ApiPostUser('/question/add', values).then((response) => {
                console.log(response, "upload");
                if (response.status == 204) {
                    toast.error('You can Not Post Question Because You Do Not Have Any Active SUbscription')
                    navigate('/Subscriptionpage')
                } else {

                    setQuestionDocs([]);
                    setQuestionImages([])
                    setTranscribeDocs([])
                    setTranscribeText([])
                    getAllQuestions()
                    toast.success("Question Uploaded Successfully")
                }
            }).catch((error) => {
                toast.error(error.message)
            })
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleDeletimg = (index,file) => {
        ApiDelete(`/upload/delete_file/${file}`).then((response)=>toast.success('success'))
        setQuestionImages((prev) => {
            return prev.filter((data, idx) => idx != index)
        })
        setTranscribeText((prev) => {
            return prev.filter((data, idx) => idx != index)
        })
    }

    const handleDeletDocs = (index,file) => {
        ApiDelete(`/upload/delete_file/${file}`).then((response)=>toast.success('success'))
        setQuestionDocs((prev) => {
            return prev.filter((data, idx) => idx != index)
        })
        setTranscribeDocs((prev) => {
            return prev.filter((data, idx) => idx != index)
        })
    }


    const handleLikeQuestiomn = (question) => {
        if (question.isAnswered) {

            try {
                ApiPostUser('/question/review', {
                    qId: question._id,
                    review: 1
                }).then((response) => {
                    toast.success("Liked")
                    getAllQuestions()
                })
            } catch (error) {

            }
        }
    }

    const handleDislikeQuestiomn = (question) => {
        if (question.isAnswered) {

            try {
                ApiPostUser('/question/review', {
                    qId: question._id,
                    review: 2
                }).then((response) => {
                    toast.success("Disliked")
                    getAllQuestions()
                })
            } catch (error) {

            }
        }
    }

    const getAllQuestions = () => {
        try {
            ApiPostUser("/question/my/get").then((response) => {
                const res = response.data.data;
                console.log("ques", res)
                setUploadedQuestions(res)
            });
        } catch (error) { toast.error(error.message) }
    }

    useEffect(() => {
        try {
            ApiGetUser("/subject/all").then((response) => {
                const res = response.data.data;
                console.log("sub", res)
                let temparr = [];
                for (let i = 0; i < res.length; i++) {
                    temparr.push({ value: res[i]._id, label: res[i].name })

                }
                setSubjects((prev) => {
                    return [...temparr];
                });
            });
        } catch (error) { toast.error(error.message) }
    }, []);

    useEffect(() => {
        getAllQuestions()
    }, [])

    return (
        <div className="my_questions_wrapper">
            <div className="my_questions_wrap">
                <Container>
                    <div className="my_questions_block">
                        <div className="my_questions_sec">
                            <Tabs
                                defaultActiveKey="profile"
                                transition={false}
                                id="noanim-tab-example"
                            >
                                <Tab eventKey="profile" title="Upload Questions">
                                    <Formik initialValues={initialVal} validationSchema={schema} onSubmit={(values, { resetForm }) => handleQuestionSubmit(values, resetForm)}>
                                        {
                                            ({ values, setFieldValue }) => {
                                                return <Form>
                                                    <div className="my_questions_tab_sec u_questions_tab_sec">

                                                        <div className="u_questions_tab_block">
                                                            <div className="u_questions_tab">
                                                                <div className="u_questions_select">
                                                                    {/* <Select options={subjects} /> */}
                                                                    <Field
                                                                        as="select"
                                                                        className="custom-select"
                                                                        name="subjectId"
                                                                        options={subjects}
                                                                        component={Customeselect}
                                                                        placeholder="Select Subject"


                                                                    // isMulti={true}
                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <ErrorMessage name="subjectId">
                                                            {(msg) => (
                                                                <div style={{ color: "red" }}>{msg}</div>
                                                            )}
                                                        </ErrorMessage>
                                                        <div className="u_questions_tab_input">
                                                            <label>
                                                                <p>Drop Your Questions</p>
                                                                <Field type="text" name="question" />
                                                            </label>
                                                        </div>
                                                        <ErrorMessage name="question">
                                                            {(msg) => (
                                                                <div style={{ color: "red" }}>{msg}</div>
                                                            )}
                                                        </ErrorMessage>
                                                        <div className="u_questions_tab_img">
                                                            <p>Drop Your Questions images</p>
                                                            <ul>
                                                                {
                                                                    questionImages?.map((image, idx) => {
                                                                        return <li>
                                                                            <span className="u_questions_close_img" onClick={() => handleDeletimg(idx)}>
                                                                                <svg style={{ background: 'white', borderRadius: '50%' }} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero" /></svg>
                                                                            </span>
                                                                            <img src={image} className="questionImage" alt="" />
                                                                        </li>
                                                                    })
                                                                }
                                                                {
                                                                    Array(4 - questionImages.length).fill(0).map(() => {
                                                                        return <li>
                                                                            <label htmlFor="questionImage">+</label>
                                                                        </li>
                                                                    })
                                                                }


                                                                <input type="file" hidden id="questionImage" onChange={(event) => handleUploadquestion(event, setFieldValue)} />
                                                            </ul>
                                                        </div>
                                                        <div className="u_questions_tab_textarea" style={{ position: "relative" }}>
                                                            <p>Drop Your Questions document   <span style={{ padding: '12px', fontSize: '12px', border: '1px solid #ddd', marginLeft: '6px', cursor: 'pointer', borderStyle: 'dashed' }}>  <label htmlFor="questionDoc"> Add Document</label></span>   </p>
                                                            <div className="questionDocs" >
                                                                {questionDocs.map((link, idx) => {
                                                                    return <div style={{ color: 'blue', cursor: 'pointer' }} className="p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-x" viewBox="0 0 16 16" onClick={() => handleDeletDocs(idx,link)}>
                                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                                                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                                                        </svg> <a target={"_blank"} href={link}> {link?.split('/')[link?.split('/').length - 1]} </a></div>
                                                                })}

                                                            </div>
                                                            {/* <label htmlFor="questionDoc"> <div className="questionDoc" >+</div></label> */}
                                                            <input type="file"  id="questionDoc" hidden onChange={(event) => handleUploadquestionDocs(event, setFieldValue)} />
                                                        </div>
                                                        <div className="u_questions_tab_textarea" style={{ position: "relative" }}>
                                                            <p>Transcribed Text </p>
                                                            <div className="questionDocs" style={{ background: 'white' }} >
                                                                {
                                                                    transcribeText?.map((data) => <>{data} <br /> <br /></>)
                                                                }
                                                                {'         '}
                                                                {
                                                                    transcribeDocs?.map((data) => <>{data} <br /> <br /> <br /></>)
                                                                }

                                                            </div>
                                                            {/* <label htmlFor="questionDoc"> <div className="questionDoc" >+</div></label> */}

                                                        </div>
                                                        <div className="u_questions_tab_btn">
                                                            <button type="submit" disabled={disable} style={{ cursor: `${disable ? 'no-drop' : 'pointer'}` }}>Submit</button>
                                                        </div>
                                                    </div>


                                                </Form>
                                            }
                                        }

                                    </Formik>

                                </Tab>
                                <Tab eventKey="home" title="My Questions">
                                    <div className="my_questions_tab_sec">
                                        <div className="my_questions_tab_block">
                                            {
                                                uploadedQuestions?.map((single, idx) => {
                                                    return <div className="my_questions_tab">
                                                        <div className="my_questions_tab_title">
                                                            <h3>
                                                                {" "}
                                                                <span>{idx + 1}.</span>     {single.question}
                                                            </h3>
                                                        </div>
                                                        <div className="my_questions_tab_doc">
                                                            {
                                                                single?.images.map((image, _idx) => {
                                                                    return <div className="my_questions_tab_doc1">
                                                                        <span > <img src={pdf}></img></span> <span><a href={image} className="uploaded_files"> Image File -{_idx + 1}</a></span>
                                                                    </div>
                                                                })
                                                            }
                                                            {
                                                                single?.docs.map((image, _idx) => {
                                                                    return <div className="my_questions_tab_doc1">
                                                                        <span > <img src={pdf}></img></span> <span><a href={image} className="uploaded_files"> Document File -{_idx + 1}</a></span>
                                                                    </div>
                                                                })
                                                            }

                                                            <div className="line_separater"></div>



                                                        </div>
                                                        <div className="my_questions_tab_conte">
                                                            <p>
                                                                <span>
                                                                    <img src={curve_arrow} alt="curve_arrow" />
                                                                </span>
                                                                {single.answer[0] ? <div dangerouslySetInnerHTML={{ __html: single.answer[0].answer }}></div> : "Answer Is Not Given By Any Expert"}
                                                            </p>
                                                        </div>
                                                        {single?.answer?.length != 0 && <div className="my_questions_tab_doc">
                                                            {
                                                                single?.answer[0]?.images?.map((image, _idx) => {
                                                                    return <div className="my_questions_tab_doc1">
                                                                        <span > <img src={pdf}></img></span> <span><a href={image} className="uploaded_files"> Image File -{_idx + 1}</a></span>
                                                                    </div>
                                                                })
                                                            }
                                                            {
                                                                single?.answer[0]?.docs?.map((image, _idx) => {
                                                                    return <div className="my_questions_tab_doc1">
                                                                        <span > <img src={pdf}></img></span> <span><a href={image} className="uploaded_files"> Document File -{_idx + 1}</a></span>
                                                                    </div>
                                                                })
                                                            }
                                                        </div>}
                                                        <div className="questions_icon">
                                                            <div className="questions_icon_left">
                                                                <ul>
                                                                    <li>
                                                                        <a onClick={() => handleLikeQuestiomn(single)}>
                                                                            {single.userReview == 1 ?
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                                                                </svg>
                                                                                : <img
                                                                                    src={questions_icon1}
                                                                                    alt="questions_icon"
                                                                                />}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => handleDislikeQuestiomn(single)}>
                                                                            {single.userReview == 2 ?
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                                                                    <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                                                                                </svg>
                                                                                : <img
                                                                                    src={questions_icon2}
                                                                                    alt="questions_icon"
                                                                                />}

                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#0">
                                                                            <img
                                                                                src={questions_icon3}
                                                                                alt="questions_icon"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="questions_icon_left questions_icon_right">
                                                                <p>More links :- </p>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#0">
                                                                            <img
                                                                                src={questions_icon4}
                                                                                alt="questions_icon"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#0">
                                                                            <img
                                                                                src={questions_icon5}
                                                                                alt="questions_icon"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#0">
                                                                            <img
                                                                                src={questions_icon6}
                                                                                alt="questions_icon"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default UploadQuestions;
