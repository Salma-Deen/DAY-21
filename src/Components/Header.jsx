/* eslint-disable react/prop-types */
const Header = ({ cart}) => {
  return (
    <>
      <header >
        <nav className="navbar navbar-expand-md navbar-light bg-light" >
          <div className="container px-4 px-md-3">
            <a href=" " className="navbar-brand">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href=" " className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item">
                  <a href=" " className="nav-link">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle show" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    Shop
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" data-bs-popper="static">
                    <li><a className="dropdown-item" href="#">All products</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex  " >
                <button type="submit" className="btn btn-outline-dark ">
                  <i className="bi bi-cart-fill mx-2"></i>
                  Cart
                  <span className="badge rounded-pill bg-dark mx-2">{cart}</span></button>
              </form>
            </div>
          </div >
        </nav >
      </header >
    </>
  )
}

export default Header;
