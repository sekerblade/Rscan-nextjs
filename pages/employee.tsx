import React, { useEffect, useState } from 'react';

interface Employee {
    ID: number;
    EnrollNumber: number;
    Prefix: string;
    Name: string;
    SureName: string;
    EmployeeCode: string;
    Status: number;
    DeptID: number;
}

const Employees = () => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('/api/employee');
                const data = await response.json();
                setEmployeeData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEmployeeData();
    }, []);

    return (
        <>
            <h1>ข้อมูลพนักงาน</h1>
            <ul>
                {employeeData.map((employee) => (
                    <li key={employee.ID}>
                        {employee.ID} {employee.Name} {employee.SureName}
                        {employee.EnrollNumber} {employee.EmployeeCode} {employee.DeptID}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Employees;
