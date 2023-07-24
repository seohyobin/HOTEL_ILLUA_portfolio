import React from 'react';
import $ from 'jquery';

export default function MainSection3Component(){
           
React.useEffect(()=>{

    const $slideContainer = $('#section3 .slide-container');
    const $slideWrap = $('#section3 .slide-wrap');
    const $slide = $('#section3 .slide');
    const $arrowNextBtn = $('#section3 .arrow-next-btn');
    const $arrowPrevBtn = $('#section3 .arrow-prev-btn');

    let cnt=0;
    let n = $slide.length-2;
    let setId= 0;

    //1.메인
    function mainSlide(){
        $slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
            if(cnt >= n){
                cnt = 0;
            }
            if(cnt< 0){
                cnt=n-1;
            }
            $slideWrap.stop().animate({left:`${-100*cnt}%`},0)
        })
    }

    //2.다음
    function nextCount(){
        cnt++;
        mainSlide();
    }

    //3.이전 
    function prevCount(){
        cnt--;
        mainSlide();
    }

    //4.자동
    function autoTimer(){
        clearInterval(setId);
        setId = setInterval(nextCount,3000);
    }
    autoTimer();

    //마우스 엔터 오버

    $slideContainer.on({
        mouseenter(){
            clearInterval(setId);
        }
    })
    $slideContainer.on({
        mouseleave(){
            autoTimer();

        }
    })

    //5.다음페이지버튼
    $arrowNextBtn.on({
        click(e){
            e.preventDefault();
            nextCount();
        }
    })

    //6.이전페이지버튼
    $arrowPrevBtn.on({
        click(e){
            e.preventDefault();
            prevCount();
        }
    })
})
    return (
        <section id='section3'>
          <div className="container">
            <div className="gap">
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className='slide slide4'><img src="../img/main_rooms_1369x954_05.jpg" alt="" /></li>
                                <li className='slide slide0'><img src="../img/main_rooms_1369x954_01.jpg" alt="" /></li>
                                <li className='slide slide1'><img src="../img/main_rooms_1369x954_02.jpg" alt="" /></li>
                                <li className='slide slide2'><img src="../img/main_rooms_1369x954_03.jpg" alt="" /></li>
                                <li className='slide slide3'><img src="../img/main_rooms_1369x954_04.jpg" alt="" /></li>
                                <li className='slide slide4'><img src="../img/main_rooms_1369x954_05.jpg" alt="" /></li>
                                <li className='slide slide0'><img src="../img/main_rooms_1369x954_01.jpg" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- 좌우화살버튼 --> */}
                <a href="!#" class="arrow-next-btn"><i></i></a>
                <a href="!#" class="arrow-prev-btn"><i></i></a>
                <div className="text-box">
                    <h2>HEALING <br />IN THE PLACE</h2>
                    <p>편안한 휴식이 있는 공간</p>
                    <ul className='span-box'>
                        <li className='tag'><span>STANDARD <i>  |  </i></span></li>
                        <li className='tag'><span>DELUXE<i>  |  </i></span></li>
                        <li className='tag'><span>SPA<i>  |  </i></span></li>
                        <li className='tag'><span>SUITE</span></li>
                    </ul>
                    <span>VIEW MORE</span>
                </div>
            </div>
          </div>
        </section>
    );
};


