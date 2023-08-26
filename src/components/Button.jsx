import React from 'react'

export const Button = ({val,className,fn}) => {
    function clicked()
    {
        fn(val);
        
    }
  return (


   <button onClick={clicked} className={className}>{val}</button>
  
  )
}

