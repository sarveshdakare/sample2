import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./App.css";

const View=()=>{

  const[data,setData]=useState([])
  const[pres,setPres]=useState([])

useEffect(()=>{
  getData();
  getPres();
},[])

const getData=async()=>{
  let result=await fetch('http://localhost:8080/viewdata')
  result=await result.json();
  setData(result)
}

const getPres=async()=>{
  let result=await fetch('http://localhost:8080/count')
  result=await result.json();
  setPres(result)
}


  return(
    <div className='list'>
      <ul>
        <li>Sr No.</li>
        <li>Roll No</li>
        <li>Name</li>
        <li>Checkin</li>
        <li>Checkout</li>
        <li>Date</li>
      </ul>
      {
        data.length>0?data.map((item,index)=>
        <ul key={item._id} >
                    <li>{index+1}</li>
                    <li>{item.roll}</li>
                <li>{item.name}</li>
                <li>{item.checkin}</li>
                <li>{item.checkout}</li>
               <li>{new Date(item.time).toLocaleString("en-US",{ year: "numeric",
        month: "2-digit",
        day: "numeric"
    })}</li>
                    </ul>
        ):<h1>No Result Found</h1>
      }

<div className='attendance'>
<h2>Present Student:{pres}</h2>
</div>
     
     
    </div>
  )
}

export default View
