import { useState ,useEffect} from "react";
import React from 'react'
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

const FeaturedProducts = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
      axios.get(BASE_URL + `/products/by-featured-product/true`).then(response => {
         setProductList(response.data)
         
      

      }).catch(error => {
          console.log("error ", error)
      })
  }, []);


    const rating = (ratings) => {
        for (let index = 0; index < ratings; index++) {
           return <div className="rating__star rating__star--active"></div>
             
         }
    }
  return (
    <>
    <div style={{marginTop:"6rem"}}>
         <div className="block block-products-carousel" data-layout="grid-5">
                     <div className="container">
                        <div className="section-header">
                           <div className="section-header__body">
                              <h2 className="section-header__title">Featured Products</h2>
                              <div className="section-header__spring"></div>
                              <ul className="section-header__groups">
                                 <li className="section-header__groups-item"><button type="button" className="section-header__groups-button section-header__groups-button--active">All</button></li>
                                 <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Power Tools</button></li>
                                 <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Hand Tools</button></li>
                                 <li className="section-header__groups-item"><button type="button" className="section-header__groups-button">Plumbing</button></li>
                              </ul>
                              <div className="section-header__arrows">
                                 <div className="arrow section-header__arrow section-header__arrow--prev arrow--prev">
                                    <button className="arrow__button" type="button">
                                       <svg width="7" height="11">
                                          <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z"></path>
                                       </svg>
                                    </button>
                                 </div>
                                 <div className="arrow section-header__arrow section-header__arrow--next arrow--next">
                                    <button className="arrow__button" type="button">
                                       <svg width="7" height="11">
                                          <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
                                             C-0.1,9.8-0.1,10.4,0.3,10.7z"></path>
                                       </svg>
                                    </button>
                                 </div>
                              </div>
                              <div className="section-header__divider"></div>
                           </div>
                        </div>
                     </div>
      
                  </div>
    </div>

    <div className="block block-slideshow">
    <div style={{marginLeft:23}}>

    <div className="block-products-carousel__carousel" style={{"paddingLeft": "95px", "paddingRight": '55px'}}>
                     <div className="block-products-carousel__carousel-loader"></div>
                     <div className="owl-carousel owl-loaded owl-drag">
                        <div className="owl-carousel owl-loaded owl-drag">
      
                           <div className="owl-stage-outer">
      
                              <div className="owl-stage" style={{ transition: "all 0s ease 0s", width: "4730px" }}>
                              {productList ? productList.length > 0  ? productList.map(product =>
                              
                                 <div className="owl-item cloned" style={{ width: "220.5px", marginRight: "16px" }}>
                                    <div className="block-products-carousel__column">
      
                                       <div className="block-products-carousel__cell">
                                          
                                             <div className="product-card product-card--layout--grid">
                                                <div className="product-card__actions-list">
                                                   <button className="product-card__action product-card__action--quickview" type="button" aria-label="Quick view">
                                                      <svg width="16" height="16">
                                                         <path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
                                                            M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"></path>
                                                      </svg>
                                                   </button>
                                                   <button className="product-card__action product-card__action--wishlist" type="button" aria-label="Add to wish list">
                                                      <svg width="16" height="16">
                                                         <path d="M13.9,8.4l-5.4,5.4c-0.3,0.3-0.7,0.3-1,0L2.1,8.4c-1.5-1.5-1.5-3.8,0-5.3C2.8,2.4,3.8,2,4.8,2s1.9,0.4,2.6,1.1L8,3.7
                                                            l0.6-0.6C9.3,2.4,10.3,2,11.3,2c1,0,1.9,0.4,2.6,1.1C15.4,4.6,15.4,6.9,13.9,8.4z"></path>
                                                      </svg>
                                                   </button>
                                                   <button className="product-card__action product-card__action--compare" type="button" aria-label="Add to compare">
                                                      <svg width="16" height="16">
                                                         <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z"></path>
                                                         <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z"></path>
                                                         <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z"></path>
                                                      </svg>
                                                   </button>
                                                </div>
                                                <div className="product-card__image">
                                                   <div className="image image--type--product"><a href="#" className="image__body"><img className="image__tag" src={ `${BASE_URL}/${product.image}` } alt="" /></a></div>
                                                  
                                                </div>
                                                <div className="product-card__info">
                                                   <div className="product-card__meta"><span className="product-card__meta-title">SKU:</span> {(product) ? product.productSKU : ' '}</div>
                                                   <div className="product-card__name">
                                                      <div><a href="product-full.html" style={{textDecoration:"none"}}>{(product) ? product.title : ' '}</a></div>
                                                   </div>
                                                   <div className="product-card__rating">
                                                      <div className="rating product-card__rating-stars">
                                                         <div className="rating__body">
                                                         <div className={`rating__star rating__star${product.ratings>=1 ? "--active" : ""}`}></div>
                                                                <div className={`rating__star rating__star${product.ratings>=2 ? "--active" : ""}`}></div>
                                                                <div className={`rating__star rating__star${product.ratings>=3 ? "--active" : ""}`}></div>
                                                                <div className={`rating__star rating__star${product.ratings>=4 ? "--active" : ""}`}></div>
                                                                <div className={`rating__star rating__star${product.ratings>=5 ? "--active" : ""}`}></div>
                                                            
                                                            
                                                         </div>
                                                      </div>
                                                      <div className="product-card__rating-label">{product.reviews} reviews</div>
                                                   </div>
                                                </div>
      
                                                <div className="product-card__footer">
                                                   <div className="product-card__prices">
                                                      <div className="product-card__price product-card__price--current">${(product) ? product.sellingPrice : ' '}.00</div>
                                                      <div className="product-card__price product-card__price--old">{(product) ? product.actualPrice > 0 ? '$'+ product.actualPrice : null : '0.00'}</div>
                                                   </div>
                                                   <button className="product-card__addtocart-icon" type="button" aria-label="Add to cart">
                                                      <svg width="20" height="20">
                                                         <circle cx="7" cy="17" r="2"></circle>
                                                         <circle cx="15" cy="17" r="2"></circle>
                                                         <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                            V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                            C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                      </svg>
                                                   </button>
                                                </div>
                                             </div>
                                          
                                       </div>
      
                                    </div>
                                 </div>
                                 ) : "No Products" :"loading..."}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  </div>
                  </div>

    </>
  )
}

export default FeaturedProducts