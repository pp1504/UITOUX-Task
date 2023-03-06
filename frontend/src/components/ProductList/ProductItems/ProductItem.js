import React from 'react'

const BASE_URL = "http://localhost:5000";
const ProductItem = (props) => {
    const {products} = props;
  return (


    <div>
             <div className="block-products-columns__list">
                                        {
                                            products && products.length > 0 ?
                                                products.map(product => {
                                                    return (
                                                        <div className="block-products-columns__list-item">
                                                            <div className="product-card">
                                                                <div className="product-card__actions-list">
                                                                    <button className="product-card__action product-card__action--quickview" type="button" aria-label="Quick view">
                                                                        <svg width="16" height="16"><path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
            M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"></path></svg></button>
                                                                </div>
                                                                <div className="product-card__image">
                                                                    <div className="image image--type--product">
                                                                        <a href="product-full.html" className="image__body">
                                                                            <img className="image__tag" src={`${BASE_URL}/${product.image}`} alt="" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-card__info">
                                                                    <div className="product-card__name">
                                                                        <div>
                                                                            <a href="product-full.html" style={{textDecoration:'none'}}>{product.title}</a>
                                                                        </div>
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

                                                                        <div className="product-card__price product-card__price--current">${product.sellingPrice}</div>
                                                                        {
                                                                            product.actualPrice > 0 && <div className="product-card__price product-card__price--old">${product.actualPrice}</div>
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }) : 'loading'
                                        }
                                    </div>
    </div>


  )
}

export default ProductItem