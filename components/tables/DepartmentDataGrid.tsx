import { useEffect, useState } from 'react';
import { GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { RoomsActions } from './RoomsActions';
interface Department {
    ID: number;
    DeptName: string;
    DeptParent: number;
    DeptLevel: number;
    emp_id: number;
  }

  const columns: GridColDef[] = [
    {field: 'ID',headerName: 'ID', width:60},
    {field: 'DeptName',headerName: 'DeptName', width:60},
    {field: 'DeptParent',headerName: 'DeptParent', width:60},
    {field: 'DeptLevel',headerName: 'DeptLevel', width:60},
    {field: 'emp_id',headerName: 'emp_id', width:60},

  ]
  
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
        <Box sx={{ height: 667, width: '100%' }}>
        <DataGrid
          rows={departments}
          columns={columns}
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

export default DepartmentPages;