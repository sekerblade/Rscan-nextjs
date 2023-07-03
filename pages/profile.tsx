import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';

const PersonalInfoPage = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Sebastian',
        lastName: 'Sai',
        citizenID: '1393459',
        telephoneNumber: '4444',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform logic to save updated user information
        console.log(userInfo);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Name"
                            value={userInfo.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="lastName"
                            label="Last Name"
                            value={userInfo.lastName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="citizenID"
                            label="Citizen ID"
                            value={userInfo.citizenID}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="telephoneNumber"
                            label="Telephone Number"
                            value={userInfo.telephoneNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PersonalInfoPage;
