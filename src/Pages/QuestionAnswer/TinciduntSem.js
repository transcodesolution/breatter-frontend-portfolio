import React, { useEffect, useState } from "react";
import { object } from "yup";
import { ApiGetUser } from "../../Helpers/Api/ApiData";

const TinciduntSem = () => {
    const [news, setNews] = useState([])
    const getNewsLine=()=>{
        ApiGetUser('/news/all').then((resposnse)=>{
            console.log(resposnse,'news')
            setNews(resposnse.data.data)
        }).catch((err)=>setNews("No News"))
    }
    useEffect(() => {
      getNewsLine()
    
    
    }, [])
    console.log(typeof news)
    return(
        <div className="tincidunt_wrapper">
            <div className="tincidunt_wrap">
                <div className="tincidunt_block">
                    <p>

                        <marquee direction="left" scrollamount="10">{typeof(news)=='object' && news?.length!=0 &&  news?.map((singleData)=>{ return <span style={{color:`${singleData?.type==2 ? 'blue' :singleData?.type==1 ? 'green' :'red' }`,marginRight:'100px'}}>{singleData?.newsLine}.</span>
                        })}</marquee>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TinciduntSem; 
