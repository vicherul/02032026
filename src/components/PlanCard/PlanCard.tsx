import './PlanCard.css'

interface PlanProps {
    namePlan: string;
    price: number;
    isPopular: boolean;
}

const PlanCard = (props: PlanProps) => {
    // Si es popular, añadimos la clase destacado, si no, nada ""
    const isSpecial = props.isPopular ? 'outstanding' : ''


  return (
    <div className={`plan-card ${isSpecial}`}>
        {props.isPopular && <span className='label-popular'>Mas Elegido</span>}
        <h2>{props.namePlan}</h2>
        <p>{props.price} / mes</p>
    </div>
  )
}

export default PlanCard