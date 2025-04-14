const getTodos = async ()=>{
    const token = await JSON.parse(localStorage.getItem('jwt'))?.access;
    const response = await fetch('http://localhost:8000/api/todo/',
        {
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
        }
    );
    if(response.ok){
        const data = await response.json();
        return data;
    }
    return [];
}

export default getTodos;