import React from 'react';
import { Button } from '@mui/material';
import csv from 'csv-parser';
import fs from 'fs';
import axios from 'axios';

type CSVImportButtonProps = {
    onImport: () => void;
};

const CSVImportButton: React.FC<CSVImportButtonProps> = ({ onImport }) => {
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const contents = e.target?.result as string;

                // Use csv-parser to parse the CSV file
                const jsonData: any[] = [];
                fs.createReadStream(contents)
                    .pipe(csv())
                    .on('data', (data) => {
                        jsonData.push(data);
                    })
                    .on('end', async () => {
                        try {
                            // Make a POST request to your backend API endpoint
                            await axios.post('/api/save-data', jsonData);

                            // Call the onImport callback to notify the parent component
                            onImport();
                        } catch (error) {
                            console.log('Error saving data:', error);
                        }
                    });
            };
            reader.readAsText(file);
        }
    };

    return (
        <Button variant="contained" component="label">
            Import CSV
            <input type="file" accept=".csv" hidden onChange={handleFileChange} />
        </Button>
    );
};

export default CSVImportButton;
