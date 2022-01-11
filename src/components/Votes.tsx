import React, {useState} from 'react';

const Votes = () => {
    const [CVote, setCVote] = useState(0);
    const [VVote, setVVote] = useState(0);
    const [SVote, setSVote] = useState(0);
    let total = (CVote+VVote+SVote);
    const percent = (count: number) => {
        return count/total*100;
    }
    let Cpercent = percent(CVote);
    let Vpercent = percent(VVote);
    let Spercent = percent(SVote);
    
    return (
        <div className="Votes">
            <button onClick={()=>setCVote(CVote+1)}>Chocolate</button>
            <button onClick={()=>setVVote(VVote+1)}>Vanilla</button>
            <button onClick={()=>setSVote(SVote+1)}>Strawberry</button>

            <div className="Chocolate">
            {CVote > 0 ? <p>Chocolate: {CVote} ({Cpercent}%)</p> : <p></p>}
                {total > 0 ? <div className="ChocolateBar" style={{width: Cpercent}}></div> : <p>No Votes Yet</p>}
                
            </div>

            <div className="Vanilla">
            {VVote > 0 ? <p>Vanilla: {VVote} ({Vpercent}%)</p> : <p></p>}
                {total > 0 ? <div className="VanillaBar" style={{width: Vpercent}}></div> : <p></p>}
            </div>

            <div className="Strawberry">
            {SVote > 0 ? <p>Strawberry: {SVote} ({Spercent}%)</p> : <p></p>}
                {total > 0 ? <div className="StrawberryBar" style={{width: Spercent}}></div> : <p></p>}
            </div>
        </div>
    )
}

export default Votes;