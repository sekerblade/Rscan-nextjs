import React from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteUser = () => {

  return (
    <>
      <Grid.Container
        css={{
          borderRadius: "14px",
          padding: "0.75rem",
          maxWidth: "330px",
        }}
      >
        <Row justify="center" align="center" >
          <Text b>ย้ายพนักงาน</Text>
        </Row>
        <Row>
          <Text>ต้องการจะย้ายพนักงานไปยัง <b>ลาออก</b> หรือไม่ ?</Text>
        </Row>
        <Grid.Container justify="space-between" alignContent="center">
          <Grid>
            <Button size="sm" shadow color="error">
              ย้ายพนักงาน
            </Button>
          </Grid>
          <Grid>
            <Button size="sm" light >
              ยกเลิก
            </Button>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </>
  );
};
