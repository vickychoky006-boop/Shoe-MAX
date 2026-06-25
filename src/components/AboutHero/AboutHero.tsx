import Aboutimg from "../../assets/img/AboutImg.jfif"

function AboutHero(){
    return(
        <>
        {/* <div className="px-4 py-5 my-5 text-center aboutbg" >
    
    <h1 className="display-5 fw-bold text-body-emphasis">About Shoe-Max</h1>
    <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
           Step into style with premium footwear crafted for comfort, performance, and everyday confidence.
        </p>
        
    </div>
</div> */}
<div className="container my-5">
  <div className="row align-items-center">

    <div className="col-lg-6">
      <img
        src={Aboutimg}
        alt="About Shoe-Max"
        className="img-fluid rounded"
      />
    </div>

    <div className="col-lg-6">
      <h2 className="fw-bold mb-3">Our Story</h2>
      <p className="fs-5 text-secondary">
        Founded with a passion for fashion and comfort, Shoe-Max brings
        together the latest sneaker trends and premium-quality footwear.
        Our mission is to provide stylish and affordable shoes for everyone,
        whether you're an athlete, a trendsetter, or someone who values
        everyday comfort.
      </p>
    </div>

  </div>
</div>



        
        
        



        
        
        </>
    )
}
export default AboutHero