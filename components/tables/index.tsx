// import { useState, useEffect } from 'react';
// import { DataGridDemo } from './demoDataGrid';
// import { deleteEmployee } from './api/employee';
// import { Employee } from '../../pages/types/employee';


// const EmployeeManagement = () => {
//     const [refreshGrid, setRefreshGrid] = useState(false);
//     const [employeeData, setEmployeeData] = useState<Employee[]>([]);

//     useEffect(() => {
//         const fetchEmployeeData = async () => {
//             try {
//                 const response = await fetch('/api/employee');
//                 const data = await response.json();
//                 const employeesWithId = data.map((employee: Employee, index: number) => ({
//                     ...employee,
//                     id: index + 1,
//                 }));
//                 setEmployeeData(employeesWithId);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchEmployeeData();
//     }, [refreshGrid]);

//     const handleDeleteEmployee = async (employeeId: number) => {
//         try {
//             // Delete employee
//             await deleteEmployee(employeeId);
//             setRefreshGrid(!refreshGrid);
//         } catch (error) {
//             console.error('Error deleting employee:', error);
//         }
//     };

//     return (
//         <DataGridDemo
//             employeeData={employeeData}
//             onEmployeeDelete={handleDeleteEmployee}
//         />
//     );
// };

// export default EmployeeManagement;

import React from "react";

export const normal = () => {
    return (
        <div>
            <h1>Normal</h1>
        </div>
    );
}

