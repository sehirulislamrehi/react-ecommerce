import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FooterComponent from "./Components/Includes/FooterComponent";
import LeftContentComponent from "./Components/Includes/LeftContentComponent";
import CartComponent from "./Components/Includes/mob/CartComponent";
import SearchComponent from "./Components/Includes/mob/SearchComponent";
import SideBarComponent from "./Components/Includes/mob/SideBarComponent";
import NavbarComponent from "./Components/Includes/pc/NavbarComponent";
import TopbarComponent from "./Components/Includes/pc/TopbarComponent";
import TopLogoComponent from "./Components/Includes/pc/TopLogoComponent";
import HomeComponent from "./Components/Pages/HomeComponent";
import ProductDetail from "./Components/Pages/ProductDetailComponent";
import CategoryDetailsComponent from "./Components/Pages/CategoryDetailsComponent";
import ShopComponent from "./Components/Pages/ShopComponent";
import LoginComponent from "./Components/Pages/LoginComponent";
import RegisterComponent from "./Components/Pages/RegisterComponent";

function App() {

  
  
  return (

    <Router>
      <div className="App">

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

              {/* all pages route here */}
              <Switch>
                <Route exact path="/">
                  <HomeComponent></HomeComponent>
                </Route>
                <Route path="/product_details/:slug">
                  <ProductDetail></ProductDetail>
                </Route>
                <Route path="/category_details/:slug">
                  <CategoryDetailsComponent></CategoryDetailsComponent>
                </Route>
                <Route path="/shop">
                  <ShopComponent></ShopComponent>
                </Route>
                <Route path="/login">
                  <LoginComponent></LoginComponent>
                </Route>
                <Route path="/register">
                  <RegisterComponent></RegisterComponent>
                </Route>
              </Switch>
              {/* all pages route here */}

              <FooterComponent></FooterComponent>
            </div>
            
          </div>
        </section>
              
        </div>

    </Router>
    
  
  );
}

export default App;
