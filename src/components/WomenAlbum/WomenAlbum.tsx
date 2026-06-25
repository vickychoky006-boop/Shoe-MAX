import "../../components/WomenAlbum/WomenAlbum.css"
import shoe1 from "../../assets/img/Women/Album/Album1.jfif"
import shoe2 from "../../assets/img/Women/Album/Album5.jfif"
import shoe3 from "../../assets/img/Women/Album/Album6.jfif"
import shoe4 from "../../assets/img/Women/Album/Album4.jfif"
function WoMenAlbum(){
    return(
        <>
        <section className="confidence-section">

  <div className="heading-box">
    <h1>
      BE SLEEK
      <br />
      BE CONFIDENT
    </h1>
  </div>

  <div className="small-text">
    Explore footwear that combines style,
    comfort and confidence.
  </div>

  <div className="shoe-grid">

    <div className="shoe-card">
      <img src={shoe1} />
    </div>

    <div className="shoe-card">
      <img src={shoe2} />
    </div>

    <div className="shoe-card">
      <img src={shoe3} />
    </div>

    <div className="shoe-card">
      <img src={shoe4} />
    </div>

  </div>

</section>

    

        
        
        </>
    )
}
export default WoMenAlbum