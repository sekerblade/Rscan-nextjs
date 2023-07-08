import React, { useState } from 'react'
import {
    TextField,
    Typography,
    Button,
    Tab,
    Tabs,
    Box,
} from '@mui/material';
import { TimeShift } from './timeShift';

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

const TabTime = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="ตั้งค่าตารางเวลา" {...a11yProps(0)} />
                        <Tab label="รายงานปกติ" {...a11yProps(1)} />
                        <Tab label="รายงาน I/O" {...a11yProps(2)} />
                        <Tab label="ตารางเวลา" {...a11yProps(3)} />
                        <Tab label="ตารางเวลา" {...a11yProps(4)} />
                        <Tab label="ตารางเวลา" {...a11yProps(5)} />
                        <Tab label="ตารางเวลา" {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <TimeShift />

                </TabPanel>
                <TabPanel value={value} index={1}>
                    ตารางวัน

                </TabPanel>
                <TabPanel value={value} index={2}>
                    รอบการทำงาน

                </TabPanel>
                <TabPanel value={value} index={3}>
                    ตารางทำงาน

                </TabPanel>
                <TabPanel value={value} index={4}>
                    วันหยุดประจำปี

                </TabPanel>
                <TabPanel value={value} index={5}>
                    การลางาน

                </TabPanel>
                <TabPanel value={value} index={6}>
                    เงื่อนไขพิเศษ

                </TabPanel>
            </Box>
        </>
    )
}
export default TabTime
