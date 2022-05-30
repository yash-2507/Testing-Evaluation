import { useState } from "react";
import "./Input.css";

export const Input = ({
    type,
    size,
    variant,
    RightLogo,
    rightLogoOnClick,
    onChange,
    input,
    hidden,
}) => {
    let arr = new Array(input.length).fill("x");
    return (
        <div className="inputContainer">
            {/* Add Right Logo */}
            <input
                data-testid="inputTest"
                className={`input ${size || "md"} ${variant || "outline"}`}
                type={`${type || "text"}`}
                onChange={onChange}
                value={!hidden ? input : arr.join("")}
            />
            <RightLogo onClick={() => rightLogoOnClick()} />
        </div>
    );
};
