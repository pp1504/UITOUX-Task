import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import ProductItem from "./ProductItems/ProductItem";

const BASE_URL = "http://localhost:5000";
const ProductList = () => {
    const [topProducts, setTopProducts] = useState( []);
    const [splProducts, setSplProducts] = useState([]);
    const [bestSellerProducts, setBestSellerProducts] = useState( []);

  

    useEffect(() => {
        axios.get(BASE_URL + `/products/by-top-rated/true`).then(response => {
            setTopProducts(response.data)
        }).catch(error => {
            console.log("error ", error)
        });
        axios.get(BASE_URL + `/products/by-special-offer/true`).then(response => {
            setSplProducts(response.data)
        }).catch(error => {
            console.log("error ", error)
        });
        axios.get(BASE_URL + `/products/by-best-seller/true`).then(response => {
            setBestSellerProducts(response.data)
        }).catch(error => {
            console.log("error ", error)
        });

    }, []);

    
  return (
    <div>
         <div className="block-space block-space--layout--divider-nl"></div>
                    <div className="block block-products-columns">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <div className="block-products-columns__title">Top Rated Products</div>
                                    <div className="block-products-columns__list">
                                        <ProductItem products={topProducts} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="block-products-columns__title">Special Offers</div>
                                    <div className="block-products-columns__list">
                                        <ProductItem products={splProducts} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="block-products-columns__title">Bestsellers</div>
                                    <div className="block-products-columns__list">
                                        <ProductItem products={bestSellerProducts} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>
  )
}

export default ProductList