import React, { useState } from "react";
import { Flex } from "../styles/flex";
import {
  Button,
  Select,
  SelectChangeEvent,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  Modal,
  Box,
  Typography,
  TextField
} from "@mui/material";
import style from "styled-jsx/style";

export const AddUser = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeHandler = () => {
    setOpen(false);
    console.log("closed");
  };

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [enrollnum, setEnrollnum] = useState("")
  const [status, setStatus] = useState("")
  const [dept, setDept] = useState("")
  const [empcode, setEmpCode] = useState("3333")
  const [prefix, setPrefix] = useState(age)

  const formAddEmployee = {
    Prefix: prefix,
    EmployeeCode: empcode,
    Name: firstname,
    SureName: lastname,
    EnrollNumber: enrollnum,
    Status: status,
    DeptID: dept,
  }

  const handleSubmit = async () => {

    try {
      const response = await fetch('/api/account/POST_account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formAddEmployee),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Reset form data
        setFirstName("");
        setLastname("");
        setEnrollnum("");
        setStatus("");
        setDept("");
        setEmpCode("");
        setPrefix("");
        window.location.reload();
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    closeHandler();
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} >เพิ่มพนักงาน</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={({ target }) => setPrefix(target?.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <em>คำนำหน้า</em>
                <MenuItem value={"นาย"}>นาย</MenuItem>
                <MenuItem value={"นาง"}>นาง</MenuItem>
                <MenuItem value={"นางสาว"}>นางสาว</MenuItem>
              </Select>
              <FormHelperText>คำนำหน้า</FormHelperText>
            </FormControl>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="ชื่อจริง"
                variant="outlined"
                value={firstname}
                onChange={({ target }) => setFirstName(target?.value)} />
              <TextField
                id="outlined-basic"
                label="นามสกุล"
                variant="outlined"
                value={lastname}
                onChange={({ target }) => setLastname(target?.value)} />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >

              <TextField
                id="outlined-basic"
                label="Enrollnumber"
                variant="outlined"
                value={enrollnum}
                onChange={({ target }) => setEnrollnum(target?.value)} />
              <TextField
                id="outlined-basic"
                label="สถานะ"
                variant="outlined"
                value={status}
                onChange={({ target }) => setStatus(target?.value)} />

            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="แผนก"
                variant="outlined"
                value={dept}
                onChange={({ target }) => setDept(target?.value)} />
            </Flex >
            <Button variant="contained" onClick={handleSubmit}>Sumit</Button>
          </Flex >
        </Box>
      </Modal>

    </>
  );
};
/* <Modal
        closeButton
        aria-labelledby="modal-title"
        width="800px"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h4>
            เพิ่ม พนักงานใหม่
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Without label</FormHelperText>
            </FormControl>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >


              <Input
                label="ชื่อจริง"
                value={firstname}
                onChange={({ target }) => setFirstName(target?.value)}
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อ"
              />
              <Input
                label="นามสกุล"
                value={lastname}
                onChange={({ target }) => setLastname(target?.value)}
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรอกนามสกุล"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Enrollnumber"
                value={enrollnum}
                onChange={({ target }) => setEnrollnum(target?.value)}
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรอกEnrollnumber"
              />
              <Input
                label="สถานะ"
                value={status}
                onChange={({ target }) => setStatus(target?.value)}
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรอกสถานะ"
              />
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="แผนก"
                value={dept}
                onChange={({ target }) => setDept(target?.value)}
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรุณากรอกแผนก"
              />
              {/* <Input
                label="Company"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Company"
              /> }
            </Flex >
          </Flex >
        </Modal.Body >
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button variant="contained" onClick={handleSubmit}>Sumit</Button>
        </Modal.Footer>
      </Modal >
*/