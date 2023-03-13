import React from "react";

import QA_Header from "../QuestionAnswer/QA_Header";
import QA_Banner from '../Questionpage1/QA_Banner';
import Question from '../Questionpage1/Question';
import QA_Footer from '../Questionpage1/QA_Footer';
import { useSelector } from "react-redux";

const QuestionPage1 = () =>{
    const token = useSelector((state) => state.auth.token);
    return(
        <div className="question_page1">
            {!token && <QA_Header />}
            <QA_Banner />
            <Question />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default QuestionPage1;