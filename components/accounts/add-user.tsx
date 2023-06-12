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

export const AddUser = () => {
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
           
                <Dropdown.Button
                  flat
                  color="default"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="default"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="นาย">นาย</Dropdown.Item>
                  <Dropdown.Item key="นาง">นาง</Dropdown.Item>
                  <Dropdown.Item key="นางสาว">นางสาว</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Input
                label="ชื่อ"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อ"
              />
              <Input
                label="นามสกุล"
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
                label="Email"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรุณาEmail"
              />
              <Input
                label="เบอร์มือถือ"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Phone Number"
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
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="กรุณากรอกแผนก"
              />
              <Input
                label="Company"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Company"
              />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            เพิ่ม
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
