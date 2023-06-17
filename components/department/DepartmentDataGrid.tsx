import React,{ useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface Department {
  id: number;
  DeptName: string;
  DeptParent: number;
  DeptLevel: number;
  emp_id: number;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'DeptName', headerName: 'DeptName', width: 130 },
  { field: 'DeptParent', headerName: 'DeptParent', width: 130 },
  { field: 'DeptLevel', headerName: 'DeptLevel', width: 130 },
  { field: 'emp_id', headerName: 'emp_id', width: 150 },
];

export const DepartmentPages = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const response = await fetch('/api/department');
        const data = await response.json();
        const departmentWithId = data.map((department: Department, index: number) => ({
          ...department,
          id: index + 1,
        }));
        setDepartments(departmentWithId); // Update the state with departmentWithId
      } catch (error) {
        console.error('Error fetching departments', error);
      }
    }

    fetchDepartments();
  }, []);

  return (
    <div style={{ height: 667, width: '100%' }}>
      <DataGrid
         rows={departments}
         columns={columns}
         checkboxSelection
         pagination
         pageSize={10}
      />
    </div>
  );
};