import React from 'react'
import { Tooltip, Button, Grid, } from "@nextui-org/react";
import { DeleteUser } from './DeleteUser';
import { IconButton } from './table.styled';
import { DeleteIcon } from '../icons/table/delete-icon';


export const Delete = () => {
    return (
        <>
            <Grid.Container gap={2} alignItems="center">
                <Grid>
                    <Tooltip trigger="click" content={<DeleteUser />} visible={false} css={undefined} color={undefined} contentColor={undefined}>
                        <IconButton>
                            <DeleteIcon size={20} fill="#FF0080" />
                        </IconButton>

                    </Tooltip>
                </Grid>

            </Grid.Container>
        </>
    )
}
