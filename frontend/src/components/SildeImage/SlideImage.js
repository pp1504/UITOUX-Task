import React from 'react'
import slide from '../../assets/slide-1.jpeg';


const SlideImage = () => {
  return (
    <div className='site__body'> 
         <div className="block-space block-space--layout--divider-xs"></div>
         <div className="block block-slideshow">
        <div className="container">
       <div className="block-slideshow__carousel">
          <div className="owl-carousel owl-loaded owl-drag">
             <div className="owl-stage-outer">
                <div className="owl-stage" style={{ transition: " all 0s ease 0s", width: "6510px"}}>
                   
                   
                   <div className="owl-item cloned" style={{ width: "70rem" }}>
                      <a className="block-slideshow__item" href="">
                         <span className="block-slideshow__item-image block-slideshow__item-image--desktop" >
                            <img src={slide} alt="Img"  />
                            </span>
                         <span className="block-slideshow__item-image block-slideshow__item-image--mobile"  ></span>
                         <span className="block-slideshow__item-title" style={{"opacity": 1, "fontSize": '24px', "width": "300px", "lineHeight": '1.4'}}>
                             <span style={{"backgroundColor": "#ffe75e", "padding": '3px'}}>30% OFF</span> <br /> When Buying Parts with Installation  </span>
                         <span className="block-slideshow__item-details" style={{"opacity": 1,  "width": "270px"}}>installation of parts in the services of our partners</span>
                         <span className="block-slideshow__item-button" style={{"opacity": 1, "backgroundColor": "#8fe3a5"}}>Shop Now </span></a></div>
                </div>
             </div>
             <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
             </div>
             <div className="owl-dots" >
                <button role="button" className="owl-dot active" > 
                   <span ></span>
                </button>
                <button role="button" className="owl-dot"><span></span>
                </button>
                <button role="button" className="owl-dot"><span></span></button>
             </div>
          </div>
       </div>
    </div>
 </div></div>
  )
}

export default SlideImage