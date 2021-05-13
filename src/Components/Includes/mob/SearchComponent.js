const SearchComponent = () => {
     return ( 
          <section className="search-mob">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1">
                            <div className="left" id="show_sidebar">
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                        <div className="col-11">
                            <div className="right">
                                <form action="">
                                    <div className="form-group cat_block">
                                        <select name="" className="form-control" required>
                                            <option>All Categories</option>
                                            <option>Electronics & Home Appliance </option>
                                            <option>Women's Fashion</option>
                                            <option>Gadget Items </option>
                                            <option>Consumer Promotions </option>
                                            <option>Cooking Products </option>
                                            <option>Food Products </option>
                                            <option>Organic Fruits & Vegetables </option>
                                            <option>Health & Beauty </option>
                                            <option>Home & Cleaning </option>
                                        </select>
                                    </div>
                                    <div className="form-group search_block">
                                        <input type="search" className="form-control" required placeholder="Search..."></input>
                                    </div>
                                    <button type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default SearchComponent;