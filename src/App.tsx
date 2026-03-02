
import './App.css'
import StockBadge from './components/StockBadge/StockBadge'
import PlanCard from './components/PlanCard/PlanCard'

function App() {

  return (
    <>
     <StockBadge productName='Monitor 27""' quantity={25} />
     <StockBadge productName='Teclado' quantity={0} />
     <StockBadge productName='Mouse' quantity={6} />

    <PlanCard namePlan='Basico' price={5} isPopular/>
    <PlanCard namePlan='Full' price={25} isPopular={false}/>

    </>
  )
}

export default App