import {
  Button,
  Divider,
  Input,
  Modal,
  Text,
  Radio,
  Dropdown,
} from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { useState } from 'react';

export const AddUser = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [selected, setSelected] = React.useState(new Set(["คำนำหน้า"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastname] = useState("")
  const [enrollnum, setEnrollnum] = useState("")
  const [status, setStatus] = useState("")
  const [dept, setDept] = useState("")
  const [empcode, setEmpCode] = useState("3333")
  const [prefix, setPrefix] = useState("นาย")

  const formAddEmployee = {
    Prefix: prefix,
    EmployeeCode: empcode,
    Name: firstname,
    SureName: lastname,
    EnrollNumber: enrollnum,
    Status: status,
    DeptID: dept,
  }

  const handleSubmit = async (e: any) => {

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



  return (
    <div>
      <Button auto onClick={handler}>
        เพิ่มพนักงาน
      </Button>
      <Modal
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
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >

              <Dropdown>
                <Text>
                  คำนำหน้า
                  <Dropdown.Button flat color="default" css={{ tt: "capitalize" }}>
                    {selectedValue}
                  </Dropdown.Button>
                </Text>
                <Dropdown.Menu
                  variant="light"
                  aria-label="Single selection actions"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                //onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="นาย">นาย</Dropdown.Item>
                  <Dropdown.Item key="นาง">นาง</Dropdown.Item>
                  <Dropdown.Item key="นางสาว">นางสาว</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
              /> */}
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={handleSubmit}>
            เพิ่ม
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
