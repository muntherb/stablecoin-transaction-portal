import { getAuth } from "./getAuth";

export const getTransactions = async() => {
    try {
        const {token} = await getAuth()
        const transactions = await fetch('http://localhost:3000/api/transactions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        });
        return transactions.json()
    } catch (error) {
        console.error(error)
    }
}