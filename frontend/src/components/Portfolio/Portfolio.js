import React from 'react';
import Banner1 from "../../assets/banner1.jpeg"
import Banner2 from "../../assets/banner2.jpeg"

const Portfolio = () => {
  return (
    <div>
             <div class="block-space block-space--layout--divider-nl"></div>
                <div class="block-banners block">
                    <div class="container">
                        <div class="block-banners__list">
                            <a href="" class="block-banners__item block-banners__item--style--one">
                                <span class="block-banners__item-image">
                                    <img src={Banner1} alt=""/>
                                </span>
                                <span class="block-banners__item-image block-banners__item-image--blur">
                                    <img src={Banner1} alt=""/>
                                </span>
                                <span class="block-banners__item-title">Motor Oils</span>
                                <span class="block-banners__item-details">
                                    Synthetic motor oil with free shipping<br/>Friction free life guaranteed 
                                </span>
                                <span class="block-banners__item-button btn btn-primary btn-sm" style={{backgroundColor:'red',borderColor:"red"}}>Shop Now </span>
                            </a>
                            <a href="" class="block-banners__item block-banners__item--style--two">
                                <span class="block-banners__item-image">
                                    <img src={Banner2} alt=""/>
                                </span>
                                <span class="block-banners__item-image block-banners__item-image--blur">
                                    <img src={Banner2} alt="" />
                                </span>
                                <span class="block-banners__item-title">Save up to $40</span>
                                <span class="block-banners__item-details">
                                    Luxurious interior part for real aesthetes<br/>Leather, fabric, ivory and more. 
                                </span>
                                <span class="block-banners__item-button btn btn-primary btn-sm" style={{backgroundColor:'red',borderColor:"red"}}>Shop Now</span>
                            </a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Portfolio