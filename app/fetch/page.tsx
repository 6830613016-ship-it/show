'use client'

import Nav from "@/components/nav"
import { useEffect, useState } from "react"

type UserType = {
    userId: string
    id: number
    title: string
    body: string
}


export default function FetchPage() {

    const [login, setLogin] = useState('1')
    const [data, setData] = useState<UserType | null>(null)
    const handleFetch = async() => {
        const user = await fetch(`https://jsonplaceholder.typicode.com/posts/${ login }`)
        const data = await user.json();
        setData(data)
    }
    
    useEffect(() => {
        let cancelled = false

        const fetchUser = async () => {
        const user = await fetch(`https://jsonplaceholder.typicode.com/posts/${ login }`)
        const data = await user.json();
        console.log("User: ", data)
        
        if(!cancelled)
            setData(data)
        }
        fetchUser()
        return () => {
            cancelled = true;
        }},

        [])
    
    return (
        <div>
            <div className="p-5">
                {<h1>Fetch</h1> }
                {JSON.stringify(data)}
            </div>
            <div className="mt-4">
                <hr />
                <div className="flex justify-center mt-10  ">
                    <div className="py-2 px-5 rounded-xl shadow-sm border border-gray-200">
                        <span className="">Enter ID: </span>
                        <input 
                            className="border py-2 w-80 pl-5 m-2 rounded-xl  shadow-xl"
                            type="text" name="login" value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <button className="border-2 py-2 w-20 m-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold" onClick={handleFetch}>
                            Fetch
                        </button>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className="  mt-5 max-w-136 rounded-xl shadow-xl border border-gray-200">
                        <h1 className="text-white font-bold px-3 py-3 bg-blue-600 rounded-t-xl min-w-136">Post Details</h1>
                    <div className="bg-white rounded-b-2xl ">
                            <div className="bg-blue-200 rounded-2xl mt-6 ml-8 max-w-32 "><span className=" font-bold text-blue-700 p-2">USER ID :</span> {data?.userId}</div>
                            <div className="ml-8 text-gray-500"><span className=" ml-2">ID : # </span> {data?.id}</div>
                            <div className="mt-2 ml-6 text-2xl font-bold text-gray-800 capitalize">{data?.title}</div>
                            <div className="ml-6 text-gray-600 mt-4 pb-5 ">{data?.body}</div>
                    </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}