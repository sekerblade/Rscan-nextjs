import React, { useEffect, useState } from 'react';

interface Employee {
    ID: number;
    Name: string;
    SureName: string;
}

const Employees = () => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);

    useEffect(() => {
        fetch('/api/employee')
            .then((response) => response.json())
            .then((data) => {
                setEmployeeData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <h1>Employee List</h1>
            <ul>
                {employeeData.map((employee) => (
                    <li key={employee.ID}>
                        {employee.ID} {employee.Name} {employee.SureName}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Employees;
