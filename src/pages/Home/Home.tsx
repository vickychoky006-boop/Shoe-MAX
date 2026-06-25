import Header from '../../components/header/Header'
import Heroes from '../..//components/heroes/Heroes'
import Product from '../../components/product/Product'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import Categories from '../../components/Categories/Categories'
import HomeAccordion from '../../components/HomeAccordion/HomeAccordion'
// import ProductDetails from '../productDeatils/ProductDetails'
// import ProductDetails2 from '../productDeatils/ProductDetails2'
function Home(){
    return(
        <>
        <Header/>
        <Heroes/>
        <Product/>
        <Categories/>
        <Card/>
        <HomeAccordion/>
        <Footer/>
       
        

        
        </>
    )
}
export default Home
