import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import GetCategoryData from "../../Functionality/GetCategoryData";

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
                                <section className="category-product">
        
                                    {/* title row start */}
                                    <div className="row title-row">
                                        <div className="col-md-6 col-8">
                                            <h4>Gadget Items</h4>
                                        </div>
        
                                        <div className="col-md-6 col-4" style={{textAlign: "right"}}>
                                            <a href="">View All</a>
                                        </div>
                                    </div>
                                    {/* title row end */}
        
                                    <div className="row">
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-6.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">6 Blade USB Rechargeable Portable Mini Juicer-Blue</p>
                                                    {/* <p className="regular_price">100 BDT</p> */}
                                                    <p className="offer_price">50 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-8.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">KAKA 40L Travel Sports Men Backpack – Black</p>
                                                    <p className="offer_price">3500 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-9.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Toothbrush Toothpaste Automatic Dispenser Organizer-White
                                                    </p>
                                                    <p className="offer_price">400 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-10.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Multifunction Foldable Kitchen Strainer Bag</p>
                                                    <p className="offer_price">100 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-7.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Three Layer Drain Soap Holder</p>
                                                    <p className="offer_price">180 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-6.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">6 Blade USB Rechargeable Portable Mini Juicer-Blue</p>
                                                    <p className="regular_price">100 BDT</p>
                                                    <p className="offer_price">50 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-8.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">KAKA 40L Travel Sports Men Backpack – Black</p>
                                                    <p className="offer_price">3500 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                        {/* product start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-9.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Toothbrush Toothpaste Automatic Dispenser Organizer-White
                                                    </p>
                                                    <p className="offer_price">400 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* product end */}
        
                                    </div>
        
                                </section>
                                {/* category wise product section end */}
        
                                {/* category wise product section start */}
                                <section className="category-product">
        
                                    {/* title row start */}
                                    <div className="row title-row">
                                        <div className="col-md-6 col-8">
                                            <h4>Consumer Promotions</h4>
                                        </div>
        
                                        <div className="col-md-6 col-4" style={{textAlign: "right"}}>
                                            <a href="">View All</a>
                                        </div>
                                    </div>
                                    {/* title row end */}
        
                                    <div className="row">
        
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-11.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Tresemme Shampoo Hair Fall Defense (Clutch Bag Free) 580ml
                                                    </p>
                                                    <p className="offer_price">630 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-12.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Sunsilk Shampoo Hijab Anti Dandruff (1GB Data Free) 375ml
                                                    </p>
                                                    <p className="offer_price">335 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-13.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Sunsilk Shampoo Lusciously Thick & Long (Makeup Bag Free)
                                                        650ml</p>
                                                    <p className="offer_price">550 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-14.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Dove Shampoo Oxygen Moisture (Towel Free) 340ml</p>
                                                    <p className="offer_price">370 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-15.png" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Vim Dishwashing Liquid Multi Pack (Free Bowl) 500ml</p>
                                                    <p className="offer_price">220 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-11.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Tresemme Shampoo Hair Fall Defense (Clutch Bag Free) 580ml
                                                    </p>
                                                    <p className="offer_price">630 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-12.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Sunsilk Shampoo Hijab Anti Dandruff (1GB Data Free) 375ml
                                                    </p>
                                                    <p className="offer_price">335 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-13.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Sunsilk Shampoo Lusciously Thick & Long (Makeup Bag Free)
                                                        650ml</p>
                                                    <p className="offer_price">550 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
        
                                    </div>
        
                                </section>
                                {/* category wise product section end */}
        
                                {/* category wise product section start */}
                                <section className="category-product">
        
                                    {/* title row start */}
                                    <div className="row title-row">
                                        <div className="col-md-6 col-8">
                                            <h4>Cooking Products</h4>
                                        </div>
        
                                        <div className="col-md-6 col-4" style={{textAlign: "right"}}>
                                            <a href="">View All</a>
                                        </div>
                                    </div>
                                    {/* title row end */}
        
                                    <div className="row">
        
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-16.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Rupchanda Soyabean Oil 5ltr</p>
                                                    <p className="offer_price">525 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-17.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Chashi Aromatic Chinigura Rice 1kg</p>
                                                    <p className="offer_price">125 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-18.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Nazirshail Rice Standard (Palki)25 kg</p>
                                                    <p className="offer_price">1470 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-19.png" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Radhuni Chili (Morich) Powder 200g</p>
                                                    <p className="offer_price">95 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-20.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Teer Atta 1 kg</p>
                                                    <p className="offer_price">36 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-16.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Rupchanda Soyabean Oil 5ltr</p>
                                                    <p className="offer_price">525 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-17.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Chashi Aromatic Chinigura Rice 1kg</p>
                                                    <p className="offer_price">125 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
                                        {/* item start */}
                                        <div className="col-md-2 col-6">
                                            <div className="product-box">
                                                <a href="">
                                                    <div className="image">
                                                        <img src="/images/product-18.jpg" className="img-fluid" alt=""></img>
                                                    </div>
                                                    <p className="name">Nazirshail Rice Standard (Palki)25 kg</p>
                                                    <p className="offer_price">1470 BDT</p>
                                                    <button className="add_cart">Add To Cart</button>
                                                </a>
                                            </div>
                                        </div>
                                        {/* item end */}
        
                                    </div>
        
                                </section>
                                {/* category wise product section end */}
        
                            </div>
                        </div>
                        {/* middle part end */}
        
                    </div>
                </div>
     );
}
 
export default HomeComponent;