import React from 'react'
import { useState } from 'react';
import "./App.css"

const Home=()=>{
  const [name, setName] = React.useState('');
  const [roll, setRoll] = React.useState('');
  const [checkin, setCheckin] = React.useState('');
  const [checkout, setCheckout] = React.useState('');
  const [error, SetError] = React.useState(false)
  const [fromDate, setFromDate] = useState(new Date())
//   const[state,setState]=useState('')


  const add = async () => {
      
      if(!name||!roll||!checkin||!checkout){
          SetError(true)
          return false;
      }


      console.log(name, roll, checkin, checkout,fromDate);

      let result = await fetch("http://localhost:8080/add", {
          method: 'post',
          body: JSON.stringify({ name, roll, checkin, checkout,fromDate}),
          headers: {
              "Content-Type": "application/json"
          }
      });

      result = await result.json();
      console.log(result);

      alert(" added");
  }

  return (
      <div className="product">
          <h1>Fill the form</h1>
          <input type="text" placeholder="Enter  name" className="inputBox"
              onChange={(e) => { setName(e.target.value) }}
              value={name}
          />
          {error && !name && <span className="invalid_input" >Enter valid name</span>}
          <input type="text" placeholder="Enter Roll No:" className="inputBox"
              value={roll}
              onChange={(e) => { setRoll(e.target.value) }}
          />
          {error && !roll && <span className="invalid_input" >Enter valid Roll No</span>}
          <input type="text" placeholder="Enter CheckIn Time:" className="inputBox"
              value={checkin}
              onChange={(e) => { setCheckin(e.target.value) }}
          />
           <input type="text" placeholder="Enter Checkout Time:" className="inputBox"
              value={checkout}
              onChange={(e) => { setCheckout(e.target.value) }}
          />
     



<br />


          <button className="btn" onClick={add} >Submit</button>
      </div>


  )
}

export default Home
