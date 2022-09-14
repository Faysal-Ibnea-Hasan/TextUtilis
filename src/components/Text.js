import React, {useState} from 'react'

export default function Text(props) {
  // For UpperCase
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success");
    }

    // Remove Extra Spaces
    const handleExtraClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    // For Copy Text
    const handleCopyClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
  
    // For Clear Text
    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText =("");
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }

    // For LowerCase
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success");
    }

    // For typing after change
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    // const handleExtractEmail = () => {
    //   var string = text; // Your string containing
    //   var regex = /<(.*)>/g; // The actual regex
    //   var matches = regex.exec(string);
    //   setText(matches)
      
    //   console.log(matches[1]);
      
    //   // console.log("I am email extractor")
    //   // let newText = text.match(/<(.*)>/g);
    //   // setText(newText)
    //   } 

    const[text ,setText] = useState('Enter Your text Here');
    //text='new text";// Wrong way to change the state
    // setText("new text");// Correct way to change the state
    
  return (
    <>
    <div className='container'  style={{color: props.mode === "light" ? "black" : "white"}}>
      <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea style={{backgroundColor: props.mode === "light" ? "white" : "#212529" , color: props.mode === "light" ? "black" : "white"}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>

<button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>

<button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

<button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>

<button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleExtraClick}>Remove Extra Spaces</button>

{/* <button className="btn btn-primary mx-2" onClick={handleExtractEmail}>Extract Emails</button> */}


    </div>
    <div className="container my-3"  style={{color: props.mode === "light" ? "black" : "white"}}>
      <h2>Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b> words and</b> {text.length} <b>characters</b></p> 
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} <b>minutes to read</b></p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Enter Your Text To Preview Here"}</p>
    </div>
    
    </>
  
    

    
  )
}
// filter((element)=>{return element.length!==0}) For removing extra 1st space
// disabled={text.length===0} disable buttons when there is nothing