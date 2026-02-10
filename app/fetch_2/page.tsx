'use client'

import { ChangeEvent, useEffect, useState } from "react"
import { EXTRA_STYLE, UserType, STYLE, URL } from '@/constants/type'

export default function Crud() {
    const [user, setUser] = useState<UserType>()
    const [users, setUsers] = useState<UserType[]>()
    const [form, setForm] = useState({
        task: '',
        time: 30,
        isDone: false
    })
    const [editId, setEditId] = useState("0")

    const getAllusers = async () => {
        const response = await fetch(URL)
        const users = await (response.json())
        setUsers(users)
        return users;
    }

    const getuser = async (id: string) => {
        try {
            const response = await fetch(`${URL}/${id}`)
            if (!response.ok)
                throw new Error(`HTTP error! ${response.status}`)
            const user = await response.json()
            setUser(user)
            return user
        }
        catch (error) {
            console.log("Failed to fetch users: ", error)
        }
    }

    const createuser = async () => {
        console.log("Click create user")
        const { task, time, isDone } = form
        if (editId === "0") {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({ task, time, isDone })
            })
        }
        else {
            const response = await fetch(`${URL}/${editId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({ task, time, isDone })
            })
            setEditId("0")
            setForm({ task: '', time: 0, isDone: false })
        }
        await getAllusers()
    }

    const edituser = async (id: string) => {
        const user = await getuser(id)
        setForm({ task: user.task, time: user.time, isDone: user.isDone })
        setEditId(user.id)
    }

    const deleteuser = async (id: string) => {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
        await getAllusers()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
           const { name, value, checked } = e.target
           console.log(name, value, checked)
           setForm((prev) => (
               { ...prev, [name]: value, isDone: checked }
           ))
        }

    useEffect(() => {
        getuser("dddw")
        getAllusers()
        console.log("user: ", user)
    }, [])

    return (
        <div className="p-10 mx-auto max-w-3xl border-2 border-gray-200 shadow-xl mt-10">

            <h1 className="text-3xl font-bold ">Task Manager </h1>
            <div className="border-2 border-gray-400 p-5 mt-5 rounded-xl shadow-xl">
                <h1 className="text-blue-600 font-bold">
                    {(editId === "0") ? "➕ Add New Task" : "➕ Update Task"}
                </h1>
                <div>
                    <div>
                        <input className={`${STYLE} ${EXTRA_STYLE} px-2`} type="text"
                            placeholder="Task Name"
                            name="task"
                            value={form.task}
                            onChange={(e) => setForm({ ...form, task: e.target.value })}
                        />
                    </div>
                    <div>
                        <input className={`${STYLE} ${EXTRA_STYLE} px-2`} type="text"
                            placeholder="⏱️ Time"
                            name="time"
                            value={form.time}
                            onChange={(e) => setForm({ ...form, time: +e.target.value })}
                        />
                    </div>
                    <div>
                        <button className=" m-2 py-2 w-155 shadow rounded text-gray font-bold bg-blue-600 text-white hover:bg-blue-700"
                            onClick={createuser}
                        >Save Task</button>
                    </div>
                    <div>
                        <label className="flex items-center gap-2 text-sm text-gray-700 mt-1 mb-2 ml-1">
                            <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-400" type="checkbox" name="isDone" checked={form?.isDone} onChange={handleChange} />
                            isDone
                        </label>
                    </div>
                </div>
            </div>


            <div className="">
                {user &&
                    (
                        <div>

                        </div>
                    )}
                {users && <ul className="border border-gray-200  mt-10 divide-y  divide-gray-200 shadow-xl">
                    {
                        users.map((item, index) =>
                        (<li className={`flex items-center justify-between py-4 px-4  
                        ${item.isDone
                                ? "bg-green-100"
                                : "bg-white  "
                            }`} key={index}>
                            <div><span className="text-gray-500">#{item.id}</span>  <span className="text-xs font-bold text-gray-500">ACTIVITY. </span>{item.task}  <span className="text-xs font-bold text-gray-500">TIME</span> {item.time} </div>
                            <div>
                                <button className="font-bold px-5 ml-3 mt-1 bg-yellow-100 text-amber-500"
                                    onClick={() => edituser(item.id)}>Edit</button>
                                <button className="font-bold px-5 ml-3 mt-1 bg-red-200 rounded-xs text-red-400"
                                    onClick={() => deleteuser(item.id)}>Delete</button>
                            </div>
                        </li>))
                    }
                </ul>}
            </div>
        </div>
    )
}