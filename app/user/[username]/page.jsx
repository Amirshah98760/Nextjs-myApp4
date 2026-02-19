import React from 'react'

const Page = async ({ params }) => {

    const { username } = await params; 

    // console.log(username);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">
                User Profile Page
            </h1>

            <h2 className="text-2xl font-bold text-center mt-5">
                Username: {username}
            </h2>
        </div>
    )
}

export default Page;
