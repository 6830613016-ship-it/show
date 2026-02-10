'use client'
import React, { useActionState } from 'react'
import submitName from './action'

const STYLE = `border border-gray-400 shadow-xl px-3 py-2 rounded-xl max-w-200 mx-auto`


export default function Action() {
    // fix initialState is empty
    const initialState = {
        error: "",
        message: {
            name: ""
        }
    } 

    const [state,action,isPending] = useActionState(submitName, initialState)
    console.log("State" , state)
  return (

    <div>
        <h1 className={`${STYLE} text-2xl m-2 font-bold`}>Action</h1>
        
        <div className={`${STYLE} mt-10 m-2`} >
            <form action={action}>
                <label className={`${STYLE} bg-blue-600 text-white hover:bg-blue-700`} htmlFor="name">Name</label>
                <input className={`${STYLE} ml-4 mr-4 `} type="text" name='name' placeholder='Enter name' />
                <button className={`${STYLE} bg-blue-600 text-white hover:bg-blue-700`}
                disabled={isPending}>
                 {isPending ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
        <div className={`${STYLE} min-h-40 mt-10`}>
            <div className='mt-5'>
                <span className={`${STYLE} mr-4 bg-blue-500 text-white`}>Show Text</span>
                {state.error && <span className='text-red-400 '>{state.error}</span>}
                {state.message && <span className='text-green-600'>{state.message.name}</span>}
            </div>
        </div>
    </div>
  )
}
