import React from 'react'

const Page = async ({ params }) => {

    const { postsId , username } = await params; 

    // console.log(postsId);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">
                User Profile Page
            </h1>

            <h2 className="text-2xl font-bold text-center mt-5">
                username : {username}
            </h2>
            <h2 className="text-2xl font-bold text-center mt-5">
               Posts ID: {postsId}
            </h2>
        </div>
    )
}

export default Page;
