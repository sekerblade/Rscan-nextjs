import React from 'react'
import { SearchOptions } from './search'
import { Flex } from '../styles/flex';
import {
    TextField,
    Typography,
    Button,
    Tab,
    Tabs,
    Box,
} from '@mui/material';
import { Responsive } from './responsive';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const TabOptions = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="เลือกการค้นหา" {...a11yProps(0)} />
                        <Tab label="รายงานปกติ" {...a11yProps(1)} />
                        <Tab label="รายงาน I/O" {...a11yProps(2)} />
                        <Tab label="ตารางเวลา" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Responsive />


                </TabPanel>
                <TabPanel value={value} index={1}>
                    รายงานผลรวม

                </TabPanel>
                <TabPanel value={value} index={2}>
                    รายงาน I/O

                </TabPanel>
                <TabPanel value={value} index={3}>
                    ตารางเวลา

                </TabPanel>
            </Box>
        </>
    )
}
