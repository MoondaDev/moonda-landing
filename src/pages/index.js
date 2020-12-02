import React, { useRef, useState, onChange } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import smart_phone from "../../static/images/index/smart_phone.png";
import lend_context1 from "../../static/images/index/lend_context1.png";
import lend_context2 from "../../static/images/index/lend_context2.png";
import lend_context3 from "../../static/images/index/lend_context3.png";
import lend_context4 from "../../static/images/index/lend_context4.png";
import lend_context5 from "../../static/images/index/lend_context5.png";
import axios from "axios";
import { Helmet } from "react-helmet";

const IndexPage = () => { 
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [expectaionMessage, setExpectaionMessage] = useState('');

    const sendSurvey = async () => {
        console.log({emailOrPhone,expectaionMessage});
        const response = await axios.post(
            "http://api.moonda.kr/event/open",
            {
                emailOrPhone : emailOrPhone, 
                expectationMessage: expectaionMessage
            },
        ).then(response => {console.log(response)})
        .catch(error => {console.log('error : ',error.response)});
        window.confirm("전송되었습니다.");
        console.log(response);
    }

    return (
        <Layout>
            <SEO title="문화센터 다모아, 문다!"/>
            <Helmet>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Helmet>
            <div className={"page-header home"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            <h1>클릭 한 번으로<br/>나에게 맞는<br/>우리동네 취미강좌 추천</h1>
                            <div className={"my-button"} onClick={executeScroll}>
                                앱 출시 알림 받기
                            </div>
                            <p>이미 <b>17명</b>이 출시 알림을 신청했습니다.</p>
                        </div>
                        <div className={"col-4"}>
                            <img alt={"Dashboard"} src={smart_phone}/> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <div className={"features"}>
                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Event"} src={lend_context1}/>
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>우리동네에 문화센터가 이렇게 많다는 거,<br/> 알고 계셨나요?</h2>
                                    <p>저희는 몰랐습니다.<br/>
                                    심지어 문화센터 정보가 다 흩어져 있어 <br/>
                                    알맞은 강좌를 찾고 선택하기가 어려웠지요.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={myRef} className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>문다는 이러한 질문에서 시작했답니다.</h2>
                                    <p>만일 우리 지역 문화센터 정보를 한 곳에서 열람하고, <br/>
                                    내 성향과 상황에 따라 추천 받을 수 있다면?</p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Board"} src={lend_context2}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"News"} src={lend_context3}/>
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>이제 고민은 BYE!</h2>
                                    <p>이젠 저희가 도와드릴게요.</p>
                                    <p>문다에서 나와 우리 가족을 위한 문화센터 강좌를 찾고,<br/>
                                    더 행복한 삶을 즐겨봐요!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>문화센터 다모아, 문다!</h2>
                                    <p>대형 문화센터부터 우리동네 작은 공방까지,<br/>
                                    문다에서 간편하게 모아보세요.</p>
                                </div>
                            </div>

                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Team"} src={lend_context4}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"feature__item"}>
                        <div className={"row"}>
                            <div className={"col-6 first"}>
                                <div className={"thumbnail"}>
                                    <img alt={"Users"} src={lend_context5}/>
                                </div>
                            </div>

                            <div className={"col-6"}>
                                <div className={"feature__content"}>
                                    <h2>당신만을 위한 <br/>취향저격 강좌 추천</h2>
                                    <p>내가 뭘 좋아하는지 모르겠다고요?</p>
                                    <p>문다만의 특별한 알고리즘을 통해<br/>
                                    우리동네 취향 저격 강좌들만 추천해드릴게요.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="surveyComp" ref={myRef} className={"survey-component"}>
                <div className={"head-content"}>
                    <span className={"text-input-header"}>
                        <h2>2021년 2월,<br/>
                            문다가 여러분을 찾아갑니다.</h2>
                        <p>문다 앱이 출시되면 가장 먼저 알려드릴게요.</p>
                    </span>
                    <div className={"text-input-wrapper"}>
                        
                            <a className={"my-button2"}href="https://forms.gle/Gr8VUC2aFjhwgjo66">알림 받기</a>
                       
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
