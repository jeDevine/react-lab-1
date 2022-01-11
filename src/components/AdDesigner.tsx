import React, {useState} from 'react';

const AdDesigner = () => {
    const [choice, setChoice] = useState("");
    const [potato, setPotato] = useState(true);
    const [total, setTotal] = useState(20);
    let theme = "";
    {potato ? theme="light" : theme="dark"};


    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className={"ad " + theme}>
                <p>Vote For</p>
                <p className="chosenAd" style={{fontSize: total}}>{choice}</p>
            </div>
            <div className="choice">
                <p>What to Support</p>
                <button onClick={() => setChoice("Chocolate")} disabled={choice==="Chocolate"}>Chocolate</button>
                <button onClick={() => setChoice("Vanilla")} disabled={choice==="Vanilla"}>Vanilla</button>
                <button onClick={() => setChoice("Strawberry")} disabled={choice==="Strawberry"}>Strawberry</button>
            </div>
            <div className="color">
                <p>Color Theme</p>
                <button onClick={() => setPotato(true)} disabled={potato===true}>Light</button>
                <button onClick={() => setPotato(false)} disabled={potato===false}>Dark</button>
            </div>
            <div className="font">
                <p>Font Size</p>
                <button onClick={() => setTotal(total+1)}>Bigger</button>
                <p className="count">{total}</p>
                <button onClick={() => setTotal(total-1)}>Smaller</button>
            </div>
        </div>
    )
}

export default AdDesigner;