import "./App.css";
import CreditCard from './creditcard.jsx'

function App(){
  return (
    <>
<CreditCard
  type="Visa"
  number="0123456789018875"
  expirationMonth={3}
  expirationYear={21}
  bank="Nordea"
  owner="Ode Ojala"
  bgColor="#11aa99" 
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010993"
  expirationMonth={3}
  expirationYear={21}
  bank="S-pankki"
  owner="Donya Ahmed"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="01234567890162"
  expirationMonth={12}
  expirationYear={19}
  bank="OP"
  owner="Tanvir Nibir"
  bgColor="#ddbb55"
  color="white" 
/>
</>
  )
}

export default App;
