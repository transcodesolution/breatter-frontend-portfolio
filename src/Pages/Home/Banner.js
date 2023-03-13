import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ApiPostNoAuth } from "../../Helpers/Api/ApiData";


const Banner = () => {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const navigate=useNavigate()
    const getSearch = () => {
        ApiPostNoAuth('/user/question/search', {
            search
        }).then((response) => {
            console.log(response)
            setSearchResult(response?.data?.data?.question_data)    
        })  
    }
    useEffect(() => {
        console.log('runninf=g')
        getSearch()
    }, [search])


    return (
        <div className="banner_wrapper">
            <div className="banner_wrap">
                <Container>
                    <div className="banner_block">
                        <div className="banner_title">
                            <h3>Get Answers for All Your <br /> Academic Questions</h3>
                        </div>
                        <div className="banner_input">
                            <label for="">
                                <input type="" placeholder="Find Solutions" value={search} onChange={(event) => setSearch(event.target.value)} />
                                <a href="#0">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.1592 17.6676C33.1592 26.1907 26.2498 33.1001 17.7267 33.1001C9.20355 33.1001 2.29419 26.1907 2.29419 17.6676C2.29419 9.14447 9.20355 2.23511 17.7267 2.23511C26.2498 2.23511 33.1592 9.14447 33.1592 17.6676Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M37.2741 37.2156L28.6386 28.5802Z" fill="white" />
                                        <path d="M37.2741 37.2156L28.6386 28.5802" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </label>
                          {searchResult.length!=0 &&   <div className="search_result">{
                                searchResult?.map((singleData) => {
                                    return <p onClick={()=>navigate('/QuestionPage1')}>{singleData.question}</p>
                                })
                            } </div>}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Banner;