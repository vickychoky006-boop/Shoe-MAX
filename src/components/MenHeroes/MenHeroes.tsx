
import Slider1 from "../../assets/video/adidas.mp4"
import Slider2 from "../../assets/video/nike.mp4"

import Slider from "../../assets/img/Men shoe/Hero/s.jfif"
import Slider4 from "../../assets/img/Men shoe/Hero/2.jfif"
import Shoe1 from "../../assets/img/Men shoe/Hero/shoe1.jfif"
import Shoe2 from "../../assets/img/Men shoe/Hero/shoe2.jfif"
import Shoe3 from "../../assets/img/Men shoe/Hero/shoe3.jfif"
import Shoe4 from "../../assets/img/Men shoe/Hero/shoe4.jfif"

import "../../components/MenHeroes/MenHeroes.css"


function MenHeroes(){
    return(
        <>
        {/* <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <video
          autoPlay
          loop
          muted
          className="w-100"
          style={{ height: "600px", objectFit: "cover" }}
        >
          <source src={Slider1} type="video/mp4" />
        </video>
    </div>
    <div className="carousel-item">
      <video
          autoPlay
          loop
          muted
          className="w-100"
          style={{ height: "600px", objectFit: "cover" }}
        >
          <source src={Slider2} type="video/mp4" />
        </video>
    </div>
    <div className="carousel-item">
      <video
          autoPlay
          loop
          muted
          className="w-100"
          style={{ height: "600px", objectFit: "cover" }}
        >
          <source src={Slider3} type="video/mp4" />
        </video>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

    <div className="container-fluid py-4 body-con">

      {/* Hero Section */}
      <div className="row g-3">

        <div className="col-lg-8">
          <div className="hero-card">

            <div className="hero-content">
              <div>
                <span className="arrival">
                  NEW ARRIVAL!
                </span>

                <h1>
                  AIR JORDAN 6 GX
                  <br />
                  EASTSIDE
                </h1>

                <p>
                  For urban style from the toe box to the heel
                  pull in a design that's sure easy.
                </p>

                <button className="dark-btn ">
                  View Product
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="hero-img"
              />
            </div>

          </div>
        </div>

        <div className="col-lg-4">
          <div className="offer-card">

            <h2>
              DISC UP TO 50%
              <br />
              FOR SNEAKERS
              <br />
              FEST ID 2023
            </h2>

            <p>
              Join the sneakers fest and get exciting
              offers this month.
            </p>

            <button className="light-btn">
              Event Details
            </button>

          </div>
        </div>

      </div>

     

      <div className="product-section mt-4">

        <div className="heading-row">
          <h3>Today Best Deals!</h3>

          <span className="timer">
            Ends in 12:10:09
          </span>
        </div>

        <div className="products-row">

       
            <div className="product-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe4}
                alt=""
                className="product-img"
              />

              <h5>Puma ST Runner V4</h5>

              <small>
                ⭐ 4.8 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹4,999</h4>

            </div>
             <div className="product-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe1}
                alt=""
                className="product-img"
              />

              <h5>Puma Flyer Flex</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹3,799</h4>

            </div>
             <div className="product-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe2}
                alt=""
                className="product-img"
              />

              <h5>Puma Softride Enzo</h5>

              <small>
                ⭐ 4.7 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹5,999</h4>

            </div>
             <div className="product-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe3}
                alt=""
                className="product-img"
              />

              <h5>Puma R78 Trek</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹4,299</h4>

            </div>
          

        </div>

      </div>

    </div>

        
        
        </>
    )
}
export default MenHeroes