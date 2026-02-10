"use client"
import { useTransition } from "react"
import submitName from "../ex1/action"
const STYLE = `border border-gray-400 shadow-xl px-3 py-2 rounded-xl max-w-300 mx-auto`


export default function Action2() {
    const [isPending, startTransition] = useTransition()


    async function handleSubmit(formData: FormData) {
        startTransition(async () => {
            await submitName(null, formData)
        })
    }


    return (
        <div className="mt-4">
            <form className={`${STYLE}`} action={handleSubmit}>
                <input className={`${STYLE}`} name="name" />
                <button className={`${STYLE} ml-4`} disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    )
}
