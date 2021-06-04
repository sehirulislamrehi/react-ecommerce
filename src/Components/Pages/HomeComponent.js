import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import GetCategoryData from "../../Functionality/GetCategoryData";
import { Link } from "react-router-dom";

import FooterComponent from "../Includes/FooterComponent";
import LeftContentComponent from "../Includes/LeftContentComponent";
import CartComponent from "../Includes/mob/CartComponent";
import SearchComponent from "../Includes/mob/SearchComponent";
import SideBarComponent from "../Includes/mob/SideBarComponent";
import NavbarComponent from "../Includes/pc/NavbarComponent";
import TopbarComponent from "../Includes/pc/TopbarComponent";
import TopLogoComponent from "../Includes/pc/TopLogoComponent";

const HomeComponent = () => {

    {/* window scroll to top */}
    window.scrollTo(0, 0);

    const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category") 
     
    return ( 
         
        <div className="id">

            <div className="section-top-fixed">
                <div className="for-pc">
                        <TopbarComponent></TopbarComponent>
                        <TopLogoComponent></TopLogoComponent>
                        <NavbarComponent></NavbarComponent>
                </div>

                <div className="for-mob">
                    <SideBarComponent></SideBarComponent>
                    <SearchComponent></SearchComponent>
                    <CartComponent></CartComponent>
                </div>
            </div>

            <section className="website_main_section" id="website_main_section">
                <div className="website_main_main_row">

                    <div className="left-content">
                    <LeftContentComponent></LeftContentComponent>
                    </div>

                    <div className="right-content">

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
                                                                <img src="/images/banner-3.webp" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* banner item end */}
                
                                                    {/* banner item start */}
                                                    <div className="item">
                                                        <div className="col-md-12">
                                                            <div className="banner_image_block">
                                                                <img src="/images/banner-4.webp" className="img-fluid" alt=""></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* banner item end */}
                
                                                    {/* banner item start */}
                                                    <div className="item">
                                                        <div className="col-md-12">
                                                            <div className="banner_image_block">
                                                                <img src="/images/banner-5.webp" className="img-fluid" alt=""></img>
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
                                                            <Link to={`/category_details/${data.slug}`} className="horizontal_item">
                                                                <div className="">
                                                                    <div className="icon">
                                                                        <img src={data.image} alt=""></img>
                                                                    </div>
                                                                    <p>{data.name}</p>
                                                                </div>
                                                            </Link>
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
                                                        <Link to={`/category_details/${cat.slug}`}>View All</Link>
                                                    </div>
                                                </div>
                                                {/* title row end */}

                                                <div className="row">

                                                    {/* product start */}
                                                    { Object.entries(cat.product.data).map( ([key,value]) => (
                                                    <div className="col-md-2 col-6">
                                                        
                                                        <div className="product-box">
                                                            <Link to={`/product_details/${value.slug}`}>
                                                                <div className="image">
                                                                    <img src={value.image} className="img-fluid" alt=""></img>
                                                                </div>
                                                                <p className="name">{value.name}</p>
                                                                {/* <p className="regular_price">100 BDT</p> */}
                                                                <p className="offer_price">{ value.offer_price ? value.offer_price : value.regular_price } BDT</p>
                                                                <button className="add_cart">Add To Cart</button>
                                                            </Link>
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

                    <FooterComponent></FooterComponent>
                    </div>
                    
                </div>
            </section>
           
        </div>

             
    );
}
 
export default HomeComponent;