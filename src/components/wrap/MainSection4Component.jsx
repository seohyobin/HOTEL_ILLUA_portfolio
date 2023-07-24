import React from 'react';
import $ from 'jquery';



export default function MainSection4Component(){
    
    React.useEffect(()=>{
        const $slideContainer = $('#section4 .slide-container');
        const $slideWrap = $('#section4 .slide-wrap');
        const $slide = $('#section4 .slide');
        const $leftArrowBtn= $('#section4 .left-arrow-btn');
        const $rightArrowBtn= $('#section4 .right-arrow-btn');

        let cnt = 0;
        let n= $slide.length-2;
        let setId = 0;


        //1.메인
         function mainSlide(){
            $slideWrap.stop().animate({left:`${-100*cnt}%`},1000,function(){
                if(cnt >= n ){
                    cnt=0;
                }
                if(cnt < 0 ){
                    cnt = n-1;
                }

                $slideWrap.stop().animate({left:`${-100*cnt}%`},0)

            });
         }
        //2.다음카운트
        function nextCount(){
            cnt++;
            mainSlide();
        }
        //3.이전카운트
        function prevCount(){
            cnt--;
            mainSlide();
        }
        //4.타이머
        function autoTimer(){
            clearInterval(setId);
            setId =setInterval(nextCount,3000);
        }
        autoTimer();
        //5.마우스 오버, 리브
        $slide.on({
        mouseenter(){
            clearInterval(setId);
        },
        mouseleave(){
            autoTimer();
        }
        
        });


    },[]);






    return (
        <section id='section4'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="text-box">
                            <ul>
                                <li><h2>ONLY ENJOY IT</h2></li>
                                <li>
                                    <span>THAI RESTAURANT<i>  |  </i></span>
                                    <span>RESTAURANT<i>  |  </i></span>
                                    <span>BRUNCH CAFE & BAKERY<i>  |  </i></span>
                                    <span>BAR</span>
                                </li>
                                <li><span className='view'>VIEW MORE</span></li>
                            </ul>
                        </div>
                        <div className="slide-box">
                            <div className="col-gap">
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap">
                                            <li className='slide slide3'></li>
                                            <li className='slide slide1'></li>
                                            <li className='slide slide2'></li>
                                            <li className='slide slide3'></li>
                                            <li className='slide slide1'></li>
                                        </ul>
                                    </div>
                                    <a className='left-arrow-btn'  href="!#"><img src="../../../public/img/arrow_left.svg" alt="" /></a>
                                    <a className='right-arrow-btn' href="!#"><img src="../../../public/img/arr_right.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="slide-bottom">
                            <div className="bottom-container">
                                <div className="bottom-gap">
                                    <div className="bottom-box123">
                                        <div className="bottom-box">
                                           <hr />
                                            <a href="!#">LF SAINT AUGUSTIN</a>
                                        </div>
                                        <div className="bottom-box">
                                            <hr />
                                            <a href="!#">2F COLLABO</a>
                                        </div>
                                        <div className="bottom-box">
                                            <hr />
                                            <a href="!#">2F MOONTAN BAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

