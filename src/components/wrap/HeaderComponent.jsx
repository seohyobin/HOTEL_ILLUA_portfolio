import React from 'react';

export default  function HeaderComponent(){
    return (
        <header id='header'>
           <div className="container">
            <div className="gap">
                <div className="content">
                    <div className="box123">
                        <div className='box1'>
                            <a href="!#"><img src="./img/logo.svg" alt="" /></a>
                        </div>
                        <nav className='box2'>
                            <a href="!#"><span>ROOMS</span></a>
                            <a href="!#"><span>OFFERS</span></a>
                            <a href="!#"><span>DINING & BAR</span></a>
                            <a href="!#"><span>FACILITIES</span></a>
                            <a href="!#"><span>ABOUT</span></a>
                        </nav>
                        <div className="box3">
                            {/* <span>EN </span> */}
                            <button>RESERVATION</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </header>
    );
};
