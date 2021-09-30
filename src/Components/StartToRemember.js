import { useState } from "react";

function Remember({happy}) {

    const [color, setColor] = useState("red");
    const changeColor = () => {
        if (color === "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
    }

    return (
        <div className="my-3 text-center border rounded border-info p-5">
            <div>
                I remember something! {happy}
            </div>
            <button className="btn" onClick={changeColor} style={{ backgroundColor: color }}>Hoorray!</button>
        </div>
    )
}

export default Remember;