import { Route, BrowserRouter as Router, Switch, useHistory } from "react-router-dom";


import HomeComponent from "./Components/Pages/HomeComponent";
import ProductDetail from "./Components/Pages/ProductDetailComponent";
import CategoryDetailsComponent from "./Components/Pages/CategoryDetailsComponent";
import ShopComponent from "./Components/Pages/ShopComponent";
import LoginComponent from "./Components/Pages/LoginComponent";
import RegisterComponent from "./Components/Pages/RegisterComponent";
import ProfileComponent from "./Components/Pages/ProfileComponent";
import CheckOut from "./Components/Pages/CheckOutComponent";
import InvoiceDetails from "./Components/Pages/InvoiceDetails";



function App() {

  const history = useHistory()
  
  return (

    <Router>
      <Switch>
      <div className="App">
        

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

          <Route path="/profile">
             <ProfileComponent></ProfileComponent> 
          </Route>

          <Route path="/invoice_details/:id">
             <InvoiceDetails></InvoiceDetails>
          </Route>

          <Route path="/checkout">
              <CheckOut></CheckOut>
          </Route>

        
      </div>
      </Switch>
    </Router>
    
  
  );
}

export default App;
