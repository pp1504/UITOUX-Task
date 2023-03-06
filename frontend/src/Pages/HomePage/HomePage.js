import React from 'react'
import Brand from '../../components/Brand/Brand'
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Portfolio from '../../components/Portfolio/Portfolio'
import ProductList from '../../components/ProductList/ProductList'
import SlideImage from '../../components/SildeImage/SlideImage'

const HomePage = () => {
  return (
        <div style={{padding:"10"}}>
          <Header />
          <SlideImage />
          <Brand />
          <FeaturedProducts />
          <Portfolio />
          <ProductList />
          <Footer />
        </div>    

  )
}

export default HomePage