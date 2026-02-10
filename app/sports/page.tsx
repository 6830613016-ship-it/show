'use client'

import { ChangeEvent, FormEvent, useState } from "react"

type PersonType = {
    newId: number
    id: number
    task: string
    time: number
    isDone: boolean
}

type PersonPropsType = PersonType & {
    deleteUser: (id: number) => void
    editUser: (id: number) => void
}

export default function Sports() {

    const [persons, setPersons] = useState([
        {id: 1, task: "Play Pingpong", time: 30, isDone: false},
        {id: 2, task: "Swimming at pool", time: 60, isDone: false},
        {id: 3, task: "Write this easy homework", time: 130,isDone: false},
    ])
    const [form, setForm] = useState({ task: 'Sport', time: 30, isDone: false})
    const [editId, setEditId] = useState(-1)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       const { name, value, checked } = e.target
       console.log(name, value, checked)
       setForm((prev) => (
           { ...prev, [name]: value, isDone: checked }
       ))
    }

    const updatePerson = (e: FormEvent) => {
        e.preventDefault()

        if (editId === -1) {
            console.log(persons[length]?.id)
            const id = (persons.length) ? persons[persons.length -1].id+1 :1
            setPersons([...persons, {id, ...form }])
        }
        else {
            const tmpPersons = persons.map((item) => {
                if (item.id === editId) {
                    return {id: editId, ...form}
                }
                else {
                    return {...item}
                }
            })
            setPersons([...tmpPersons])
            setEditId(-1)
            setForm({ task: "", time: 30, isDone: false})
        }
    }

    const deleteUser = (id: number) => {
        console.log("Delete this user id: ", id)
        const tmpPersons = persons.filter((item) => (item.id !== id))
        setPersons(tmpPersons)
    }

    const editUser = (id: number) => {
        console.log("Edit user id: ", id)
        setEditId(id)
        console.log("editId: ", editId)
        const index = persons.findIndex((item) => (item.id === id))
        const { task, time } = persons[index]
        setForm({ task, time , isDone:false})
    }


    return <main className="flex justify-center border-2 ">
        <div className="px-32 py-10 max-w-[92vw]" >
            <h1 className="mb-4 font-bold text-gray-600 flex justify-center text-4xl ">
                Sports Complex
            </h1>
        <ul className=" flex justify-start border-2 border-gray-200 shadow-xl bg-white rounded-xl flex-wrap gap-2 p-5 w-220">
            {
                persons.map((item, index) => (
                    <PersonDetail
                        newId={index}
                        key={index}
                        id={item.id}
                        task={item.task}
                        time={item.time}
                        isDone={item.isDone}
                        editUser={editUser}
                        deleteUser={deleteUser}
                    />
                ))
            }
        </ul>

        <form className="mt-5 border-2 p-4 my-4 bg-white rounded-2xl  shadow-xl border-gray-200"
        action="#" onSubmit={updatePerson}
        >
            <h1 className="font-bold text-blue-60   0">
                {(editId === -1)? "Add" : "Edit"}
                Person
            </h1>
            <div>
                <label className="text-md text-gray-800 text-xs" htmlFor="task">ACTIVITY</label>
            </div>
            <div>
                <input className="border p-2 mb-2 rounded-md text-blue-700 w-full focus:outline-blue-800" type="text " name="task" value={form.task} onChange={handleChange} />
            </div>
            <div>
                <label className="text-md text-gray-600 text-xs" htmlFor="time">TIME ⏱️</label>
            </div>
            <div>
                <input className="border p-2 mb-2 rounded-md text-blue-700 w-full focus:outline-blue-800" type="text " name="time" value={form.time} onChange={handleChange} />
            </div>
            <div>
                <label className="flex items-center gap-2 text-sm text-gray-700 mt-1 mb-2 ml-1">
                    <input className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"type="checkbox" name="isDone"checked={form?.isDone} onChange={handleChange}  />
                    isDone
                </label>   
            </div>
            <div>
                <button
                    className="border px-2 py-1 rounded hover:shadow-xl text-md text-gray-600">
                    {(editId === -1) ? "Add" : "Update"}
                </button>
            </div>
        </form>
        </div>

    </main>



}

function PersonDetail({ newId, id, task, time, isDone, editUser, deleteUser}: PersonPropsType) {
    return (
        <li key={id} >
            <div className={`flex justify-between text-gray-600 font-bold  p-2 rounded-2xl border-blue-200 min-w-[28vw] transition-colors duration-300 shadow-xl border-l-8 
            ${isDone
                    ? "bg-green-100 border-green-600"
                    : "bg-white border-blue-700 hover:-translate-y-1    " 
                }`} >
                <div className="p-4">
                    <div className="text-xs ">ACTIVITY #{newId + 1}</div>
                    <div className="text-2xl text-black">{task}</div>
                    <div>⏱️ {time} mins</div>
                    <div>Status: {isDone ? "true" : "false"}</div>
                </div>
                <div className="flex flex-col justify-center gap-5 pr-2">
                    <button className="  text-gray text-xl hover:text-red-700 hover:text-3xl"
                        onClick={() => deleteUser(id)}
                    > x </button>
                    <button className="border px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700  text-white "
                        onClick={() => editUser(id)}
                    > Edit </button>
            </div>
            </div>
        </li>
    )
}