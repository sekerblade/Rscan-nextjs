import React from 'react'
import { Flex } from '../styles/flex';
import { TabOptions } from './tabs';
import { Box } from '@mui/material';


export const Worktime = () => {

    return (
        <>
            <Flex
                css={{
                    'mt': '$5',
                    'px': '$6',
                    '@sm': {
                        mt: '$10',
                        px: '$16',
                    },
                }}
                justify={'center'}
                direction={'column'}
            >
                <TabOptions />

            </Flex>
        </>
    )
}


