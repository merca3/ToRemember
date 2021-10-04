import { useState } from "react";

function ConvertCurrency() {

    return (
        <div className="">
            <h2 className="">Convert Euros to Dollars and Dollars to Euros</h2>
            <form className="">
                <div className="">
                    <label htmlFor="" className="">Amount in Euros: </label>
                    <input type="text" className="" />
                </div>
                <div className="">
                    <label htmlFor="" className="">Amount in Dollars: </label>
                    <input type="text" className="" />
                </div>
            </form>
        </div>
    )
}

export default ConvertCurrency;