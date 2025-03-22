import React, { useState } from 'react'

export default function TextForm() {

   const [text, setText] = useState("Enter your text here");

    const handleUpclick = ()=>{
        console.log("On click" +text)
        let newtext= text.toUpperCase();
        setText(newtext);
       
    }
    const handleUpclick1 = ()=>{
        let lowercasestate = text.toLowerCase();
        setText(lowercasestate)
    }
    const handleUpchange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            
            <div class="form-group">
                {/* <h1>{props.heading}</h1> */}
                <label for="exampleFormControlTextarea1">Enter your city</label>
                <div className='mb-3'>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleUpchange}></textarea>
                </div>
            </div>

            <div>
            <button class="btn btn-primary mb-2" onClick={handleUpclick}>Change to Uppercase</button>
            <button class="btn btn-primary mb-2" onClick={handleUpclick1}>Change to Lowercase</button>
            </div>
        </div>
        <div className='container my-3'>
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h1>Welcome To Supreme Solar {text}</h1>
            <p>Preview</p>
            <p>{text}</p>
        </div>
        </>
        
    )
}

