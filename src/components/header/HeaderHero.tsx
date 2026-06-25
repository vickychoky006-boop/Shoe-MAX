import slid from "../../assets/img/HomeADD/slide1.jpeg"

import "../../components/header/HeadHero.css"
function HeaderHero(){
    return(
        <>
        <div className="hero">

 
  <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3">
    <div className="container">

      <a className="navbar-brand text-white fw-bold" href="#">
        NIKE
      </a>

      <button className="navbar-toggler" data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center"
        id="navbarNav">

        <ul className="navbar-nav gap-2">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">HOME</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">SHOP</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">ABOUT</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">COLLECTION</a>
          </li>
        </ul>
      </div>

      <i className="bi bi-cart text-white"></i>

    </div>
  </nav>


  <img src={slid} className="hero-img" />


  <div className="hero-content">
    <h1>Make your move more comfortable</h1>
    <button className="btn btn-light">Explore More</button>
  </div>

</div>
        </>
    )
}
export default HeaderHero