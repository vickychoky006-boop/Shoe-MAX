import { Link } from "react-router-dom"
import card1 from "../../assets/img/Women/card/puma1.avif"
import card3 from "../../assets/img/Women/card/puma2.avif"
import card4 from "../../assets/img/Women/card/puma3.avif"
import card5 from "../../assets/img/Women/card/puma4.avif"



    




import "../../components/Womencard/WomenCard.css"



function WomenCard() {
  return (
    <>
    
    <div className="container-fluid con-bg">
        <div className="py-5">
        <h1>TRENDING NOW</h1>
        <p>Step into confidence with our
most popular shoe collection</p>
        </div>

  <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="product-card2">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card1}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Puma Caven 2.0</h3>

        <p>
         Classic basketball-inspired design with modern comfort.
Perfect for casual wear and everyday styling
        </p>

        <div className="bottom-section">
          <h4>₹ 4,999</h4>

<Link to="/card13" style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">ADD</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>  

        </div>
      </div>
    </div>

    <div className="product-card2">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card4}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Puma Trinity Lite</h3>

        <p>
          Lightweight, durable, and built for peak performance every step of
          the way.
        </p>

        <div className="bottom-section">
          <h4>₹6,499</h4>

         <Link to="/card14" style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">ADD</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>
        </div>
      </div>
    </div>

    <div className="product-card2">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card3}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Puma Graviton Pro</h3>

        <p>
          Sporty design with soft cushioning and reliable support.
Ideal for daily activities and active lifestyles
        </p>

        <div className="bottom-section">
          <h4>₹5,499</h4>

         <Link to="/card15" style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">ADD</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>
        </div>
      </div>
    </div>
    <div className="product-card2">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card5}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Puma Velocity Nitro 3</h3>

        <p>
          Responsive cushioning delivers speed and performance.
Built for runners who demand comfort and durability
        </p>

        <div className="bottom-section">
          <h4>₹10,999 </h4>

         <Link to="/card16" style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">ADD</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>
        </div>
      </div>
    </div>
   
    </div>
    
    </div>
    
    
   </> 
  )
}

export default WomenCard