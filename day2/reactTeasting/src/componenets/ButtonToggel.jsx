import React, { useState } from "react";

export default function ButtonToggle() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(prev => !prev);
    };

    return (
        <button onClick={handleClick}>
            {isOn ? "ON" : "OFF"}
        </button>
    );
}