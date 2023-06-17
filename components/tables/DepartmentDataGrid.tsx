import { useEffect, useState } from 'react';

interface Department {
    ID: number;
    DeptName: string;
    DeptParent: number;
    DeptLevel: number;
    emp_id: number;
  }
  
const DepartmentPages= () => {
    const [departments,setDepartments] = useState<Department[]>([]);

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