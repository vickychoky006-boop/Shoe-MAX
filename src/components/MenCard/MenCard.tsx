

import card1 from "../../assets/img/Men shoe/New folder/card1.jfif"
import card2 from "../../assets/img/Men shoe/New folder/card2.jfif"
import card3 from "../../assets/img/Men shoe/New folder/card3.jfif"
import card4 from "../../assets/img/Men shoe/New folder/card4.jfif"
import card5 from "../../assets/img/Men shoe/New folder/card5.jfif"
import card6 from "../../assets/img/Men shoe/New folder/card6.jfif"
import card7 from "../../assets/img/Men shoe/New folder/card7.png"
import card8 from "../../assets/img/Men shoe/New folder/card8.jfif"
import card9 from "../../assets/img/Men shoe/New folder/card9.png"
import card10 from "../../assets/img/Men shoe/New folder/card10.png"
import card11 from "../../assets/img/Men shoe/New folder/card11.png"
import card12 from "../../assets/img/Men shoe/New folder/card12.png"


import "../../components/MenCard/MenCard.css"
import { Link } from "react-router-dom"





function MenCard(){
    return(
        <>
       <div className="container-fluid cont-bg">
        <div className="py-5">
        <h1>Shop Now, Goodlook Later</h1>
        <p>we have bunch collection for you!,let's go explore and find your dream shoes</p>
        </div>

  <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card1}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Runfalcon 5</h3>

        <p>
          Lightweight design with responsive cushioning for everyday comfort.
Perfect for running, walking, and daily activities
        </p>

        <div className="bottom-section">
          <h4>₹4,999</h4>

<Link to="/card1" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card2}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Ultraboost Light</h3>

        <p>
         Advanced BOOST cushioning delivers superior energy return.
Premium comfort and performance for every step
        </p>

        <div className="bottom-section">
          <h4>₹6,999</h4>

         <Link to="/card2" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card3}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Grand Court 2.0</h3>

        <p>
          Lightweight, durable, and built for peak performance every step of
          the way.
        </p>

        <div className="bottom-section">
          <h4>₹5,499</h4>

         <Link to="/card3" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card4}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Adidas Duramo SL</h3>

        <p>
          Breathable mesh upper keeps your feet cool and fresh.
Designed for active lifestyles and daily training
        </p>

        <div className="bottom-section">
          <h4>₹5,999</h4>

         <Link to="/card4" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card5}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className=" card-body mt-2">
        <h3>Puma Caven 2.0</h3>

        <p>
        Classic basketball-inspired design with modern comfort.
Perfect for everyday wear and casual styling
        </p>

        <div className="bottom-section">
          <h4>₹4,499</h4>

         <Link to="/card5" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card6}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className=" card-body mt-2">
        <h3>Puma Trinity Lite</h3>

        <p>
          Lightweight construction ensures all-day comfort and support.
A bold sneaker designed for modern street fashion
        </p>

        <div className="bottom-section">
          <h4>₹6,499</h4>

          <Link to="/card6" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card8}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className=" card-body mt-2">
        <h3>Puma Flyer Flex</h3>

        <p>
          Flexible sole and breathable upper for smooth movement.
Ideal for workouts, walks, and daily activities
        </p>

        <div className="bottom-section">
          <h4>₹3,799</h4>

         <Link to="/card7" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card9}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Revolution 7</h3>

        <p>
         Lightweight cushioning provides comfort throughout the day.
Perfect for running, walking, and everyday use
        </p>

        <div className="bottom-section">
          <h4>₹4,999</h4>

         <Link to="/card8" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card10}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Puma Velocity Nitro</h3>

        <p>
          Responsive cushioning delivers speed and comfort in every stride.
Built for runners seeking performance and durability
        </p>

        <div className="bottom-section">
          <h4>₹10,999</h4>

          <Link to="/card9" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card11}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Pegasus</h3>

        <p>
          Classic tennis-inspired design with a clean modern look.
Built to deliver style and comfort wherever you go
        </p>

        <div className="bottom-section">
          <h4>₹5,499</h4>

          <Link to="/card10" style={{textDecoration:"none"}}><button className="animated-button">
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

    <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card7}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2">
        <h3>Nike Air Force</h3>

        <p>
         Breathable mesh upper keeps your feet cool and fresh.
Designed for training, running, and daily activities
        </p>

        <div className="bottom-section ">
          <h4>₹5,999</h4>

         <Link to="/card11" style={{textDecoration:"none"}}><button className="animated-button">
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

     <div className="product-card">
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={card12}
          alt="Nike Shoe"
          className="product-img"
        />
      </div>

      <div className="card-body mt-2 ">
        <h3>Nike Air Max 90</h3>

        <p>
          Advanced BOOST technology offers exceptional energy return.
Premium comfort and performance with every step
        </p>

        <div className="bottom-section">
          <h4>₹16,999</h4>

         <Link to="/card12" style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    />
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
export default MenCard