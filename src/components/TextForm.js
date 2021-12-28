import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=() =>{
        // console.log("upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("converted to Upper Case","success");
    }

    const handleOnChange=(event) => {
        // console.log("On change");
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
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
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
                    <textarea className="form-control" id="myBox" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1"onClick={handleUpClick}>Covert To Upper Case</button>
                <button className="btn btn-primary mx-1"onClick={handleDownClick}>Covert To Lower Case</button>
                <button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1"onClick={handleCaptalize}>Captalize</button>

            </div>
            <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read the text</p>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </> 
    )
}
