import GetCategoryData from "../../../Functionality/GetCategoryData";
import { Link } from "react-router-dom"
const NavbarComponent = () => {

     const {data:category} = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category");

     return ( 
          <section className="top-navbar">
               <div className="container-fluid">
                    <div className="row">
                         <div className="col-md-12">
                              <div className="nav-item-list">
                                   <ul>
                                        { category && category.map( (data) => (
                                        <li>
                                             <Link to={`/category_details/${data.slug}`}>
                                                  {data.name}
                                             </Link>
                                        </li>
                                        )) }
                                        
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
 
export default NavbarComponent;