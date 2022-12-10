import React,{useState} from 'react'

export default function Text(props) {
    const handeUp=()=>{
        // console.log('cliked up'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase","success");
    }
    const handeLo=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase","success");
    }
    const handere=()=>{
        let newText = "";
        setText(newText);
        props.showalert("Text Cleared","success");
    }
    const handeco=()=>{
      let text = document.getElementById('mybox')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied To Clipboard","success");
    }

    const handleOnChange=(event)=>{
        console.log('On Change');
        setText(event.target.value);   
    }

    const [text,setText]= useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'lightblue':'dark'}} onChange={handleOnChange} placeholder='Enter text here' id="mybox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-3' onClick={handeUp}  >Convert to UpperCase</button>
  <button className='btn btn-primary' onClick={handeLo}  >Convert to LowerCase</button>
  <button className='btn btn-primary mx-3' onClick={handere}  >Clear</button>
  <button className='btn btn-primary ' onClick={handeco}  >Copy</button>
 </div> 
 <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>Text Summary</h3>
    <p><b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b> Characters</p>
    <p>Read in Minutes :- <b>{0.008 * text.split(" ").length}</b> </p>

 </div>
    </>
  )
}
