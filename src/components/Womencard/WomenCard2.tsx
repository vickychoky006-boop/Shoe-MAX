import card1 from "../../assets/img/Women/card/Nike1.avif"
import card2 from "../../assets/img/Women/card/Nike2.avif"
import card3 from "../../assets/img/Women/card/Nike3.avif"
import card4 from "../../assets/img/Women/card/Nike4.avif"
import card5 from "../../assets/img/Women/card/adidas1.png"
import card6 from "../../assets/img/Women/card/adidas2.png"
import card7 from "../../assets/img/Women/card/adidas3.png"
import card8 from "../../assets/img/Women/card/adidas4.png"
import hero from "../../assets/img/Women/Hero/hero2.png"
import "../../components/Womencard/WomenCard.css"
import { Link } from "react-router-dom"



function WomenCard2() {
  return (
    <>
   <div className="container-fluid con-bg ">
        <div className="py-5">
            <img src={hero}/>
        <h1 className="mt-5">BEST SELLERS</h1>
        <p>Discover our best-selling collection,
Made for comfort and everyday style</p>
        </div>

  <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="product-card2">
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card1}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Air Zoom Bella</h3>

        <p>
         Responsive cushioning provides stability during workouts.
Perfect for training sessions and active lifestyles
        </p>

        <div className="bottom-section">
          <h4>₹7,999</h4>

<Link to="/card17" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card2}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Quest 6 Women</h3>

        <p>
          Lightweight support helps you stay comfortable on every run.
Designed for daily training and long walka
        </p>

        <div className="bottom-section">
          <h4>₹7,099</h4>

         <Link to="/card18" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card3}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Downshifter</h3>

        <p>
        Breathable upper keeps your feet cool and fresh.
Ideal for running, walking, and everyday comfort
        </p>

        <div className="bottom-section">
          <h4>₹4,999</h4>

         <Link to="/card19" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card4}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Flex Experience Run</h3>

        <p>
          Flexible design allows natural movement with every step.
Built for comfort, fitness, and daily wear
        </p>

        <div className="bottom-section">
          <h4>₹5,995</h4>

         <Link to="/card20" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card5}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Lite Racer</h3>

        <p>
          Lightweight cushioning delivers all-day comfort and support.
Perfect for casual outings and everyday activities
        </p>

        <div className="bottom-section">
          <h4>₹4,499</h4>

         <Link to="/card21" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card6}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas VL Court</h3>

        <p>
          Classic suede-inspired design with modern comfort.
A stylish choice for everyday fashion and wear
        </p>

        <div className="bottom-section">
          <h4>₹5,299</h4>

<Link to="/card22" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card7}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Response Runner</h3>

        <p>
          Built for smooth performance and lasting comfort.
Ideal for running, training, and active lifestyles
        </p>

        <div className="bottom-section">
          <h4>₹5,999</h4>

<Link to="/card23" style={{textDecoration:"none"}}><button className="animated-button">
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
      <div className="img-section2">
        <span className="badge-trending">50%</span>
        <img
          src={card8}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Advantage Base</h3>

        <p>
          Clean and minimal design for versatile styling.
Comfortable enough for all-day everyday use
        </p>

        <div className="bottom-section">
          <h4>₹4,999</h4>

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

export default WomenCard2