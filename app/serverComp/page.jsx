import React from 'react'

const page = async () => {

    const URL = "https://jsonplaceholder.typicode.com/posts";

    let data = []; 

    try{
        const res = await fetch(URL);
        data = await res.json(); 
    }
    catch(err){
        console.log(err);
    }

  return (

        <section className='p-10 '>
            <h1 className='text-3xl font-bold text-center mb-10 font-roboto'>
            Fetch Data
        </h1>
    <div className='grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 '>

        {data.slice(0, 12).map((post)=>(
            <div key={post.id} className='border border-gray-300 p-4 rounded-lg mb-4'>
                <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
                <p>{post.body}</p>
            </div>  
        ))}
        {/* {data.length} */}
    </div>
        </section>
  )
}

export default page
