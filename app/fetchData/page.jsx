"use client"

import {useState, useEffect} from 'react'

const page = () => {
    const [posts, setPosts] = useState([]);

    const URL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(URL);
                const data = await response.json();
                console.log(data)
                setPosts(data);

            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    })
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-10'>
        {posts.map((post)=>{
            return(
                <div key={post.id} className='border border-gray-300 p-4 rounded-lg mb-4'>
                    <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
                    <p>{post.body}</p>
                </div>  
            )
        })}
    </div>
  )
}

export default page