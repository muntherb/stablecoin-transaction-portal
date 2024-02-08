import { NextRequest } from "next/server"
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
    const headers = request.headers
    const token = headers.get("authorization")
    //mock token checking
    if (!token) {
        return Response.json({ status: 401, message: "Unauthorized" })
    }
    //mock get user by token fn
    const userId = Math.floor(Math.random() * 1000000) 
    if (!userId) {
       return Response.json({ status: 401, message: "Unauthorized" })
    }
    //mock get transactions by userId from DB
    const file = await fs.readFile(process.cwd() + '/src/data.json', 'utf8');
    const transactions = JSON.parse(file)?.transactions ?? []
    return Response.json({ status: 200, transactions })
  }