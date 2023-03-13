import React, { useState } from "react";
import Container from 'react-bootstrap/Container';

import Select from 'react-select';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import profile_img from '../../Assets/images/Profile/profile_img.png';
import add_img from '../../Assets/images/Profile/add_img.png';
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { ApiGetUser, ApiPostUser, ApiUpload } from "../../Helpers/Api/ApiData";
import { toast } from "react-toastify";
import Customeselect from "../../Components/Customeselect";
import { options2, sportOptions } from "../../Constants/Userprofile/options";
import { setUser } from "../../Store/Reducers/Userreducer/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [startDate, setStartDate] = useState(new Date());
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const user = useSelector((state) => state.user.profile);
    const [user, setUserdata] = useState()

    const [basicInfo, setBasicInfo] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        profilePhoto: user?.profilePhoto,
        dob: user?.dob,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        suit: user?.suit,
        city: user?.city,
        state: user?.state,
        zip: user?.zip,

    })
    const [education, setEducation] = useState({
        school: user?.school,
        gradYear: user?.gradYear,
        majors: user?.majors,
        gpa: user?.gpa,
        previousSchool: user?.previousSchool,

    })
    const [characteristic, setCharacteristic] = useState({
        gender: user?.gender,
        religions: user?.religions,
        disabilities: user?.disabilities,
        heritage: user?.heritage,
        languages: user?.languages,
        militaryAffiliations: user?.militaryAffiliations,
        citizenShips: user?.citizenShips,
    })
    const [interest, setInterest] = useState({
        academicInterests: [],
        clubAndSports: ""
    })

    console.log(user)
    useEffect(() => {
        try {
            ApiGetUser('/profile').then((response) => {
                console.log(response,"sdfsd")
                setUserdata(response?.data?.data)
            }).catch((error) => {
                if (error?.status == '401' && token) {
                    console.log(error)
                    localStorage.setItem('persist:auth', '')
                    navigate('/')
                }

            })
        } catch (error) {
        }

    }, [])  
    useEffect(() => {
        setBasicInfo({
            firstName: user?.firstName,
            lastName: user?.lastName,
            profilePhoto: user?.profilePhoto,
            dob: user?.dob,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            suit: user?.suit,
            city: user?.city,
            state: user?.state,
            zip: user?.zip,

        })
        setEducation({
            school: user?.school,
            gradYear: user?.gradYear,
            majors: user?.majors,
            gpa: user?.gpa,
            previousSchool: user?.previousSchool,

        })

        setCharacteristic({
            gender: user?.gender,
            religions: user?.religions,
            disabilities: user?.disabilities,
            heritage: user?.heritage,
            languages: user?.languages,
            militaryAffiliations: user?.militaryAffiliations,
            citizenShips: user?.citizenShips,
        })
        setInterest({
            academicInterests: [],
            clubAndSports: ""
        })

    }, [user])





    const handleSubmit = (values) => {
        try {
            ApiPostUser('/profile/update', values).then((response) => {
                dispatch(setUser({ data: response.data.data }))
                toast.success("Basic Info Updates")
                console.log(response)
            }).catch((err) => toast.error(err.message))
        } catch (error) {

        }
    }
    const handleProfileChange = (e, setFieldValue) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        try {
            ApiUpload('/upload/profile', formData, {
                Headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                setFieldValue("profilePhoto", response?.data?.data?.image)
                toast.success('Profile Changed')
            })
        } catch (error) {
            toast.error(error.message)
        }
    }
   
    if(!user)
    {
        return <>Loading</>
    }

    return (
        <div className="profile_wrapper">
            <div className="my_questions_wrap"> 
                <Container>
                    <div className="my_questions_block">
                        <div className="my_questions_sec">
                            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab eventKey="home" title="basic info">
                                    <Formik
                                        initialValues={basicInfo}
                                        onSubmit={handleSubmit}
                                        enableReinitialize
                                    >
                                        {({ values, setFieldValue }) => {
                                            return <Form>

                                                <div className="my_questions_tab_sec">
                                                    <div className="profile_block">
                                                        <div className="profile_title">
                                                            <h3>profile photo</h3>
                                                        </div>
                                                        <div className="profile_img_block">
                                                            <div className="profile_img_wrap">
                                                                <div className="profile_img">
                                                                    <div className="profile_addimg_block">
                                                                        <div className="profile_img_add">
                                                                            {values?.profilePhoto ? <><img src={values?.profilePhoto} alt="profile_img" height={200} width={200} style={{ borderRadius: '50%' }} /></> : <><div className="defaultProfile">s    </div> </>}

                                                                        </div>

                                                                        <a className="profile_add_block">
                                                                            <label htmlFor="profileImage"><img src={add_img} alt="add_img" style={{ cursor: 'pointer' }} /></label>
                                                                        </a>
                                                                    </div>
                                                                    {/* <div className="profile_upload">
                                                                        <label htmlFor="profileImage"><a style={{ cursor: 'pointer' }}>upload photo</a></label>
                                                                    </div> */}
                                                                    <input type="file" hidden id="profileImage" onChange={(event) => { handleProfileChange(event, setFieldValue) }} />
                                                                </div>
                                                                <div className="profile_conte">
                                                                    <p> <span></span> photo must be either JPG or PNG</p>
                                                                    <p><span></span>file size must be 2MB or less</p>
                                                                    <p><span></span>minimum image size of 250 * 250 pixels</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="profile_form">

                                                            <ul className="profile_form_block">
                                                                <li>
                                                                    <label className="profile_form_label">
                                                                        <p>first name</p>
                                                                        <Field type="name" name='firstName' />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="profile_form_label">
                                                                        <p>last name</p>
                                                                        <Field type="name" name='lastName' />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="profile_form_label profile_form_datePicker">
                                                                        <p>date of birth</p>
                                                                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                                                                        <div className="profile_form_datePicker_icon">
                                                                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M1.51465 2L8.51465 9L15.5146 2" stroke="#919090" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </svg>
                                                                        </div>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="profile_form_label" >
                                                                        <p>email address</p>
                                                                        <Field type="email" name='email' readOnly style={{ color: 'grey' }} />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="profile_form_label">
                                                                        <p>phone number</p>
                                                                        <Field type="text" name='phoneNumber' readOnly style={{ color: 'grey' }} />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="profile_form_label">
                                                                        <p>suite or apt. number</p>
                                                                        <Field type="text" name='suit' />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                            <div className="profile_city_wrap">
                                                                <ul className="profile_city_block profile_form_block">
                                                                    <li>
                                                                        <label className="profile_form_label">
                                                                            <p>city</p>
                                                                            <Field type="name" name='city' />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label className="profile_form_label">
                                                                            <p>state</p>
                                                                            <Field type="name" name='state' />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <label className="profile_form_label">
                                                                            <p>zip</p>
                                                                            <Field type="number" name='zip' />
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="profile_save_wrap">
                                                                <div className="profile_save_block">
                                                                    <div className="profile_cancel_block">
                                                                        <p>cancel</p>
                                                                    </div>
                                                                    <div className="profile_save_btn">
                                                                        <button style={{ border: '0px' }} type="submit"> <a style={{ color: 'white' }}>save changes</a></button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        }}

                                    </Formik>
                                </Tab>
                                <Tab eventKey="home2" title="education">
                                    <Formik
                                        initialValues={education}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <div className="my_questions_tab_sec">
                                                <div className="education_tab_block">
                                                    <div className="profile_title">
                                                        <h3>current school</h3>
                                                    </div>
                                                    <div className="profile_form">

                                                        <ul className="profile_form_block">
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>School</p>
                                          

                                                                    <Field type="text"  defaultValue={user?.school} name="school" />
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>grad year</p>

                                                                

                                                                    <Field type="text"  defaultValue={user?.gradYear}  name="gradYear" />

                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>majors</p>

                                                                

                                                                    <Field type="text" defaultValue={user?.majors} name="majors" />

                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>GPA</p>

                                                                    <Field type="text"   defaultValue={user?.gpa} name="gpa" />

                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className="profile_city_wrap">
                                                            <ul className="profile_city_block profile_form_block">
                                                                <li>
                                                                    <label className="profile_form_label">
                                                                        <p>previous school</p>
                                                                        <Field type="text"  defaultValue={user?.previousSchool} name="previousSchool" />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="profile_save_wrap">
                                                            <div className="profile_save_block">
                                                                <div className="profile_cancel_block">
                                                                    <p>cancel</p>
                                                                </div>
                                                                <div className="profile_save_btn">
                                                                    <button style={{ border: '0px' }} type="submit"> <a style={{ color: 'white' }}>save changes</a></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>

                                </Tab>
                                <Tab eventKey="home3" title="personal characteristics">
                                    <Formik
                                        initialValues={characteristic}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>


                                            <div className="my_questions_tab_sec">
                                                <div className="personal_tab_block">
                                                    <div className="profile_form">

                                                        <ul className="profile_form_block">
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>Gender</p>
                                                                    <Field as="select" name="gender" className="selectOptions">
                                                                        <option value="male">Male</option>
                                                                        <option value="female">Female</option>

                                                                    </Field>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>religions</p>
                                                                    <Field type="text" name="religions" />
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>heritage</p>
                                                                    <Field type="text"  defaultValue={user?.heritage} name="heritage" />
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>langauges</p>
                                                                    <Field type="text"  defaultValue={user?.languages} name="languages" />
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>military affiliations</p>

                                                                    <Field as="select" name="militaryAffiliations" className="selectOptions">
                                                                        <option value="yes">Yes</option>
                                                                        <option value="no">No</option>

                                                                    </Field>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>citizenships</p>
                                                                    <Field type="text"   defaultValue={user?.citizenShips} name="citizenShips" />
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>disabilities</p>
                                                                    <Field as="select" name="disabilities" className="selectOptions">
                                                                        <option value="false">No</option>
                                                                        <option value="true">Yes</option>

                                                                    </Field>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className="profile_save_wrap">
                                                            <div className="profile_save_block">
                                                                <div className="profile_cancel_block">
                                                                    <p>cancel</p>
                                                                </div>
                                                                <div className="profile_save_btn">
                                                                    <button style={{ border: '0px' }} type="submit"> <a style={{ color: 'white' }}>save changes</a></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </Tab>
                                <Tab eventKey="home4" title="interests and sports">
                                    <Formik
                                        initialValues={interest}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form>
                                            <div className="my_questions_tab_sec u_questions_tab_sec">
                                                <div className="interests_tab_block">
                                                    <div className="profile_form">

                                                        <ul className="profile_form_block">
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>academic interests</p>
                                                                    <Field
                                                                        className="custom-select"
                                                                        name="academicInterests"
                                                                        options={sportOptions}
                                                                        component={Customeselect}
                                                                        placeholder="Select multi sports..."
                                                                        isMulti={true}
                                                                    />
                                                                    {/* <div>>{user?.academicInterests?.map((val) => <span className="m-2 p-2">{val}</span>)}</div> */}
                                                                </label>

                                                            </li>
                                                            <li>
                                                                <label className="profile_form_label">
                                                                    <p>clubs and sports</p>

                                                                    <Field
                                                                        className="custom-select"
                                                                        name="clubAndSports"
                                                                        options={sportOptions}
                                                                        component={Customeselect}
                                                                        placeholder="Select multi sports..."
                                                                        isMulti={true}
                                                                    />
                                                                    {/* <div>>{user?.clubAndSports?.map((val) => <span className="m-2 p-2">{val}</span>)}</div> */}
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className="profile_save_wrap">
                                                            <div className="profile_save_block">
                                                                <div className="profile_cancel_block">
                                                                    <p>cancel</p>
                                                                </div>
                                                                <div className="profile_save_btn">
                                                                    <button style={{ border: '0px' }} type="submit"> <a style={{ color: 'white' }}>save changes</a></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Profile;
