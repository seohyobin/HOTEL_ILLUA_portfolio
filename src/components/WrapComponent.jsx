import {useEffect,useRef} from 'react';
import $ from 'jquery';
import HeaderComponent from './wrap/HeaderComponent';
import MainSection1Component from './wrap/MainSection1Component';
import MainSection2Component from './wrap/MainSection2Component';
import MainSection3Component from './wrap/MainSection3Component';
import MainSection4Component from './wrap/MainSection4Component';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    // const wrapRef=useRef();
    // useEffect(()=>{
    //     const wheelHandler =(e)=>{
    //         e.preventDefault();

    //         const {deltaY}=e;
    //         const {scrollTop} = wrapRef.current;
    //         const pageheight = window.innerHeight;
    //         // console.log(deltaY);
    //         // console.log(scrollTop);

    //         if(deltaY>0){
    //             //스크롤 내릴때
    //             if(scrollTop>=0 && scrollTop<pageheight){
    //                 //섹션1
    //                 console.log("1페이지 Down");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight,
    //                     left:0,
    //                     behavior:"smooth"
    //                 });
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<pageheight*2){
    //                 console.log("2페이지 Down");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight*2,
    //                     left:0,
    //                     behavior:"smooth"
    //                 });
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<pageheight*3){
    //                 console.log("3페이지 Down");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight*3,
    //                     left:0,
    //                     behavior:"smooth"
    //                 });
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<pageheight*4){
    //                 console.log("4페이지 Down");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight*4,
    //                     left:0,
    //                     behavior:"smooth"
    //                 });
    //             }
    //             else{
    //                 console.log("마지막");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight*4,
    //                     left:0,
    //                     behavior:"smooth"
    //                 });
    //             }
    //         }
    //         else{//스크롤올릴때
    //             if(scrollTop>=0 && scrollTop<pageheight){
    //                 console.log("1페이지 up");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:0,
    //                     left:0,
    //                     behavior:"smooth"
    //                 })
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<(pageheight*2)){
    //                 console.log("2페이지 up");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:0,
    //                     left:0,
    //                     behavior:"smooth"
    //                 })
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<(pageheight*3)){
    //                 console.log("3페이지 up");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:0,
    //                     left:0,
    //                     behavior:"smooth"
    //                 })
    //             }
    //             else if(scrollTop>=pageheight && scrollTop<(pageheight*4)){
    //                 console.log("4페이지 up");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:0,
    //                     left:0,
    //                     behavior:"smooth"
    //                 })
    //             }
    //             else{
    //                 console.log("5페이지 up");
    //                 console.log(deltaY);
    //                 console.log(pageheight);
    //                 wrapRef.current.scrollTo({
    //                     top:pageheight,
    //                     left:0,
    //                     behavior:"smooth"
    //                 })
    //             }
    //         }

    //     };
    //     const wrapWheelCurrent = wrapRef.current;
    //     wrapWheelCurrent.addEventListener("wheel",wheelHandler);
    //     return()=>{
    //         wrapWheelCurrent.removeEventListener("wheel",wheelHandler);
    //     };
    // },[]);

    return (
        <div id='wrap' >
            <HeaderComponent/>
            <MainSection1Component/>
            <MainSection2Component/>
            <MainSection3Component/>
            <MainSection4Component/>
            <FooterComponent />
        </div>
    );
};


