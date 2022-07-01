import React, { useState } from 'react'

const Inputodo = () => {
    const [description,setDescription]=useState("");

    const handleSubmit= async e =>{
        e.preventDefault();
        try {
            const body={description};
            const response= await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)

            });
            setDescription("")
            console.log(response);
            
        } catch (err) {
            console.error(err)
            
        }
    }



  return (
    <div className='w-full flex mt-8  '>

        <form className='m-auto flex gap-2' onSubmit={handleSubmit} >
            <input type='text' name='description' placeholder='description' value={description} onChange={(e )=> setDescription(e.target.value)}/>
            <button type='submit'>Submit</button>

        </form>



    </div>
  )
}

export default Inputodo