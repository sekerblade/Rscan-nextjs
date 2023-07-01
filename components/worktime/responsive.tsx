import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    TextField,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataGridSelection } from './dataGridSelection';
import { DataGridConfirm } from './dataGridConfirm';

export const Responsive = () => {
    const [dateStart, setDateStart] = useState<Date | null>(null); // Provide initial value of null
    const [dateEnd, setDateEnd] = useState<Date | null>(null); // Provide initial value of null
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<number[]>([]);
    const [employeeConfirm, setEmployeeConfirm] = useState<number[]>([]);


    useEffect(() => {
        // Filter out duplicate employee IDs
        const uniqueEmployeeIds = Array.from(
            new Set([...employeeConfirm, ...selectedEmployeeIds])
        );

        setEmployeeConfirm(uniqueEmployeeIds);
    }, [selectedEmployeeIds]);


    const handleSelectedEmployeeIdsChange = (selectedIds: number[]) => {
        setSelectedEmployeeIds(selectedIds);
    };

    function onChangeHandler(value: any) {
        setDateStart(value[0]);
        setDateEnd(value[1]);
    }

    if (selectedEmployeeIds.length === 0) {
        console.log('im fucked');
    } else {
        console.log('good job');
        console.log(employeeConfirm)
    }


    return (
        <>
            <Box sx={{
                width: '100%',
                height: 75,
                backgroundColor: 'white',
                border: '1px solid'
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',

                }}>
                    <Box
                        sx={{
                            marginLeft: 2,
                        }}
                    >
                        <p>เลือกวัน</p>
                        <DatePicker
                            id="dateStartEnd"
                            selectsRange={true}
                            startDate={dateStart}
                            endDate={dateEnd}
                            onChange={onChangeHandler}
                            dateFormat="dd/MM/yyyy"
                            className={'form-control form-control-sm'}
                            showDisabledMonthNavigation
                        />
                    </Box>

                </Box>
            </Box>
            <br />

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: 1,
                rowGap: 1,
                boxShadow: 3,
                height: '100%',
            }}>
                <Box // เลือกแผนก
                    sx={{
                        width: 225,
                        height: 650,
                        backgroundColor: 'white',
                        border: '1px dashed grey'
                    }}
                >
                    <Typography >ผังองค์กร</Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>สาขา 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>แผนก 1</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>แผนก 2</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>แผนก 3</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>

                </Box>
                <Box // เลือกคน 1
                    sx={{
                        width: 375,
                        height: 650,
                        backgroundColor: 'white',
                        border: '1px dashed grey'
                    }}
                >
                    <Typography>ตารางเลือกพนักงาน</Typography>

                    <DataGridSelection onSelectedEmployeeIdsChange={handleSelectedEmployeeIdsChange} />

                </Box>
                <Box
                    sx={{
                        width: 450,
                        height: 650,
                        backgroundColor: 'white',
                        border: '1px dashed grey',
                    }}
                >
                    <Typography>บุคคลกรที่เลือก = {employeeConfirm.length} คน</Typography>


                    {/* Pass the selectedEmployeeIds as a prop to DataGridComfrim */}
                    <DataGridConfirm selectedEmployeeIds={employeeConfirm}
                        dateStart={dateStart}
                        dateEnd={dateEnd} onSearch={function (): void {
                            throw new Error('Function not implemented.');
                        }} />
                </Box>
            </Box>
        </>
    )
}