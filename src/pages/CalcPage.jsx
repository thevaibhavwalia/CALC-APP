import React from 'react'
import { Output} from '../components/Output.jsx'
import { Button} from '../components/Button.jsx'
import { useState } from 'react'



const CalcPage = () => {
    const [valu,setVal]=useState(" ");
    function handleChange(val)
    {
        if(val!=='=')
        {
            if(val==='AC')
            {
                setVal(" ");
            }
            else{
                setVal(valu + val);
            }

        }
        else
        {
            setVal(eval(valu));
        }



    }
  return (<>
  <div className='container'>
    <div className='text-center row'>
        <div className="container"><h1>CALCULATOR APP</h1></div>
        <Output val={valu}/>
        <div className="container my-3">
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='('/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val=')'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='%'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='AC'/>

        </div>  
        <div className="container my-2">
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='7'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='8'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='9'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='/'/>

        </div> 
        <div className="container my-2">
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='4'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='5'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='6'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='*'/>

        </div> 
        <div className="container my-2"> 
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='1'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='2'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='3'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='-'/>

        </div> 
        <div className="container my-2">
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='0'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='.'/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='='/>
            <Button fn={handleChange} className='btn btn-secondary col-2 me-5' val='+'/>

        </div> 

    </div>
        
    </div>

  


  
 

  </>


    
  )
}

export default CalcPage