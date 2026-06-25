

import './App.css'

import Women from './pages/women/Women'
import About from './pages/About/About'
import Men from './pages/Men/Men'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/productDeatils/ProductDetails'
import ProductDetails2 from './pages/productDeatils/ProductDetails2'
import ProductDetails3 from './pages/productDeatils/ProductDetails3'
import ProductDetails4 from './pages/productDeatils/ProductDetails4'
import ProductDetails5 from './pages/productDeatils/ProductDetails5'
import ProductDetails6 from './pages/productDeatils/ProductDetails6'
import ProductDetails7 from './pages/productDeatils/ProductDetails7'
import ProductDetails8 from './pages/productDeatils/ProductDetails8'
import ProductDetails9 from './pages/productDeatils/ProductDetails9'
import ProductDetails10 from './pages/productDeatils/ProductDetails10'
import ProductDetails11 from './pages/productDeatils/ProductDetails11'
import ProductDetails12 from './pages/productDeatils/ProductDetails12'
import WomenCardDeatils from './pages/WomenCardDeatils/WomenCardDeatils'
import WomenCardDeatils2 from './pages/WomenCardDeatils/WomenCardDeatils2'
import WomenCardDeatils3 from './pages/WomenCardDeatils/WomenCardDeatils3'
import WomenCardDeatils4 from './pages/WomenCardDeatils/WomenCardDeatils4'
import WomenCardDeatils5 from './pages/WomenCardDeatils/WomenCardDeatils5'
import WomenCardDeatils6 from './pages/WomenCardDeatils/WomenCardDeatils6'
import WomenCardDeatils7 from './pages/WomenCardDeatils/WomenCardDeatils7'
import WomenCardDeatils8 from './pages/WomenCardDeatils/WomenCardDeatils8'
import WomenCardDeatils9 from './pages/WomenCardDeatils/WomenCardDeatils9'
import WomenCardDeatils10 from './pages/WomenCardDeatils/WomenCardDeatils10'
import WomenCardDeatils11 from './pages/WomenCardDeatils/WomenCardDeatils11'
import WomenCardDeatils12 from './pages/WomenCardDeatils/WomenCardDeatils12'




function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/card2' element={<ProductDetails/>}/>
      <Route path='/card1' element={<ProductDetails2/>}/>
      <Route path='/card3' element={<ProductDetails3/>}/>
      <Route path='/card4' element={<ProductDetails4/>}/>
      <Route path='/card5' element={<ProductDetails5/>}/>
      <Route path='/card6' element={<ProductDetails6/>}/>
      <Route path='/card7' element={<ProductDetails7/>}/>
      <Route path='/card8' element={<ProductDetails8/>}/>
      <Route path='/card9' element={<ProductDetails9/>}/>
      <Route path='/card10' element={<ProductDetails10/>}/>
      <Route path='/card11' element={<ProductDetails11/>}/>
      <Route path='/card12' element={<ProductDetails12/>}/>
      <Route path='/card13' element={<WomenCardDeatils/>}/>
      <Route path='/card14' element={<WomenCardDeatils2/>}/>
      <Route path='/card15' element={<WomenCardDeatils3/>}/>
      <Route path='/card16' element={<WomenCardDeatils4/>}/>
      <Route path='/card17' element={<WomenCardDeatils5/>}/>
      <Route path='/card18' element={<WomenCardDeatils6/>}/>
      <Route path='/card19' element={<WomenCardDeatils7/>}/>
      <Route path='/card20' element={<WomenCardDeatils8/>}/>
      <Route path='/card21' element={<WomenCardDeatils9/>}/>
      <Route path='/card22' element={<WomenCardDeatils10/>}/>
      <Route path='/card23' element={<WomenCardDeatils11/>}/>
      <Route path='/card24' element={<WomenCardDeatils12/>}/>
     

      

      
    </Routes>
    {/* <ProductDetails/> */}
  
   
    
    
      
              
    </>
  )
}

export default App
