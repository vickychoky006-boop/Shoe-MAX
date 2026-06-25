import Header from "../../components/header/Header"
// import MenCard from "../../components/MenCard/MenCard"
// import MenFooter from "../../components/MenFooter/MenFooter"
import WoMenAlbum from "../../components/WomenAlbum/WomenAlbum"
import WomenCard from "../../components/Womencard/WomenCard"
import WomenCard2 from "../../components/Womencard/WomenCard2"

import WomenFooter from "../../components/WomenFooter/WomenFooter"
import WomenHeroes from "../../components/WomenHeroes/WomenHeroes"

function Women(){
    return(
        <>
        <Header/>
        <WomenHeroes/>
        <WomenCard/>
        <WomenCard2/>
        <WoMenAlbum/>
        <WomenFooter/>
        
        
        </>
    )
}
export default Women