import React, { useEffect, useState } from "react";
import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarQuickFilter,
    GridColDef,
    GridRenderCellParams,
    GridRowModel,
    GridRowsProp,
} from "@mui/x-data-grid";
import { Box, Snackbar, Alert, Grid } from "@mui/material";
import { GridPagination } from '@mui/x-data-grid';
import { DataGrid } from "@mui/x-data-grid";
import { TimeTableData } from "../../types/timeTableDataType";

export const TimeShiftDataGrid = () => {

    const [TimeShiftData, setTimeShiftData] = useState<TimeTableData[]>([])

    const columns: GridColDef[] = [
        { field: 'code', headerName: 'code', width: 75 },
        { field: 'valueattendance', headerName: 'valueAttendance', width: 150 },
        { field: 'valueworkout', headerName: 'valueworkout', width: 150 },
    ];

    useEffect(() => {
        const fetchTimeShiftData = async () => {
            try {
                const respone = await fetch("/api/timeShift/timeShift")
                const data = await respone.json()
                const timeShiftAllData = data.map(
                    (timeShift: TimeTableData, index: number) => ({
                        ...timeShift,
                        id: index + 0,
                    })
                )
                console.log(timeShiftAllData)
                setTimeShiftData(timeShiftAllData)
            } catch (error) {
                console.error('Failed to fetch Data', error)
            }
        }
        fetchTimeShiftData();
    }, []);
    return (
        <>
            <Box sx={{
                border: '1px solid'
            }}>
                <DataGrid
                    rows={TimeShiftData}
                    columns={columns}
                />
            </Box>

        </>
    )
}
