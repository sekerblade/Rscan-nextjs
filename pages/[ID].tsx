import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const SideContent = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
      sx={{ width: "100%", height: "100%" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <MainContent>
            <Avatar
              alt="Profile Picture"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{
                width: 155,
                height: 155,
                margin: "auto",
                mb: 2,
                border: "2px solid ",
              }}
            />
            <Typography variant="h5" align="center" mt={2}>
              {employeeData[0].Name}
            </Typography>
            <Typography variant="subtitle1" align="center" mt={1}>
              {employeeData[0].SureName}
            </Typography>
          </MainContent>
        </Grid>
        <Grid item xs={12} md={8}>
          <SideContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left">
                  ข้อมูลส่วนตัว
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-end">
                <Grid container alignItems="center" justifyContent="flex-end">
                  <Grid item>
                    <IconButton onClick={handleEdit} disabled={isEditing}>
                      <EditIcon style={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Prefix"
                  name="Prefix"
                  value={editData.Prefix}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                  size="small"
                  disabled={!isEditing}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Name"
                  name="Name"
                  value={editData.Name}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                  disabled={!isEditing}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                  disabled={!isEditing}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="SureName"
                  name="SureName"
                  value={editData.SureName}
                  onChange={handleInputChange}
                  sx={{ ml: 3 }}
                  disabled={!isEditing}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </SideContent>
          <Grid container spacing={2} sx={{ mt: 3, ml: 0 }}>
            <SideContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left">
                  ข้อมูลส่วนตัว
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-end">
                <Grid container alignItems="center" justifyContent="flex-end">
                  <Grid item>
                    <IconButton onClick={handleEdit} disabled={isEditing}>
                      <EditIcon style={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ระดับปริญญา"
                    name="DegreeLevel"
                    value={editData.DegreeLevel}
                    onChange={handleInputChange}
                    sx={{ mt: 3 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ชื่อสถาบัน"
                    name="InstitutionName"
                    value={editData.InstitutionName}
                    onChange={handleInputChange}
                    sx={{ mt: 3 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ปีที่เริ่ม"
                    name="StartYear"
                    value={editData.StartYear}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ปีที่จบ"
                    name="EndYear"
                    value={editData.EndYear}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ระยะเวลา"
                    name="Duration"
                    value={editData.Duration}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="สาขาวิชา"
                    name="Major"
                    value={editData.Major}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="วุฒิที่ได้รับ"
                    name="DegreeReceived"
                    value={editData.DegreeReceived}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="เกรดที่ได้"
                    name="Grade"
                    value={editData.Grade}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="หมายเหตุ"
                    name="Remarks"
                    value={editData.Remarks}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </SideContent>
            <Grid container spacing={2} sx={{ mt: 3, ml: 0 }}>
              <SideContent>
              <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left">
                  ข้อมูลส่วนตัว
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-end">
                <Grid container alignItems="center" justifyContent="flex-end">
                  <Grid item>
                    <IconButton onClick={handleEdit} disabled={isEditing}>
                      <EditIcon style={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Enroll Number"
                      name="EnrollNumber"
                      value={editData.EnrollNumber}
                      onChange={handleInputChange}
                      sx={{ mb: 3, mt: 3, mr: 3 }} // กำหนดระยะห่างด้านล่างเป็น 3
                    />
                    <TextField
                      label="Prefix"
                      name="Prefix"
                      value={editData.Prefix}
                      onChange={handleInputChange}
                      sx={{ mb: 3, mt: 3, mr: 3 }} // กำหนดระยะห่างด้านล่างเป็น 3
                    />
                    <TextField
                      label="Employee Code"
                      name="EmployeeCode"
                      value={editData.EmployeeCode}
                      onChange={handleInputChange}
                      sx={{ mb: 3, mt: 3, mr: 3 }} // กำหนดระยะห่างด้านล่างเป็น 3
                    />
                    <TextField
                      label="Status"
                      name="Status"
                      value={editData.Status}
                      onChange={handleInputChange}
                      mb={2}
                      sx={{ mb: 3, mt: 3, mr: 3 }} // กำหนดระยะห่างด้านล่างเป็น 3
                    />
                    <TextField
                      label="Department ID"
                      name="DeptID"
                      value={editData.DeptID}
                      onChange={handleInputChange}
                      sx={{ mb: 3, mt: 3, mr: 3 }} // กำหนดระยะห่างด้านล่างเป็น 3
                    />
                  </Grid>
                </Grid>
              </SideContent>
              <Grid container spacing={2} sx={{ mt: 3, ml: 0 }}>
                <SideContent>
                <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left">
                  ข้อมูลส่วนตัว
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-end">
                <Grid container alignItems="center" justifyContent="flex-end">
                  <Grid item>
                    <IconButton onClick={handleEdit} disabled={isEditing}>
                      <EditIcon style={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
                </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="ระดับปริญญา"
                        name="DegreeLevel"
                        value={editData.DegreeLevel}
                        onChange={handleInputChange}
                        sx={{ mt: 3 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="ชื่อสถาบัน"
                        name="InstitutionName"
                        value={editData.InstitutionName}
                        onChange={handleInputChange}
                        sx={{ mt: 3 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="ปีที่เริ่ม"
                        name="StartYear"
                        value={editData.StartYear}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="ปีที่จบ"
                        name="EndYear"
                        value={editData.EndYear}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="ระยะเวลา"
                        name="Duration"
                        value={editData.Duration}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="สาขาวิชา"
                        name="Major"
                        value={editData.Major}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="วุฒิที่ได้รับ"
                        name="DegreeReceived"
                        value={editData.DegreeReceived}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="เกรดที่ได้"
                        name="Grade"
                        value={editData.Grade}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="หมายเหตุ"
                        name="Remarks"
                        value={editData.Remarks}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                </SideContent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeDetails;
