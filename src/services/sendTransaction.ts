import { formSchema } from "@/models/formSchema"
import { z } from "zod"
import { getAuth } from "./getAuth"

export const sendTransaction = async (formData:z.infer<typeof formSchema>) => {
    try {
        const {token} = await getAuth()
        const response = await fetch('http://localhost:3000/api/transactions/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(formData)
        });
        return response.json()
    } catch (error) {
        console.error(error)
    }
}