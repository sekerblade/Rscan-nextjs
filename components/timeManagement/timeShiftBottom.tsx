import React, { useContext, useState } from 'react'
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
import { DataContext } from './timeShift';

export const TimeShiftBottom = () => {

    const { dispatch } = useContext(DataContext);

    const handleChangeBottom = (e: any) => {
        dispatch({
            type: 'changeBottom',
            payload: { name: e.target.name, value: e.target.value }
        })
    }


    return (
        <>
            <DataContext.Consumer>
                {midState => (
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
                                        name='textOne'
                                        value={midState.state.textOne}
                                        label=""
                                        onChange={handleChangeBottom}
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
                                        name='textTwo'
                                        value={midState.state.textTwo}
                                        label=""
                                        onChange={handleChangeBottom}
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
                                        name='textThree'
                                        value={midState.state.textThree}
                                        label=""
                                        onChange={handleChangeBottom}
                                        size='small'
                                        sx={{ width: 150 }}
                                    >
                                        <MenuItem value={"โอที 1.5"}>โอที 1.5</MenuItem>

                                    </Select>
                                </FormControl>
                            </Stack>
                        </Box>



                    </Box>
                )}
            </DataContext.Consumer>

        </>
    )
}
