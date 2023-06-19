import { GridColDef, GridRenderCellParams, GridEditCellProps } from '@mui/x-data-grid';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { RoomsActions } from './RoomsActions';
import { Employee } from '../../types/employee';
import { Panorama } from '@mui/icons-material';


const columns: GridColDef[] = [
  { field: 'ID', headerName: 'ID', width: 50 },
  { field: 'Prefix', headerName: 'คำนำหน้า', width: 60, editable: true },
  { field: 'Name', headerName: 'ชื่อ', width: 100, editable: true },
  { field: 'SureName', headerName: 'นามสกุล', width: 100, editable: true },
  { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 110, sortable: false },
  { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 100, editable: true },
  { field: 'Status', headerName: 'สถานะ', width: 70, editable: true },
  { field: 'DeptID', headerName: 'แผนก', width: 50, editable: true },
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

// export const DataGridDemo = ({ employeeData,
//   onEmployeeDelete,
// }: {
//   employeeData: Employee[];
//   onEmployeeDelete: (employeeId: number) => void;
// }) => {


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
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          columns: {
            columnVisibilityModel: {
              Prefix: false,
              EmployeeCode: false,
            },
          },
        }}
        pageSizeOptions={[10, 15, 25]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
