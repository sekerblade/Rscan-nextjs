import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const demoItems = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
];

export const SearchOptions = () => {
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={demoItems}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Search" />}
            />

        </>
    )
}