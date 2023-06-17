import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams, GridToolbarContainer, GridToolbarExport, GridToolbar, GridToolbarColumnsButton, GridToolbarQuickFilter, GridToolbarDensitySelector } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import { RoomsActions } from './RoomsActions';


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

  { field: 'ID', headerName: 'ID', width: 50 },

  // {
  //   field: 'fullName',
  //   headerName: 'ชื่อเต็ม',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: true,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     ` ${params.row.Name || ''} ${params.row.SureName || ''}`,
  // },

  { field: 'Prefix', headerName: 'คำนำหน้า', width: 60 },
  { field: 'Name', headerName: 'ชื่อ', width: 100 },
  { field: 'SureName', headerName: 'นามสกุล', width: 100 },
  { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 110, sortable: false, },
  { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 100 },
  { field: 'Status', headerName: 'สถานะ', width: 70 },
  { field: 'DeptID', headerName: 'แผนก', width: 50 },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <RoomsActions params={{ ...params.row }} />
    ),
  },
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
        <GridToolbarQuickFilter />
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport
          csvOptions={{
            utf8WithBom: true
          }}
        />
      </GridToolbarContainer>
    );
  }


  const csvOptions = {
    utf8WithBom: true,
  };
  return (
    <Box sx={{ height: 667, width: '100%' }}>
      <DataGrid
        rows={employeeData}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
        slotProps={{
          columnsPanel: {
            disableHideAllButton: true,
            disableShowAllButton: true,
          },
          //printOptions: { disableToolbarButton: true }
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          columns: {
            columnVisibilityModel: {
              // Hide columns 'Prefix' and 'EmployeeCode', the other columns will remain visible
              Prefix: false,
              EmployeeCode: false,
            },
          },
        }}
        pageSizeOptions={[10, 15, 25]}
        //checkboxSelection
        disableRowSelectionOnClick
      //exportOptions= {csvOptions}
      />
    </Box>
  );
}