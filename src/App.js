import axios from "axios"
import {useEffect, useState} from "react"
import './App.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>

function App() {
const [url, setURL] = useState("")
const [data, setData] = useState([])

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(async () => {
  try{
      const res = await axios.get("http://localhost:3000/")
  console.log(res)
  setData(res.data)
  }catch(err){
      console.log(err)
  }
  },[])
const add = async (e) => {
  // e.preventDefault()
  if(url === ""){
    alert("please enter the long url")
  }else{
    await axios.post("http://localhost:3000/",{
      url:url
    })
    
    console.log(url)
   
  }

}

  return (
    <div className="App">
    <h1> URL - SHORTENER </h1>
    <br />
    <br />
    <div className="input-group mb-3 col-lg-12 text-center"> 
  <input type="url" onChange={(event) => {
    setURL(event.target.value)
  }} className="form-control" placeholder="enter your URL" aria-label="url address" aria-describedby="button-addon2" />
  <div className="input-group-append">
    <button onClick={add} className="btn btn-outline-secondary" type="button" id="button-addon2">submit</button>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 text-center">
   {data.map(e => 
    <ul key={e._id}>
      <li>longURL - <a href={e.URL} target ="_blank" rel="noreferrer"><b>{e.URL}</b></a></li>
      <li >short url -<a href= {e.URL}target ="_blank" rel="noreferrer"><b>{e.shortUrl}</b></a></li>
    </ul>)}
  </div>
</div>
</div>
  
  );
}

export default App;
