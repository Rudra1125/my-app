import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=() =>{
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("converted to Upper Case","success");
    }

    const handleOnChange=(event) => {
        
        setText(event.target.value);
        
    }
    const handleDownClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower Case","success");
    }
    
    const handleClearClick =() =>{
        setText('');
        props.showAlert("text cleared!","success");
    }
    const handleCopy =() =>{
        // let new 
        // let text=document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("text Copied","success");
    }
    const handleExtraSpaces = () => {
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Space handled!","success");
    }
    const handleCaptalize = () =>{
        var splitText= text.toLowerCase().split(" ");
        for(var i=0;i<splitText.length;i++){
            splitText[i].charAt(0).toUpperCase();
        }
        let newText=splitText.join(" ");
        setText(newText);
        props.showAlert("text capitalize","success");
    }

    const [text, setText] = useState('');
    //text="new Text"//wrong way
    // setText("new text");//correct way
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'dimgrey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Covert To Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleDownClick}>Covert To Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleCaptalize}>Captalize</button>

            </div>
            <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the text</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </> 
    )
}
// !IMPORTANT
//here use filter to neglect the empty strings...
// it takes a function which returns true or false... 
//  if it returns true then the filter will take it otherwise it will neglect it...