import { formSchema } from "@/models/formSchema"

export async function POST(request: Request) {    
    const headers = request.headers
    const token = headers.get("authorization")
    //mock token checking
    if (!token) {
        return Response.json({ status: 401, message: "Unauthorized"})
    }
    //validate schema
    try {
        const body = await request.json()
        const validated = formSchema.parse(body)
    } catch (error) {
        return Response.json({ status: 400, message: "Invalid request data"})
    }
    //mock transaction send
    const res = { status: 200 }
    if (res.status !== 200) {
        return Response.json({ status: 400, message: "Something went wrong sending your transaction. Please try again later."})
    }
    const transactionId = Math.floor(Math.random() * 1000000)
    return Response.json({ status: 200, message: "Transaction sent successfully", transactionId})
  }