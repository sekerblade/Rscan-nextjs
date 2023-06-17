import { useEffect, useState } from 'react';

function DepartmentPages(){
    const [departments,setDepartments] = useState([]);

    useEffect(() => {
        async function fetchDepartments(){
            try{
                const response = await fetch('/api/department');
                const data = await response.json();
                setDepartments(data);
            } catch(error){
                console.error('Error fetching departments', error);
            }
        }

        fetchDepartments();
    },[]);

    return (
        <div>
        <h1>DepartMents</h1>
        <ul>
            {departments.map((department)=>(
                <li key={department.id}>{department.name}</li>
            ))}
        </ul>
        </div>
    );
}

export default DepartmentPages;