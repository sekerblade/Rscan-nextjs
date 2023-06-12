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
          <Button auto onClick={closeHandler}>
            เพิ่มแผนก
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
