import React, { useEffect, useState } from 'react'



function Api() {

    let [holder, setHolder] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setHolder(json))
      .catch(err=>console.log("Error"))
    },[])
  return (
    <>
     <div className='h-auto bg-[blue] grid grid-cols-5'>
       {
        holder  ?
        holder.map((cc)=>(
          <div className='bg-slate-800 text-white p-3'>
            <div className='h-[70%]'>
                <img src={cc.url} className='h-[180px] w-[100%]' />
            </div>
            <h1 className='h-[20%] bg-zinc-200 text-white text-ellipsis overflow-hidden whitespace-nowrap flex items-center'>Title:{cc.title}</h1>
          </div>
        ))  : <p>loading........</p>
       }
    </div>
    
    
    </>
   
  )
}

export default Api