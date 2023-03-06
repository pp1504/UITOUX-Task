import React, { useState, useEffect } from 'react'

import axios from 'axios';

const BASE_URL = "http://localhost:5000";

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(BASE_URL + "/brands").then(response => {
            console.log(response.data);
            setBrands(response.data);

        }).catch(error => {
            console.log("error ", error)
        })
    }, []);


    return (
        <div>

            <div class="block-space block-space--layout--divider-nl"></div>
            <div class="block block-brands block-brands--layout--columns-8-full">
                <div class="container">
                    <ul class="block-brands__list">

                        {brands.map((brand, index) => {
                            return (

                                <li class="block-brands__item" key={index} style={{ border: '1px solid #f5f5f5' }}>
                                    <a href="" class="block-brands__item-link"  >
                                        <img src={`${BASE_URL}/${brand.brandImage}`} alt="" />
                                        <span class="block-brands__item-name">{brand.brandName}</span>
                                    </a>

                                </li>



                            )

                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brand