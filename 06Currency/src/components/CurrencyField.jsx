import React,{ useId } from "react";
function CurrencyField({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    SelectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    }
){
    return(
        <>
            <div className="h-[150px]" >
                <div className="flex w-[100%] justify-between p-0 m-0">
                    <label>{label}</label>
                    <label>Currency Type</label>
                </div>
                <br></br>
                <div className="flex justify-between">
                    <input className="h-[4rem] bg-slate-300 rounded-md text-black"
                    type="number" placeholder="Amount" value={amount} disabled={amountDisable}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} ></input>
                    <select  value={SelectCurrency}
                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                        className="w-[40%] bg-slate-300 text-black"
                    >
                        {currencyOptions.map((current)=>(
                            <option key={current} value={current}>{current}</option>

                        ))}
                    </select>
                </div>
            </div>
        </>
    );  
}

export default CurrencyField; 