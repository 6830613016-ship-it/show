export const URL = `http://localhost:4000/userComplex`
export const STYLE = `border m-2 py-2 w-155 rounded text-gray font-bold`
export const EXTRA_STYLE = `focus:outline-amber-200`

export type UserType = {
    id: string
    task: string
    time: number
    isDone: boolean
}