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
import { useEffect, useState } from 'react'

export const AddBranch = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [selected, setSelected] = React.useState(
    new Set(["คำนำหน้า"])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [name, setName] = useState("")
  const [parent, setParent] = useState("")
  const [level, setLevel] = useState("")
  const [empId, setEmpId] = useState("")

  const formData = {
    DeptName: name,
    DeptParent: parent,
    DeptLevel: level,
    emp_id: empId,
  }

  const handleSubmit = async (e: any) => {

    try {
      const response = await fetch('/api/department/POST_department', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Reset form data
        formData.DeptName = ''
        formData.DeptParent = ''
        formData.DeptLevel = ''
        formData.emp_id = ''
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
    <>
      <Button auto onClick={handler}>
        เพิ่มสาขา
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
            เพิ่มสาขาใหม่
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

              <Input
                label="ชื่อสาขา"
                value={name}
                onChange={({ target }) => setName(target?.value)}
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อสาขา"
              />
              <Input
                label="Parent"
                value={parent}
                onChange={({ target }) => setParent(target?.value)}
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อสาขา"
              />
              <Input
                label="level"
                value={level}
                onChange={({ target }) => setLevel(target?.value)}
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อสาขา"
              />
              <Input
                label="empId"
                value={empId}
                onChange={({ target }) => setEmpId(target?.value)}
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อสาขา"
              />


            </Flex>

          </Flex>

        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={handleSubmit}>
            เพิ่มสาขา
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};