import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
  GridColDef,
  GridRenderCellParams,
  GridRowModel,
} from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  Fab,
  Snackbar,
  Alert,
  AlertProps,
  Modal,
  Typography,
} from "@mui/material";
import { RoomsActions } from "./RoomsActions";
import { Employee } from "../../types/employee";
import { BasicSelect } from "../filterBar/filterSelect";
import { AddUser } from "../accounts/add-user";
import { Grid } from "@mui/material";

export const DataGridDemo = () => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState<Employee[]>(
    []
  );
  const [deptFilter, setDeptFilter] = useState<string[]>([]);

  const handleFilterPrefix = (prefixes: string[]) => {
    if (prefixes.length === 0) {
      setFilteredEmployeeData(employeeData); // แสดงรายการพนักงานทั้งหมดเมื่อไม่มีการเลือกคำนำหน้า
    } else {
      const filteredData = employeeData.filter((employee) =>
        prefixes.includes(employee.Prefix)
      );
      setFilteredEmployeeData(filteredData);
    }
  };
  const handleFilterDept = (depts: string[]) => {
    if (depts.length === 0) {
      setFilteredEmployeeData(employeeData);
    } else {
      const filteredData = employeeData.filter((employee) =>
        depts.includes(employee.DeptID)
      );
      setFilteredEmployeeData(filteredData);
    }
  };

  const generateDeptDataForDropdown = () => {
    return [...new Set(employeeData.map((employee) => employee.DeptID))];
  };

  const generatePrefixDataForDropdown = () => {
    return [...new Set(employeeData.map((employee) => employee.Prefix))];
  };

  const useFakeMutation = () => {
    return React.useCallback(
      (employee: Partial<Employee>) =>
        new Promise<Partial<Employee>>((resolve, reject) => {
          setTimeout(() => {
            if (employee.Name?.trim() === "") {
              reject(
                new Error("Error while saving user: name can't be empty.")
              );
            } else {
              resolve({ ...employee, Name: employee.Name });
            }
          }, 200);
        }),
      []
    );
  };

  const mutateRow = useFakeMutation();

  const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const confirmEditable = () => {
    return <></>;
  };

  const processRowUpdate = React.useCallback(
    async (newRow: GridRowModel) => {
      // This is Function to Confrim Editable
      confirmEditable();
      // Make the HTTP request to save in the backend
      const res = await mutateRow(newRow);
      setSnackbar({
        children: "Editing successfully saved",
        severity: "success",
      });
      const response = await fetch("/api/account/PUT_account", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });

      return res;
    },
    [mutateRow]
  );

  const columns: GridColDef[] = [
    { field: "ID", headerName: "ID", width: 50 },

    // {
    //   field: 'fullName',
    //   headerName: 'ชื่อเต็ม',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: true,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     ` ${params.row.Name || ''} ${params.row.SureName || ''}`,
    // },

    { field: "Prefix", headerName: "คำนำหน้า", width: 100, editable: true },
    { field: "Name", headerName: "ชื่อ", width: 100, editable: true },
    { field: "SureName", headerName: "นามสกุล", width: 100, editable: true },
    {
      field: "EnrollNumber",
      headerName: "EnrollNumber",
      width: 110,
      sortable: false,
      editable: true,
    },
    {
      field: "EmployeeCode",
      headerName: "EmployeeCode",
      width: 100,
      editable: true,
    },
    { field: "Status", headerName: "สถานะ", width: 100, editable: true },
    { field: "DeptID", headerName: "แผนก", width: 100, editable: true },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <RoomsActions params={{ ...params.row }} />
      ),
    },
  ];

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("/api/employee");
        const data = await response.json();
        const employeesWithId = data.map(
          (employee: Employee, index: number) => ({
            ...employee,
            id: index + 1,
          })
        );
        setEmployeeData(employeesWithId);
        setFilteredEmployeeData(employeesWithId);
      } catch (error) {
        console.error("Error:", error);
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
            utf8WithBom: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  const csvOptions = {
    utf8WithBom: true,
  };
  return (
    <Box sx={{ mt: 1, height: 667, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BasicSelect
            anyPrefix={generatePrefixDataForDropdown()}
            onPrefixFilters={handleFilterPrefix}
            anyDept={generateDeptDataForDropdown()}
            onDeptFilters={handleFilterDept}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "flex-end", margin: 0}}
        >
          <AddUser />
        </Grid>
      </Grid>
      <Box sx={{ mt: 1 }}>
        <DataGrid
          editMode="row"
          rows={filteredEmployeeData}
          columns={columns}
          processRowUpdate={processRowUpdate}
          pageSizeOptions={[10, 15, 25]}
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

          // //checkboxSelection
          // disableRowSelectionOnClick
          // //exportOptions= {csvOptions}
        />
        {!!snackbar && (
          <Snackbar
            open
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleCloseSnackbar}
            autoHideDuration={6000}
          >
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
          </Snackbar>
        )}
      </Box>
    </Box>
  );
};
