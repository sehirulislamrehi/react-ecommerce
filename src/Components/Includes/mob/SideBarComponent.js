import GetCategoryData from "../../../Functionality/GetCategoryData";
import { Link } from "react-router-dom";


const SideBarComponent = () => {

     const hide_sidebar = () => {
          document.getElementById("side_bar_mob").style.transform  = "translateX(-100%)"
      }

      const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category") 

     return ( 
          <div className="side_bar_mob" id="side_bar_mob">

          <div className="close_sidebar">
               <p id="go_back" onClick={hide_sidebar}> <i className="fas fa-arrow-left"></i> Back</p>
          </div>

          <div className="nav-list-mob">

          {category &&
          category.map( data => (
               <div className="nav-dropdown">
                    <p className="nav-click" id="nav-item-mob-1"> 
                    <Link to={`/category_details/${data.slug}`} >
                         <i className="fas fa-shopping-bag"></i>
                              {data.name}
                    </Link>
                    </p>
               </div>
          ))}
          

          </div>

     </div>
     );
}
 
export default SideBarComponent;