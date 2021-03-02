import React, { useRef, useState, onChange } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import smart_phone from "../../static/images/index/smart_phone.png";
import lend_context1 from "../../static/images/index/lend_context1.png";
import lend_context2 from "../../static/images/index/lend_context2.png";
import lend_context3 from "../../static/images/index/lend_context3.png";
import lend_context4 from "../../static/images/index/lend_context4.png";
import lend_context5 from "../../static/images/index/lend_context5.png";
import google_play from "../../static/images/index/google_play.svg";
import ios from "../../static/images/index/apple.svg";
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
      <SEO title="문화센터 다모아, 문다!" />
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Helmet>
      <div className={"page-header home"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-8"}>
              <h1>
                클릭 한 번으로
                <br />
                나에게 맞는
                <br />
                우리동네 취미강좌 추천
              </h1>
              <p>지금 바로 문다를 만나보세요!</p>
              <br />
              <div className={"my-button"} onClick={executeScroll}>
                앱 다운로드 받기
              </div>

              <br />
              <p>이미 동네에서 공방을 운영 중이신가요?</p>
              <br />
              <a href="https://forms.gle/vu4sLZ1tu3QFe78KA">
                <div className={"my-button"}>문다와 함께하기</div>
              </a>
            </div>
            <div className={"col-4"}>
              <img alt={"Dashboard"} src={smart_phone} />
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
                        <h2>
                            문다는 취미생활이 여러분의 삶을
                            <br />더 행복하게 해줄 거라고 믿어요.
                           </h2>
                            <p>지금 바로 문다와 함께 새로운 취미생활을 시작해보세요!</p>
                    </span>

                <div className={"text-input-wrapper"}>
                    <a
                    className={"my-button2"}
                    href="https://apps.apple.com/kr/app/%EB%AC%B8%EB%8B%A4-%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4-%EB%AC%B8%ED%99%94%EC%84%BC%ED%84%B0-%EB%A7%9E%EC%B6%A4%EC%A0%95%EB%B3%B4-%EC%95%B1/id1547412014"
                        >
              <img alt={"ios"} src={ios} />
              &nbsp; &nbsp;
              <b>App Store</b>
            </a>
            <a
              className={"my-button2"}
              href="https://play.google.com/store/apps/details?id=com.moonda"
            >
              <img alt={"google-play"} src={google_play} />
              &nbsp; &nbsp;
              <b>Google Play</b>
            </a>
          </div>
        </div>
      </div>
    </Layout>
    )
}

export default IndexPage
