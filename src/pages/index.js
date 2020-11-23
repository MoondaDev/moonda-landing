import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import lend_context1 from "../../static/images/index/lend_context1.png";
import lend_context2 from "../../static/images/index/lend_context2.png";
import lend_context3 from "../../static/images/index/lend_context3.png";

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>Make your Staff and Workspace Happy</h1>
            <p>HiStaff gives your complex the opportunity to increase the percentage of happiness<br/>and enjoyment of your staff and as a result, bring productivity to your workspace.</p>
            <img alt={"Dashboard"} src={featureImage}/>
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
                                <h2>우리동네에 문화센터가 이렇게 만다는 거, 알고 계셨나요?</h2>
                                <p>저희는 몰랐습니다.<br/>
                                심지어 문화센터 정보가 다 흩어져 있어 <br/>
                                알맞은 강좌를 찾고 선택하기가 어려웠지요.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
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
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
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

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your business with HiStaff.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
