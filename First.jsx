import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
const First = () => {
  //var company="abc";
  const[company,setCompany]=useState('abc')
  const onchangevalue=()=>{
        //company="tata"
        setCompany("tata")
        console.log(company)
    };
  return (
    <div style={{backgroundColor:'red',height:300}}>
        <Button variant="danger" onClick={onchangevalue}>click</Button>
        <h1>Component-1</h1>
        <h2 className='text-primary'>company name is {company}</h2>
    </div>
  )
}

export default First