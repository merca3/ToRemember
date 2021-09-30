import { useState } from "react";

function ClickCoin() {
    let [totalCoins, setTotalCoins] = useState(0);
    let [availCoins, setAvailCoins] = useState(0);
    let [amount1xUpgrade, setAmount1xUpgrade] = useState(0);
    let [amount10xUpgrade, setAmount10xUpgrade] = useState(0);
    let [price1xUpgrade, setPrice1xUpgrade] = useState(10);
    let [price10xUpgrade, setPrice10xUpgrade] = useState(90);
    let [isDisabled1x, setIsDisabled1x] = useState(true);
    let [isDisabled10x, setIsDisabled10x] = useState(true);

    const disableBtn = () => {
        availCoins < price1xUpgrade ? setIsDisabled1x(true) : setIsDisabled1x(false);
        availCoins < price10xUpgrade ? setIsDisabled10x(true) : setIsDisabled10x(false);
    }

    const plusCoin = () => {
        setTotalCoins(totalCoins + 1);
        setAvailCoins(availCoins + 1);
        disableBtn();
    }

    const upgrade1x = () => {
        if (availCoins >= price1xUpgrade) {
            setAmount1xUpgrade(amount1xUpgrade + 1);
            setAvailCoins(availCoins - price1xUpgrade);
            setPrice1xUpgrade(Math.round(price1xUpgrade * 1.1));
            disableBtn();
        }

    }

    const upgrade10x = () => {
        if (availCoins >= price10xUpgrade) {
            setAmount10xUpgrade(amount10xUpgrade + 1);
            setAvailCoins(availCoins - price10xUpgrade);
            setPrice10xUpgrade(Math.round(price10xUpgrade * 1.1));
            disableBtn();
        }
    }

    return (
        <div className="text-center">
            <h2 className="my-5 border rounded border-info p-3">Click and reach 1000 points as soons as you can!</h2>
            <button className="btn btn-lg btn-info p-3" onClick={plusCoin}>CLICK ME!</button>
            <div className="my-5">
                <h4 className="mb-4">Total coins: {totalCoins}</h4>
                <h5 className="mb-2">Available coins for upgrades: {availCoins}</h5>
            </div>
            <h6>Upgrades</h6>
            <div className="row justify-content-center my-3">
                <div className="col-2 mx-2">
                    <div className="row">1x upgrades: {amount1xUpgrade}</div>
                    <div className="row">Current price: {price1xUpgrade}</div>
                    <div className="row">
                        <button disabled={isDisabled1x} className="btn btn-info btn-sm" onClick={upgrade1x}>Buy 1x upgrade</button>
                    </div>
                </div>
                <div className="col-2 mx-2">
                    <div className="row">10x upgrades: {amount10xUpgrade}</div>
                    <div className="row">Current price: {price10xUpgrade}</div>
                    <div className="row">
                        <button disabled={isDisabled10x} className="btn btn-info btn-sm" onClick={upgrade10x}>Buy 10x upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickCoin;