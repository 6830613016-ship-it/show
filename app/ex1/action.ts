import { error } from "console"

export default  async function submitName(prevState: unknown, formData: FormData) {
    const name = formData.get("name") as string
    console.log("Name",name)
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    // await wait(3000)

    if(name.length < 3)
        return {
            error: "Name lenght must be greater than 3 characters",
            message: {name: ""}
        }
    return {
        error: "",
        message: { name }
    }
}