import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Padding } from "@mui/icons-material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Edit } from "@mui/icons-material";
interface Employee {
  ID: number;
  EnrollNumber: string;
  Prefix: string;
  Name: string;
  SureName: string;
  EmployeeCode: string;
  Status: string;
  DeptID: string;
}

const EmployeeDetails = () => {
  const router = useRouter();
  const { ID } = router.query;
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [editData, setEditData] = useState<Employee | (() => Employee)>(
    () => ({} as Employee)
  );
  const [filteredEmployeeData, setFilteredEmployeeData] = useState<Employee[]>(
    []
  );
  const [isEditing, setIsEditing] = useState(false);
  const handleEditIconClick = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch("/api/employee");
        const data = await response.json();
        const employeesWithId: Employee[] = data.map((employee: Employee) => ({
          ...employee,
          id: employee.ID,
        }));
        setEmployeeData(employeesWithId);

        // Filter employee data based on the desired employee ID
        const desiredEmployeeId = Number(ID);
        const filteredEmployee = employeesWithId.find(
          (employee) => employee.ID === desiredEmployeeId
        );
        if (filteredEmployee) {
          // Employee with the desired ID found
          setEmployeeData([filteredEmployee]);
          setEditData(filteredEmployee); // Initialize edit data with the fetched employee data
          setFilteredEmployeeData([filteredEmployee]); // Initialize filteredEmployeeData with the fetched employee data
        } else {
          // Employee with the desired ID not found
          console.error("Employee with ID", desiredEmployeeId, "not found");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (ID) {
      fetchEmployeeData();
    }
  }, [ID]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({
      ...(typeof prevData === "function" ? prevData() : prevData),
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch("/api/employee_update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });
      if (response.ok) {
        // Employee data updated successfully
        const updatedEmployee = { ...employeeData[0], ...editData }; // Merge the updated data with the existing employee data
        setEmployeeData([updatedEmployee]); // Update the employeeData state with the updated employee

        // Find the index of the updated employee in the filteredEmployeeData array
        const updatedIndex = filteredEmployeeData.findIndex(
          (employee) => employee.ID === updatedEmployee.ID
        );

        if (updatedIndex !== -1) {
          // If the updated employee is found in the filteredEmployeeData array
          const updatedFilteredEmployeeData = [...filteredEmployeeData];
          updatedFilteredEmployeeData[updatedIndex] = updatedEmployee; // Update the employee in the filteredEmployeeData array
          setFilteredEmployeeData(updatedFilteredEmployeeData); // Update the filteredEmployeeData state
        }
      }
    } catch (error) {
      console.error("Error updating employee data:", error);
      // Handle error case
    }
  };
  const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius,
  }));

  const MainContent = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#DCDCDC",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? "#27303b" : "#e0e0e0",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    },  
  }));

  const SideContent = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFFFFF",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    },
  }));
  
  if (employeeData.length === 0) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Box
      component="span"
      sx={{ width: "100%", height: "100%", margin: "10px",}}
    >
      <Grid container spacing={3} sx={{ height: "auto", width: "auto" }}>
        <Grid item xs={12} md={4}>
          <MainContent sx={{ margin: 3 }}>
            <Avatar
              alt="Profile Picture"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{
                width: 180,
                height: 185,
                margin: "auto",
                mb: 2,
                border: "2px solid ",
              }}
            />
          </MainContent>
        </Grid>
        <Grid item xs={12} md={7}>
          <SideContent sx={{ margin: 3 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                    ข้อมูลส่วนตัว
                  </Typography>
                  <IconButton
                    onClick={handleEditIconClick}
                    sx={{ color: "black" }}
                  >
                    <Edit />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prefix"
                  name="Prefix"
                  value={editData.Prefix}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="Name"
                  value={editData.Name}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
            </Grid>
          </SideContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ height: "auto", width: "auto" }}>
        <Grid item xs={12} md={11}>
          <SideContent sx={{ margin: 3, marginTop: 0 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                  ประวัติการศึกษา
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prefix"
                  name="Prefix"
                  value={editData.Prefix}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="Name"
                  value={editData.Name}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
            </Grid>
          </SideContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ height: "auto", width: "auto" }}>
        <Grid item xs={12} md={11}>
          <SideContent sx={{ margin: 3, marginTop: 0 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                  ผู้ติดต่อฉุกเฉิน
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prefix"
                  name="Prefix"
                  value={editData.Prefix}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="Name"
                  value={editData.Name}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
            </Grid>
          </SideContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ height: "auto", width: "auto" }}>
        <Grid item xs={12} md={11}>
          <SideContent sx={{ margin: 3, marginTop: 0 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                  ที่อยู่/ภูมิลำเนาเก่า
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Prefix"
                  name="Prefix"
                  value={editData.Prefix}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="Name"
                  value={editData.Name}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ mb: 2, width: "100%" }}
                  size="small"
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                />
              </Grid>
            </Grid>
          </SideContent>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ height: "auto", width: "auto" }}>
        <Grid item xs={12} md={11}>
          <SideContent sx={{ margin: 3, marginTop: 0 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" sx={{ mb: 2 }}>
                  Complain text
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextareaAutosize />;
              </Grid>
            </Grid>
          </SideContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeDetails;
