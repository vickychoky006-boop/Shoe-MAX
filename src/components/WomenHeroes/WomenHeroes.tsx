
import Shoe1 from "../../assets/img/Women/Hero/Shoe1.jfif"
import Shoe2 from "../../assets/img/Women/Hero/Shoe2.jfif"
import Shoe3 from "../../assets/img/Women/Hero/Shoe3.jfif"
import Shoe4 from "../../assets/img/Women/Hero/Shoe4.jfif"
import Shoe5 from "../../assets/img/Women/Hero/shoe5.jpeg"
import Shoe6 from "../../assets/img/Women/Hero/Shoe6.jfif"

import "../../components/WomenHeroes/WomenHeroes.css"


function WoMenHeroes(){
    return(
        <>

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
                src={Shoe5}
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
          </span>product-card1
        </div>

        <div className="products-row">

       
            <div className="product-card1" >

              <div className="heart">♡</div>

              <img
                src={Shoe4}
                alt=""
                className="product-img"
              />

              <p className="fs-5">Nike Air Max SC</p>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <p>₹6,999</p>

            </div>
             <div className="product-card1" >

              <div className="heart">♡</div>

              <img
                src={Shoe1}
                alt=""
                className="product-img"
              />

              <p className="fs-5">Nike Revolution 7</p>

              <small>
                ⭐ 4.8 • 400 Items Sold
              </small>

              <p>₹4,299</p>

            </div>
             <div className="product-card1" >

              <div className="heart">♡</div>

              <img
                src={Shoe2}
                alt=""
                className="product-img"
              />

              <p className="fs-5">Puma Softride Enzo</p> 

              <small>
                ⭐ 4.6 • 400 Items Sold
              </small>

              <p>₹5,999</p>

            </div>
             <div className="product-card1" >

              <div className="heart">♡</div>

              <img
                src={Shoe3}
                alt=""
                className="product-img"
              />

              <p className="fs-5">Puma Flyer Runner</p>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <p>₹3,999</p>

            </div>
            <div className="product-card1" >

              <div className="heart">♡</div>

              <img
                src={Shoe6}
                alt=""
                className="product-img"
              />

              <p className="fs-5">Puma Flyer Runner</p>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <p>₹3,999</p>

            </div>
            
          

        </div>

      </div>

    </div>

        
        
        </>
    )
}
export default WoMenHeroes