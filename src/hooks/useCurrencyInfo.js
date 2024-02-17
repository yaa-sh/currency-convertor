import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const[data, setData] = useState("inr")
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))//check the validity of the data before before setting it 
        console.log("data after fetching: "+data);
    }, [currency])
    console.log(data+": fdfdf");
    return data;
};
export default useCurrencyInfo;
