
export const getAuth = async () => {
    const token = await fetch('http://localhost:3000/api/auth');
    return token.json();
}