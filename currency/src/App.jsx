import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmt] = useState(0)
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [convert,setConvert]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  //console.log(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvert(amount)
    setAmt(parseInt(convert))
  }

  const convertFunct=()=>setConvert((amount*currencyInfo[to]).toFixed(2));

  const BackgroundImage="https://i.pinimg.com/1200x/a9/fb/b9/a9fbb91904d1baa087dc702827e4397c.jpg";
  
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url('${BackgroundImage}')`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xl bg-white/30">
          <form
          onSubmit={(e) => {e.preventDefault(); convertFunct()}}
          >
          <div className="w-full mb-1">
            <InputBox 
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmt(amount)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 text-xl"
            onClick={swap}
            >SWAP
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox 
            label="To"
            amount={convert}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency)=>setTo(currency)}
            amountDisable
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-xl" onClick={convertFunct}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
