import { Collapse, Text, Grid } from "@nextui-org/react";
import React from "react";

export const Adion = () => {

    return (
        <>
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse.Group splitted>
                        <Collapse title="สาขาไมด้า แอร์พอร์ต">
                            <Collapse title="ฝ่ายขาย">

                            </Collapse>
                            <Collapse title="ทรัพยากรบุคคล">

                            </Collapse>
                        </Collapse>
                        <Collapse title="สาขาหลัก">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Collapse>
                    </Collapse.Group>
                </Grid>
            </Grid.Container>
        </>
    );
}