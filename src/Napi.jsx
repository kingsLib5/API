import React, { useEffect, useState } from 'react'

function Napi() {

    let [hold, setHold] = useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setHold(json))
      .catch(err=>console.log("Error"))
    },[])

  return (
    <>
     <div className='h-auto bg-[gray] gap-[20px] grid grid-cols-4'>
       {
        hold  ?
        hold.map((cc)=>(
          <div className=' text-white gap-[20px] p-3 '>
            <div className='h-[80%]'>
                <img src={cc.image} className='h-[180px] w-[100%]' />
            </div>
            <h1 className='h-[20%] bg-white text-[15px] text-black text-ellipsis overflow-hidden whitespace-nowrap flex items-center'>Title:{cc.title}</h1>
            <p className='text-black h-[10%] text-[10px] bg-[white]'>Price:${cc.price}</p>
          </div>
        ))  : <p>loading....</p>
       }
    </div>
    
    
    </>
  )
}

export default Napi