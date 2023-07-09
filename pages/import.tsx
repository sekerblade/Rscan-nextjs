import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { read, utils, WorkSheet, writeFile } from "xlsx";
import { Employee } from '../types/employee'; // Import the Employee type from the specified location

type DataSet = { [index: string]: WorkSheet; };
type Row = any[];
type RowCol = { rows: Row[]; columns: GridColDef[]; };

function arrayify(rows: any[]): Row[] {
    return rows.map(row => {
        if (Array.isArray(row)) return row;
        var length = Object.keys(row).length;
        for (; length > 0; --length) if (row[length - 1] != null) break;
        return Array.from({ length, ...row });
    });
}

/* this method returns `rows` and `columns` data for sheet change */
const getRowsCols = (data: DataSet, sheetName: string): RowCol => ({
    rows: utils.sheet_to_json<Row>(data[sheetName], { header: 1 }).map((r, id) => ({ ...r, id })),
    columns: Array.from({
        length: utils.decode_range(data[sheetName]["!ref"] || "A1").e.c + 1
    }, (_, i) => ({ field: String(i), headerName: utils.encode_col(i), editable: true }))
});

export default function App() {
    const [rows, setRows] = useState<Row[]>([]); // data rows
    const [columns, setColumns] = useState<GridColDef[]>([]); // columns
    const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
    const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
    const [current, setCurrent] = useState<string>(""); // selected sheet
    const [file, setFile] = useState<File | null>(null);
    const [exportFormat, setExportFormat] = useState(""); // selected export format
    /* called when sheet dropdown is changed */
    function selectSheet(name: string) {
        /* update workbook cache in case the current worksheet was changed */
        workBook[current] = utils.aoa_to_sheet(arrayify(rows));

        /* get data for desired sheet and update state */
        const { rows: new_rows, columns: new_columns } = getRowsCols(workBook, name);
        setRows(new_rows);
        setColumns(new_columns);
        setCurrent(name);
    }

    /* this method handles refreshing the state with new workbook data */
    async function handleAB(fileData: ArrayBuffer): Promise<void> {
        /* read file data */
        const data = read(fileData);

        /* update workbook state */
        setWorkBook(data.Sheets);
        setSheets(data.SheetNames);

        /* select the first worksheet */
        const name = data.SheetNames[0];
        const { rows: new_rows, columns: new_columns } = getRowsCols(data.Sheets, name);
        setRows(new_rows);
        setColumns(new_columns);
        setCurrent(name);
    }

    /* called when file input element is used to select a new file */
    async function handleFile(ev: ChangeEvent<HTMLInputElement>): Promise<void> {
        const selectedFile = ev.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const fileData = await selectedFile.arrayBuffer();
            await handleAB(fileData);
        }
    }

    /* method is called when one of the save buttons is clicked */
    async function saveFile(ext: string): Promise<void> {
        console.log(rows);
        /* update current worksheet in case changes were made */
        workBook[current] = utils.aoa_to_sheet(arrayify(rows));

        /* construct workbook and loop through worksheets */
        const wb = utils.book_new();
        sheets.forEach((n) => { utils.book_append_sheet(wb, workBook[n], n); });

        /* generate a file and download it */
        writeFile(wb, "SheetJSMUIDG." + ext);
    }

    const processRowUpdate = useCallback((rowNew: GridRowModel, rowOld: GridRowModel) => {
        for (var j = 0; j < columns.length; ++j) if (rowNew[j] != null) rows[rowNew.id][j] = isNaN(+rowNew[j]) ? rowNew[j] : +rowNew[j];
        setRows([...rows]);
        return rowNew;
    }, [columns, rows, sheets, workBook]);


    /* method is called when the export format is changed */
    const handleExportFormatChange = (event: ChangeEvent<{ value: unknown }>) => {
        const format = event.target.value as string;
        if (format) {
            saveFile(format);
        }
        setExportFormat(format);
    };

    const handleImport = useCallback(async () => {
        if (file) {
            const fileData = await file.arrayBuffer();
            await handleAB(fileData);

            const selectedSheetName = sheets[0];
            const selectedSheetData = workBook[selectedSheetName];
            const jsonData = utils.sheet_to_json(selectedSheetData, { header: 1 });

            const [, ...dataRows] = jsonData;

            const employeeData: Employee[] = (dataRows as (string | number)[][]).map(
                (row: (string | number)[]) => ({
                    ID: Number(row[0]),
                    Prefix: String(row[1]),
                    Name: String(row[2]),
                    SureName: String(row[3]),
                    EnrollNumber: Number(row[4]),
                    EmployeeCode: String(row[5]),
                    Status: Number(row[6]),
                    DeptID: Number(row[7]),
                })
            );

            const saveDataResponse = await fetch('/api/account/save-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employeeData),
            });

            if (saveDataResponse.ok) {
                console.log('Data imported successfully');
            } else {
                console.error('Error while saving data to the database');
            }
        }
    }, [file]);

    useEffect(() => {
        handleImport();
    }, [handleImport]); // Include 'handleImport' in the dependency array

    return (
        <>
            <h3>Import Employees Info</h3>
            <input type="file" onChange={handleFile} />
            {sheets.length > 0 && (<>
                <p>Use the dropdown to switch to a worksheet:&nbsp;
                    <select onChange={async (e) => selectSheet(sheets[+(e.target.value)])}>
                        {sheets.map((sheet, idx) => (<option key={sheet} value={idx}>{sheet}</option>))}
                    </select>
                </p>
                <div className="flex-cont"><b>Current Sheet: {current}</b></div>
                <div style={{ width: "100%", height: 400 }}>
                    <DataGrid columns={columns} rows={rows} processRowUpdate={processRowUpdate} />
                </div>
                <p>Click one of the buttons to create a new file with the modified data</p>
                <p>Select export format:</p>
                <select value={exportFormat} onChange={handleExportFormatChange}>
                    <option value="">-- Select format --</option>
                    <option value="xlsx">Excel (xlsx)</option>
                    <option value="xlsb">Excel (xlsb)</option>
                    <option value="xls">Excel (xls)</option>
                    <option value="csv">CSV</option>
                </select>
                <button onClick={handleImport}>Import Data</button> {/* Import button added */}
            </>)}
        </>
    );
}



