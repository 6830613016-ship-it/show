'use client'

import Nav from "@/components/nav"
import { useEffect, useState } from "react"

type UserType = {
    ip?: string
    userAgent?: string
}


export default function FetchPage() {

    const [login, setLogin] = useState('')
    const [data, setData] = useState<UserType | null>()
    const handleFetch = async() => {
        const user = await fetch(`https://dummyjson.com/${login}`)
        const data = await user.json();
        setData(data)
    }
    
    useEffect(() => {
        let cancelled = false

        const fetchUser = async () => {
        const user = await fetch(`https://dummyjson.com/${login}`)
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
            <hr className="mt-4 mb-4" />
            <div className="flex justify-center ">
                <div className="border-2 p-6 mt-10 mb-3 border-gray-100 rounded-2xl shadow-xl w-150">
                    <div className="flex justify-items-start">
                        <div className="w-2 h-10 bg-purple-500 rounded-2xl "></div>
                        <div className="flex items-center ml-2 font-black text-2xl">System Connection Detail</div>
                    </div>
                    <div className="bg-indigo-50 mt-2 rounded-xl pt-3 pl-4 font-bold border border-gray-200">
                        <div className="text-blue-600">NETWORK ADDRESS</div>
                        <div className="text-3xl pb-5 pt-2">{data?.ip}</div>
                    </div>
                    <div className="bg-slate-50 mt-4 rounded-xl pt-3 pl-4 font-bold border border-gray-200">
                        <div className="text-gray-600 font-black">DEVICE IDENTIFIER</div>
                        <div className="pt-3 pb-3 text-gray-500 leading-relaxed italic">{data?.userAgent}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4  ">
                <div className="py-2 px-5 rounded-xl shadow-sm border border-gray-200">
                    <span className="">Search: </span>
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
        </div>
    )
}