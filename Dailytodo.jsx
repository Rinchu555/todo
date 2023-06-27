import { Button,List,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Dailytodo = () => {
    const[item,setItem]=useState("");
    const[newitem,setNewItem]=useState([]);
    const addItem=(e)=>{
        setItem(e.target.value);

    }
    const listofItems=()=>{
        setNewItem((pvalue)=>{
            return[...pvalue,item]

        });
        setItem(" ");
    }

  return (
    <div>
        
      <Typography variant='h4'>Todo Application</Typography>
      <br/><br/>
      <TextField variant='outlined' value={item} label='Enter Todo' onChange={addItem}></TextField><br/><br/>
      <Button variant="contained" onClick={listofItems}>Add Item</Button>
      <br/><br/>
      <ol>
      {newitem.map((val,index)=>{
        return <List key={index} >{ val}</List>;
      })}
      </ol>
      
      

      
    </div>
  )
  }

export default Dailytodo
