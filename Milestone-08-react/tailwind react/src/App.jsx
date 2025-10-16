

import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import PricingOptions from './Components/Pricing-options/PricingOptions'
import Results from './Components/Results'
import MarksChart from './Components/MarksChart'


const fetchPricing=fetch('/data.json').then(res=>res.json())
function App() {
 

  return (
    <>
      
      <Navbar>
         
      </Navbar>
      <Suspense fallback={<p className='container mx-auto'><span className="loading loading-spinner loading-xl"></span></p>}>
        <PricingOptions fetchPricing={fetchPricing}></PricingOptions>
      </Suspense>
      <Results></Results>
      <MarksChart></MarksChart>
          
    </>
  )
}

export default App
