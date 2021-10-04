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
        <div className="text-center bg-lime-500">
            <div>
                I remember something! {happy}
            </div>
            <button className="rounded py-2 px-4" onClick={changeColor} style={{ backgroundColor: color }}>Hoorray!</button>
        </div>
    )
}

export default Remember;