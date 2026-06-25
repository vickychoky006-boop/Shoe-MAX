import "../../components/MenBrand/MenBrand.css"
import brand1 from "../../assets/img/product/brand logo/adidas-logo.jfif"
import brand2 from "../../assets/img/product/brand logo/vans.jfif"
import brand3 from "../../assets/img/product/brand logo/nike-logo.jfif"
import brand4 from "../../assets/img/product/brand logo/jordan-logo.jfif"
import brand5 from "../../assets/img/product/brand logo/fila-logo.jfif"
import brand6 from "../../assets/img/product/brand logo/puma-logo.jfif"
import brand7 from "../../assets/img/product/brand logo/asics-logo.jfif"

function MenBrand(){
    return(
        <>
        <div className="bran-bg">
        <h1 className="mt-3">Trusted Global Brands</h1>
        <div className="d-flex flex-wrap gap-5 justify-content-center mb-3">
        <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3 ">
        <span></span>
        <img src={brand1} height={500} width={500}/>
    </div>
</div>
      <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand2} height={500} width={500}/>
    </div>
</div>
      <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand3} height={500} width={500}/>
    </div>
</div>
      <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand4} height={500} width={500}/>
    </div>
</div>
      <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand5} height={500} width={500}/>
    </div>
</div>
      <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand6} height={500} width={500}/>
    </div>
</div>
  <div className="brand-container mt-4">
    <div className="card_box  col-6 col-md-3">
        <span></span>
        <img src={brand7} height={500} width={500}/>
    </div>
</div>
  </div>  

</div>
        
        </>
    )
}
export default MenBrand