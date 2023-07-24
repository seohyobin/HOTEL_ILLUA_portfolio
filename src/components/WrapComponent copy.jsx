import React from 'react';
import $ from 'jquery';
import HeaderComponent from './wrap/HeaderComponent';
import MainSection1Component from './wrap/MainSection1Component';
import MainSection2Component from './wrap/MainSection2Component';
import MainSection3Component from './wrap/MainSection3Component';
import MainSection4Component from './wrap/MainSection4Component';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){


    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainSection1Component />
            <MainSection2Component />
            <MainSection3Component />
            <MainSection4Component />
            <FooterComponent />
        </div>
    );
};


