import { Route, BrowserRouter as Router, Switch, useHistory } from "react-router-dom";


import HomeComponent from "./Components/Pages/HomeComponent";
import ProductDetail from "./Components/Pages/ProductDetailComponent";
import CategoryDetailsComponent from "./Components/Pages/CategoryDetailsComponent";
import ShopComponent from "./Components/Pages/ShopComponent";
import LoginComponent from "./Components/Pages/LoginComponent";
import RegisterComponent from "./Components/Pages/RegisterComponent";
import ProfileComponent from "./Components/Pages/ProfileComponent";



function App() {

  const history = useHistory()
  
  return (

    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <HomeComponent></HomeComponent>
          </Route>

          <Route path="/product_details/:slug">
            <ProductDetail></ProductDetail>
          </Route>

        </Switch>
      </div>
    </Router>
    
  
  );
}

export default App;
