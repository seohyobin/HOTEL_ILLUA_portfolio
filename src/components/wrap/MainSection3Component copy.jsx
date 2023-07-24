import React from 'react';
import $ from 'jquery';

export default function MainSection3Component(slide){
    const [state, setState] = React.useState(slide);
       
   React.useEffect(()=>{
    let setId=0;
    let cnt=0;


            //1.메인슬라이드
            
            function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-1369*cnt}px`}, 3000,function(){
                    if(cnt===5) cnt=0;//처음이면 처음으로
                    if(cnt<0) cnt=4; //첫번째 왼쪽으로 이동하면 마지막슬라이드로 이동
                    $('.slide-wrap').stop().animate({left:`${-1369*cnt}px`},'ease',0);//처음으로 리턴
                });
            }

            //2-1.다음카운트함수

            function nextCount(){
                cnt++;
                mainSlide();
            }
            //2-2.이전카운트함수       
            function prevCount(){
                cnt--;
                mainSlide();
            }

    //3.자동타이머함수
    function autoTimer(){
        setId=setInterval(nextCount, 3000);
        console.log(setId);
    }
    autoTimer();

  


   })

    //페이지 다음 슬라이드 버튼
    const onClickNextSlide=(e)=>{
     e.preventDefault();



    }
    const onClickPrevSlide=(e)=>{
        e.preventDefault();
    }
    return (
        <section id='section3'>
          <div className="container">
            <div className="gap">
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className='slide slide1'></li>
                                <li className='slide slide2'></li>
                                <li className='slide slide3'></li>
                                <li className='slide slide4'></li>
                                <li className='slide slide5'></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- 좌우화살버튼 --> */}
                <a href="!#" class={`arrow-next-btn ${state.isNextSlideBtn ? ' on': ''}`} onClick={onClickNextSlide}><i></i></a>
                <a href="!#" class={`arrow-prev-btn ${state.isPrevSlideBtn ? ' on' :''}`} onClick={onClickPrevSlide}><i></i></a>
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
MainSection3Component.dafaultProps={
    slide:{
        isNextSlideBtn:false,
        isPrevSlideBtn:false,
    }
    //슬라이드 버튼 

}

