import { useState } from "react";

function ConvertCurrency() {

    return (
        <div className="text-center">
            <h2 className="my-5 border rounded border-info p-3">Convert Euros to Dollars and Dollars to Euros</h2>
            <form className="col-4 align-items-center">
                <div className="input-group mb-3">
                    <label htmlFor="" className="input-group-text col-form-label col-4">Amount in Euros: </label>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <label htmlFor="" className="input-group-text col-form-label col-4">Amount in Dollars: </label>
                    <input type="text" className="form-control" />
                </div>
            </form>
        </div>
    )
}

export default ConvertCurrency;