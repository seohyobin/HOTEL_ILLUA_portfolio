import React from 'react';

function FooterComponent(){
    return (
        <footer id='footer'>
            {/* <div className="video">
                <video muted autoplay loop playsinline controls fullscreen>
                    <source src='./img/2731656843.mp4'type="video/mp4" />
                </video>
            </div> */}
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <img src="./img/logo.svg" alt="" />
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="top-box">
                                    <a href="!#"><span className='first-last'>호텔 소개</span></a>
                                    <a href="!#"><span>오시는 길</span></a>
                                    <a href="!#"><span>개인정보처리방침</span></a>
                                    <a href="!#"><span>이메일무단수집금지</span></a>
                                    <a href="!#"><span className='first-last'>영상정보처리기기 운영, 관리방침</span></a>
                                </div>
                            </li>
                            <li>
                                <div className="bottom-box">
                                    <p> 2021 HOTEL ILLUA Co. ALL RIGHTS RESERVED.</p>
                                    <div>
                                        <span>부산광역시 해운대구 달맞이길 97 <i> | </i></span>
                                        <span>대표이사 허주희<i> | </i></span>
                                        <span>사업자등록번호 618-81-07176<i> | </i></span>
                                        <span>051-744-1331<i> | </i></span>
                                        <span>Fax. 051-744-1858</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;