import { useState } from 'react';
import { read, utils, WorkBook, WorkSheet } from 'xlsx';
import type { Employee } from '../types/employee'; // Import the Employee type from the specified location

export default function ImportPage() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleImport = async () => {
        if (file) {
            const fileReader = new FileReader();

            fileReader.onload = async (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook: WorkBook = read(data, { type: 'array' });

                // Assuming the first sheet is the one you want to import
                const sheetName = workbook.SheetNames[0];
                const worksheet: WorkSheet = workbook.Sheets[sheetName];

                // Convert the worksheet to JSON object
                const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

                // Remove the first row (column names)
                const [, ...dataRows] = jsonData;

                // Map the data rows to the Employee type

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



                // Save the employeeData to the database using your API endpoint
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
            };

            fileReader.readAsArrayBuffer(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".xls, .xlsx, .csv" />
            <button onClick={handleImport}>Import</button>
        </div>
    );
}