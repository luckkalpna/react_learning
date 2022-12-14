import React, {useState} from "react";

export default function TextBox(props) {
    const handleUpClick = () => {
        console.log("Upper case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text are change to uppercase", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
	return (
        <div className="container" style ={{color: props.mode === 'dark'?'white':'#0e2b51'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'dark'?'white':'#13466e'}} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>

        <div className="container my-3"  style ={{color: props.mode === 'dark'?'white':'#0e2b51'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
        </div>
        </div>
	);
}
