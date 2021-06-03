
import GetCategoryData from "../../Functionality/GetCategoryData";
import { Link } from "react-router-dom";

const LeftContentComponent = () => {



    const { data:category } = GetCategoryData("https://vuebackend.sehirulislamrehi.com/api/category") 


    return ( 
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 category_desktop">

                { /* category part start */ }
                <div className="left">
                    <div className="title">
                        <h3>Categories</h3>
                    </div>
                    <ul>
                        {category && category.map((data) => (
                        <li className="nav-click-pc" id="cat-id-1">
                            <Link to={`/category_details/${data.slug}`}
                            style={
                                {
                                    color: "#000000"
                                }
                            }
                            >
                            {data.name}
                            </Link>
                        </li>
                        ) )}
                    </ul>
                </div>

            </div>
        </div>
    </div>
    );
}
 
export default LeftContentComponent;