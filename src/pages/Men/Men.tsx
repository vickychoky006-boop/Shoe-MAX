import Header from "../../components/header/Header"
import MenBrand from "../../components/MenBrand/MenBrand"
import MensecondBrand from "../../components/MenBrand/MensecondBrand/MensecondBrand"
import MenProduct from "../../components/MenCard/MenProduct"
import MenFooter from "../../components/MenFooter/MenFooter"
import MenHeroes from "../../components/MenHeroes/MenHeroes"


function Men(){
    return(
        <>
        <div className="bg-white">
        <Header/>
        <MenHeroes/>
        <MenBrand/>    
        <MenProduct/>
        {/* <MenCard/>  */}
        <MensecondBrand/>
        <MenFooter/>
        </div>
        
        </>
    )
}
export default Men