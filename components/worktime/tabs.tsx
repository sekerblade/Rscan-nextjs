import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SearchOptions } from './search'
import Button from '@mui/material/Button';
import { Flex } from '../styles/flex';

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
                        <Tab label="รายงานปกติ" {...a11yProps(0)} />
                        <Tab label="รายงานผลรวม" {...a11yProps(1)} />
                        <Tab label="รายงาน I/O" {...a11yProps(2)} />
                        <Tab label="ตารางเวลา" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    รายงานปกติ
                    <SearchOptions />
                    <br />
                    <Flex
                        css={{
                            'gap': '$6',
                            'flexWrap': 'wrap',
                            '@sm': { flexWrap: 'nowrap' },
                        }}
                        align={'center'}
                    >
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                    </Flex>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    รายงานผลรวม
                    <SearchOptions />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    รายงาน I/O
                    <SearchOptions />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    ตารางเวลา
                    <SearchOptions />
                </TabPanel>
            </Box>
        </>
    )
}
