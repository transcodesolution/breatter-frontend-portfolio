import React from "react";

import QA_Header from '../QuestionAnswer/QA_Header';
import QA_Banner from '../QuestionAnswer/QA_Banner';
import TinciduntSem from '../QuestionAnswer/TinciduntSem';
import UploadQuestions from '../QuestionAnswer/UploadQuestions';
import QA_Footer from '../QuestionAnswer/QA_Footer';

const QuestionAnswer = () =>{
    return(
        <div className="question_answer_wrapper">
            {/* <QA_Header /> */}
            <QA_Banner />
            <TinciduntSem />
            <UploadQuestions />
            {/* <QA_Footer /> */}
        </div>
    )
}

export default QuestionAnswer;