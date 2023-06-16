import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar, GridLocaleText, GridToolbarExport, GridToolbarContainer } from '@mui/x-data-grid';
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

const columns: GridColDef[] = [
  { field: 'ID', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'ชื่อเต็ม',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => ` ${params.row.Name || ''} ${params.row.SureName || ''}`,
  },
  { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 150, sortable: false },
  { field: 'Prefix', headerName: 'คำนำหน้า', width: 110 },
  { field: 'Name', headerName: 'ชื่อ', width: 150 },
  { field: 'SureName', headerName: 'นามสกุล', width: 150 },
  { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 150 },
  { field: 'Status', headerName: 'สถานะ', width: 110 },
  { field: 'DeptID', headerName: 'แผนก', width: 90 },
];

export const DataGridDemo = () => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch('/api/employee');
        const data = await response.json();
        const employeesWithId = data.map((employee: Employee, index: number) => ({
          ...employee,
          id: index + 1,
        }));
        setEmployeeData(employeesWithId);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEmployeeData();
  }, []);



  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          csvOptions={{
            utf8WithBom: true
          }}
        />
      </GridToolbarContainer>
    );
  }



  return (
    <Box sx={{ height: 620, width: '100%' }}>
      <DataGrid
        rows={employeeData}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,

            },
          },
        }}
        pageSizeOptions={[10, 15, 25]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
