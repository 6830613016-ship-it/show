'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

type UserType = {
    login: string
    id: string
    bio: string
    avatar_url: string
}
 

export default function MyFetch() {

    const [user, setUser] = useState('wwarodom')
    const [data, setData] = useState<UserType>()

    useEffect (() => {
        const controller = new AbortController()
        fetchUser()
        return () => controller.abort()
    })

    const fetchUser = async (signal?: AbortSignal) => {
        const URL = `https://api.github.com/users/${ user }`
        const response = await fetch(URL,{signal});
        const data = await response.json()
        console.log("Data: ", data)
        setData(data)
    }

    return <div className='flex flex-col justify-between p-4 border-2 m-8 rounded text-lg shadow-2xl text-gray-600'>
        <h1>Fetch</h1>
        <div className='border bg-amber-100 p-4 rounded'>
            <div>
                <label htmlFor="user">User Name:</label>
            </div>
            <div>
                <input
                    className='border p-2 text-gray-600'
                    type="text" name="user"
                    onChange={(e) => setUser(e.target.value)}
                />
            </div>
            <div>
                <button className='border px-2 m-2 rounded' onClick={() => fetchUser()}>Fetch</button>
            </div>
        </div>

    {   
        data&&
        <div className="flex justify-between p-4 border-2 m-8 rounded text-lg shadow-2xl text-gray-600">
            <div>
                <div>Login: {data.login}</div>
                <div>Id: {data.id}</div>
                <div>bio: {data.bio}</div>
            </div>
            <div>
                <div>
                    <Image src={data.avatar_url}
                        width={100} height={100} alt="my photo" />
                </div>
            </div>
        </div>
    }
    </div>
}