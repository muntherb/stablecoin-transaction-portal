import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    //mock login
    return Response.json({ token: 'tokenExample', expiresIn: 86400 })
  }