import './App.css'
import React, {useState, useEffect} from "react"
import QrReader from 'react-qr-scanner'
const App = () => {

    
    const[temp,setTemp]=useState("");
    const[word,setWord]=useState("");
    const[qrCode,setQrCode]=useState("");

  const[delay,setDelay]=useState(100);
    const[result,setResult]=useState("No Result");

    useEffect (()=>{
        setQrCode('http://api.qrserver.com/v1/create-qr-code/?data='+word+'!&size=400x400');
    }, [word]);

    function click(){
        setWord(temp);
        console.log(temp);
    }
   
    
    return(
        <>
            <div className='App'>
                <h1>QR CODE GENERATOR</h1>
                <div className="input-box">
                    <div className="generator">
                        <input type="text" placeholder="Text input" onChange={(e)=>{setTemp(e.target.value)}}></input>
                        <button className="btn" onClick={click}>Generate Code</button>

                        <div className="box">
                            <img src={qrCode}></img>
                            <a href={qrCode} download="QR CODE"> <button className='btn'>Download</button></a>
                        </div>
                    </div>
                    <QrReader></QrReader>
                </div>
            </div>

   
            
        </>
    )
}
export default App