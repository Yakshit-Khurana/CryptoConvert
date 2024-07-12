import { useEffect , useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    //const [date,setDate]=useState('2024-07-02')

    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
        //setDate(res["date"])
        //console.log(data);
        //console.log(date);
    },[currency])
    return data;
}

export default useCurrencyInfo; 