import { getAuth } from "./getAuth";

export const getBalance = async() => {
    try {
        const {token} = await getAuth()
        const balance = await fetch('http://localhost:3000/api/balance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        });
        return balance.json()
    } catch (error) {
        console.error(error) 
    }
}