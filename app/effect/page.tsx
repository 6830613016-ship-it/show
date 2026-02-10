'use client' 

import { useEffect, useState } from "react"

export default () => {
    const [a , setA] = useState(1)
    const [b , setB] = useState(2)
    // console.log("Component rendering")

    useEffect(() => {
        console.log("Component Did Mount")
        const id = setInterval( () => {
            console.log("Next.js is very easy")
        }, 1000)

        return () => {
            console.log("Component Unmount!")
            clearInterval(id)
        }
    },[a,b])

    return <div className="p-2 m-2 border">
        useEffect
        <div>
            {a}
            <button className="border m-2 p-2" onClick={() => setA(a + 1)}>Add
            </button>
        </div>
        <div>
            {b}
            <button className="border m-2 p-2" onClick={() => setB(b + 1)}>Add
            </button>
        </div>
    </div>
}