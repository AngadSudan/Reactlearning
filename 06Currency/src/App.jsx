import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import { CurrencyField } from './components'
import './App.css'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom]= useState("usd");
  const [to, setTo] = useState("inr");
  const [convert, setconvert]= useState(0);
  const currencyInfo= useCurrencyInfo(from);
  
  const options= Object.keys(currencyInfo);
  
  const swap=()=>{
    setFrom(to);
    setTo(from);
    setconvert(amount);
    setAmount(convert);
  }
  const converter=()=>{
    setconvert(amount * currencyInfo[to]);
    console.log(convert);
    
  }
  const execute=(e)=>{
    e.preventDefault();
    converter();
  }
  // console.log("currency ", amount * currencyInfo[to]);
  return (
    <>
      <div className="bg-slate-800 p-4 h-[500px]">
        <h1>Currency Converter</h1>
        <br/>
        <form onSubmit={execute}>
          <CurrencyField 
          label="From"
          amount={amount}
          currencyOptions={options} 
          onCurrencyChange={(currency)=>{setFrom(currency)}}
          SelectCurrency={from}
          onAmountChange={(amount)=>{setAmount(amount)}}
            />
          <button type="button" onClick={swap}>Swap</button>
          <CurrencyField 
          label="To"
          amount={convert}
          currencyOptions={options} 
          onCurrencyChange={(currency)=>{setTo(amount)}}
          SelectCurrency={to}
          onAmountChange={(amount)=>{setconvert(amount)}}
          amountDisable
            ></CurrencyField> 
        <button type="submit" className='border-[1px] p-4 border-white'>
          From {from.toUpperCase()} To {to.toUpperCase()}
        </button>
        </form>
      </div>
    </>
  )
}

export default App
