import React, { useState } from 'react'
import {
    Box,
    Grid,
    Paper,
    Button,
    Stack,
    TextField,
    Typography,
    Checkbox,

} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeField } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const TimeShiftBottom = () => {

    const [textOne, setTextOne] = useState("เวลาทำงาน")
    const [textTwo, setTextTwo] = useState("โอที 1.5")
    const [textThree, setTextThree] = useState("โอที 1.5")

    const handleChangeOne = (event: SelectChangeEvent) => {
        setTextOne(event.target.value as string)
    }

    const handleChangeTwo = (event: SelectChangeEvent) => {
        setTextTwo(event.target.value as string)
    }

    const handleChangeThree = (event: SelectChangeEvent) => {
        setTextThree(event.target.value as string)
    }


    return (
        <>
            <Box sx={{
                width: '100%',

            }}>
                <Typography variant='h6' sx={{ marginLeft: 2 }}>ผลการคำนวณ</Typography>
                <Box sx={{
                    marginLeft: 3
                }}>
                    <Stack spacing={3.2} direction="row">
                        <Typography variant='h6' >ถ้าช่วงเวลานี้เป็นวันทำงานปกติ เก็บผลการคำนวณใน =</Typography>
                        <FormControl>
                            <Select
                                value={textOne}
                                label=""
                                onChange={handleChangeOne}
                                size='small'
                                sx={{ width: 150 }}
                            >
                                <MenuItem value={"เวลาทำงาน"}>เวลาทำงาน</MenuItem>

                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack spacing={11} direction="row">
                        <Typography variant='h6' >ถ้าช่วงเวลานี้เป็นวันหยุดเก็บผลการคำนวณใน =</Typography>
                        <FormControl>
                            <Select
                                value={textTwo}
                                label=""
                                onChange={handleChangeTwo}
                                size='small'
                                sx={{ width: 150 }}
                            >
                                <MenuItem value={"โอที 1.5"}>โอที 1.5</MenuItem>

                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack spacing={2.2} direction="row">
                        <Typography variant='h6' >ถ้าช่วงเวลานี้เป็นวันหยุดประจำปี เก็บผลการคำนวณใน =</Typography>
                        <FormControl>
                            <Select
                                value={textThree}
                                label=""
                                onChange={handleChangeThree}
                                size='small'
                                sx={{ width: 150 }}
                            >
                                <MenuItem value={"โอที 1.5"}>โอที 1.5</MenuItem>

                            </Select>
                        </FormControl>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
