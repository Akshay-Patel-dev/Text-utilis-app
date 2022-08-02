import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpclick = () => {
        const newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowclick = () => {
        const newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


 const [text,setText] = useState('Enter text here');
    return (
     <>
        <div className="container" style={{ color :props.mode === 'dark'? 'white':'dark' }  }>
              
                <h1 >{props.heading}</h1>
            <div className="form-group">
                <textarea 
                placeholder={text}
                 onChange = {handleOnChange} className={`form-control   text-${props.mode === 'dark'? 'white':'dark'}`} id="exampleFormControlTextarea1" rows="  8" style={{ backgroundColor :props.mode === 'dark'? 'grey':'white' } }></textarea>
                
            </div>  
            <button className="btn btn-primary" onClick = {handleUpclick} >Conver to UpperCase</button>
            <button className="btn btn-primary m-3" onClick = {handleLowclick} >Conver to LowerCase</button>
            <p className="m-1"> {text.split(" ").length}words and {text.length} are character</p>
            <p>{text}</p>               
            
        </div> 
     </>
    )                                                              
}


