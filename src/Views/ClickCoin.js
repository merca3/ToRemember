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
        <div className="">
            <h2 className="">Click and reach 1000 points as soons as you can!</h2>
            <button className="" onClick={plusCoin}>CLICK ME!</button>
            <div className="">
                <h4 className="">Total coins: {totalCoins}</h4>
                <h5 className="">Available coins for upgrades: {availCoins}</h5>
            </div>
            <h6>Upgrades</h6>
            <div className="">
                <div className="">
                    <div className="">1x upgrades: {amount1xUpgrade}</div>
                    <div className="">Current price: {price1xUpgrade}</div>
                    <div className="">
                        <button disabled={isDisabled1x} className="" onClick={upgrade1x}>Buy 1x upgrade</button>
                    </div>
                </div>
                <div className="">
                    <div className="">10x upgrades: {amount10xUpgrade}</div>
                    <div className="">Current price: {price10xUpgrade}</div>
                    <div className="">
                        <button disabled={isDisabled10x} className="" onClick={upgrade10x}>Buy 10x upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickCoin;