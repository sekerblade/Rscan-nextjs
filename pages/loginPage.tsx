import React, { useState } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

enum UserType {
    Regular = "regular",
    Admin = "admin",
}

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState(UserType.Regular);

    const handleLogin = () => {
        // Add your login logic here
        if (email === "user@example.com" && password === "password") {
            if (userType === UserType.Admin) {
                // Redirect to the admin page
                router.push("/admin");
            } else {
                // Redirect to the regular user page
                router.push("/user");
            }
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Login Page
                    </Typography>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type="password"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        style={{ marginTop: 16 }}
                    >
                        Login
                    </Button>
                    <Typography variant="body2" style={{ marginTop: 16 }}>
                        User type:
                        <label style={{ marginLeft: 8 }}>
                            <input
                                type="radio"
                                value={UserType.Regular}
                                checked={userType === UserType.Regular}
                                onChange={() => setUserType(UserType.Regular)}
                            />
                            Regular User
                        </label>
                        <label style={{ marginLeft: 8 }}>
                            <input
                                type="radio"
                                value={UserType.Admin}
                                checked={userType === UserType.Admin}
                                onChange={() => setUserType(UserType.Admin)}
                            />
                            Admin
                        </label>
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default LoginPage;
