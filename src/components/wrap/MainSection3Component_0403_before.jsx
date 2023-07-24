import React from 'react';
import $ from 'jquery';

export default function MainSection3Component({slide,nextCount,prevCount,setId,cnt}){
    const [state, setState] = React.useState({slide});
       
//    React.useEffect(()=>{
//     const $slide = $('#section3 .slide');  
//     const $arrowNextBtn = $('#section3 .arrow-next-btn');  
//     const $arrowprevBtn = $('#section3 .arrow-prev-btn');  
//     let setId= 0;
//     let cnt=0;

               
    

//     function mainNextSlide(){
//             $slide.stop().css({zIndex: 1,opacity:1}); 
//             $slide.eq(cnt===0 ? 2:cnt-1).css({zIndex: 2});//현재슬라이드
//             $slide.eq(cnt).css({zIndex: 3}).stop().animate({opacity:0},0).animate({opacity:1},1000);//다음슬라이드(페이드인 효과)
          

        
//     }
//     //1-2.메인 이전 슬라이드함수
//     function mainPrevSlide (){
//         $slide.stop().css({zIndex: 1,opacity:1}); 
//         $slide.eq(cnt).css({zIndex: 2});//이전슬라이드
//         $slide.eq(cnt===2 ? 0 :cnt+1).css({zIndex: 3}).stop().animate({opacity:1},0).animate({opacity:0},1000);//현재슬라이드
//     }

//         //2-1.다음(next)카운트함수
//         function nextCount(){
//             cnt++;
//             if(cnt>2){ 
//                 cnt=0; 
//             }
//             mainNextSlide();
//         }
//     //2-2.이전(prev)카운트함수
//     function prevCount(){
//         cnt--;
//         if(cnt<0){ //0 미만이면 마지막으로 리턴 초기화 2
//             cnt=2; 
//         }
//         mainPrevSlide();
//     }

//     //3.자동타이머함수
//         function autoTimer(){
//             setId= setInterval(prevCount,3000); // 3초 후 이전 카운트 함수 호출
//         }

//         autoTimer();
  

//    })

    //페이지 다음 슬라이드 버튼
    const onClickNextSlide=(e)=>{
        let isNextSlideBtn=false;
     e.preventDefault();
     if(setId){
        nextCount();
        clearInterval(setId);
        isNextSlideBtn=true;
   
     }
        setState({
            ...state,
            isNextSlideBtn:isNextSlideBtn
        })

    }
    const onClickPrevSlide=(e)=>{
        let isPrevSlideBtn=false;
        e.preventDefault();
        if(setId){
            prevCount();
            clearInterval(setId);
            isPrevSlideBtn=true;
        }
        setState({
            ...state,
            isPrevSlideBtn:isPrevSlideBtn
        })
        
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
                                {/* <li className='slide slide4'></li>
                                <li className='slide slide5'></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- 좌우화살버튼 --> */}
                <a href="!#" class="arrow-next-btn" onClick={onClickNextSlide}><i></i></a>
                <a href="!#" class="arrow-prev-btn" onClick={onClickPrevSlide}><i></i></a>
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

