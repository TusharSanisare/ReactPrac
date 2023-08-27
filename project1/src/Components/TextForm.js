import React, { useState } from 'react'


export default function TextForm(props) {


    const handleUpClick = () => {
        // console.log("handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClear = () => {
        // console.log("handleUpClick");
        let newText = "";
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("handleUpClick");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("handleOnChange");
    }

    const [text, setText] = useState("Enter text here.....");
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className="my-4">{props.heading}</h1>
                    <textarea className="form-control" id="formGroupExampleInput" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button type="button" className="btn my-3 mx-2 btn-primary" onClick={handleUpClick}>UpperCase</button>
                    <button type="button" className="btn my-3 mx-2 btn-primary" onClick={handleLowClick}>LowerCase</button>
                    <button type="button" className="btn my-3 mx-2 btn-primary" onClick={handleClear}>Clear</button>
                </div>
            </div>
            <div className="container">
                <h4>Your text summary</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
