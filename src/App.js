import "./App.css";
import { Image } from "./components/Image";
import { Input } from "./components/Input";
import SvgComponent from "./components/eye";
import { useState } from "react";

function App() {
    const [hidden, setHidden] = useState(true);
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value);
    };
    const changeHidde = () => {
        setHidden(!hidden);
    };
    return (
        <div className="container">
            <Input
                type="text"
                size="lg"
                variant="outline"
                RightLogo={SvgComponent}
                rightLogoOnClick={changeHidde}
                onChange={handleChange}
                input={input}
                hidden={hidden}
            />
            <Image
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="image"
                borderRadius="10px"
                width="250px"
                height="auto"
                fit="cover"
            />
        </div>
    );
}

export default App;
