import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar(){
    const { cartProducts } = useSelector ((state)=>state.productsData);
   
    return(
        <div className='nav-bar m-3'>
      <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">React-Redux</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <Link className="btn btn-outline-light mr-3" to='/' style={{ textDecoration: 'none',color:"" }}>Home</Link>
        <Link to='/cart' style={{textDecoration:'none', color:''}}>
        <button type="button" className="btn btn-outline-light"><h6><i className="fa fa-shopping-cart" aria-hidden="true"></i> cart <span className="badge badge-secondary">{cartProducts.length}</span></h6></button>
        </Link>
        </div>
      </nav>
      </div>
    )
}

export default NavBar