import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import GetCategoryData from "../../Functionality/GetCategoryData";
import { useState } from "react";

const HomeComponent = () => {


    const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category") 
     
     return ( 
          <div className="container-fluid">
                    <div className="row">
        
                        {/* middle part start */}
                        <div className="col-md-12 banner_desktop">
                            <div className="middle">
        
                                {/* banner start */}
                                <section className="banner_section">
                                    <div className="row">
                                        <OwlCarousel className='owl-theme banner-carousel' 
                                        loop 
                                        items="1"
                                        >
        
                                            {/* banner item start */}
                                            <div className="item">
                                                <div className="col-md-12">
                                                    <div className="banner_image_block">
                                                        <img src="/images/banner-3.jpeg" className="img-fluid" alt=""></img>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* banner item end */}
        
                                            {/* banner item start */}
                                            <div className="item">
                                                <div className="col-md-12">
                                                    <div className="banner_image_block">
                                                        <img src="/images/banner-4.png" className="img-fluid" alt=""></img>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* banner item end */}
        
                                            {/* banner item start */}
                                            <div className="item">
                                                <div className="col-md-12">
                                                    <div className="banner_image_block">
                                                        <img src="/images/banner-5.png" className="img-fluid" alt=""></img>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* banner item end */}
        
        
        
                                        </OwlCarousel>
                                    </div>
                                </section>
                                {/* banner end */}
        
        
                                {/* horizontal category start */}
                                <section className="horizontal_category">
                                    <div className="row">

                                        {category && <OwlCarousel className='category-carousel owl-theme banner-carousel' 
                                        loop 
                                        items="10"
                                        >
        
                                            {/* item start */}
                                            {category.map( data => (
                                            <div className="item">
                                                <div className="col-md-12">
                                                    <a href="" className="horizontal_item">
                                                        <div className="">
                                                            <div className="icon">
                                                                <img src={data.image} alt=""></img>
                                                            </div>
                                                            <p>{data.name}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            ))}
                                            
                                            {/* item end */}
        
        
                                        </OwlCarousel>}
        
                                    </div>
                                </section>
                                {/* horizontal category end */}
        
        
                                {/* category wise product section start */}
                                {category && category.map( cat => (
                                    
                                    <section className="category-product">
                                       
                                        {/* title row start */}
                                        <div className="row title-row">
                                            <div className="col-md-6 col-8">
                                                <h4>{cat.name}</h4>
                                            </div>

                                            <div className="col-md-6 col-4" style={{textAlign: "right"}}>
                                                <a href="">View All</a>
                                            </div>
                                        </div>
                                        {/* title row end */}

                                        <div className="row">

                                            {/* product start */}
                                            { Object.entries(cat.product.data).map( ([key,value]) => (
                                            <div className="col-md-2 col-6">
                                                
                                                <div className="product-box">
                                                    <a href="">
                                                        {console.log(value)}
                                                        <div className="image">
                                                            <img src={value.image} className="img-fluid" alt=""></img>
                                                        </div>
                                                        <p className="name">{value.name}</p>
                                                        {/* <p className="regular_price">100 BDT</p> */}
                                                        <p className="offer_price">{ value.offer_price ? value.offer_price : value.regular_price } BDT</p>
                                                        <button className="add_cart">Add To Cart</button>
                                                    </a>
                                                </div>
                                            </div>
                                            )) }
                                            
                                            {/* product end */}

                                        </div>

                                    </section>
                                ))}
                                {/* category wise product section end */}
        
                                
        
                            </div>
                        </div>
                        {/* middle part end */}
        
                    </div>
                </div>
     );
}
 
export default HomeComponent;