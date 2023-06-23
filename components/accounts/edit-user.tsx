import React from 'react'
import {
    Button,
    Modal,
    Text,
    Tooltip,
} from "@nextui-org/react";
import { IconButton } from './table.styled';
import { EditIcon } from '../icons/table/edit-icon';

export const Edit = () => {
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

    return (
        <>
            <Tooltip content="Edit user" css={undefined} color={undefined} contentColor={undefined}>
                <IconButton
                    onClick={handler}
                >
                    <EditIcon size={20} fill="#979797" />
                </IconButton>
                <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            แก้ไขข้อมูลพนักงาน
                        </Text>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={closeHandler}>
                            ลาออก
                        </Button>
                        <Button auto onPress={closeHandler}>
                            Sign in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Tooltip>
        </>
    );
};