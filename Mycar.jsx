import React from 'react'
import Button from 'react-bootstrap/Button';

const Mycar=(props)=> {
    const clickhandler=()=>{
        alert(('click event generated'))
    }
  return (
    <div>
        <h1 className='text-success'>Mycar brand is{props.brand}</h1>
        <Button variant="primary" onClick={clickhandler}>click</Button>
    </div>
  )
}

export default Mycar