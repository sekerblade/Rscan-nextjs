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

export const AddDepartment = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const [selected, setSelected] = React.useState(
    new Set(["สาขา / หน่วยงาน"])
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
    <>
      <Button auto onClick={handler}>
        เพิ่มแผนก
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
            เพิ่มแผนกใหม่
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
                //onSelectionChange={setSelected}
                //label="ชื่อ"
                >
                  <Dropdown.Item key="สาขาไมด้า แอร์พอร์ต">สาขาไมด้า แอร์พอร์ต</Dropdown.Item>
                  <Dropdown.Item key="สาขาหลัก">สาขาหลัก</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              <Input
                label="ชื่อแผนก"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="กรอกชื่อแผนก"
              />

            </Flex>

          </Flex>

        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            เพิ่มแผนก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
