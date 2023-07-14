import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { branchesHaveDeqartments } from '../../types/branchesHaveDeqartments';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Branch = () => {
    const [branches, setBranches] = useState<branchesHaveDeqartments[]>([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await fetch('/api/department/View_branch');
                const data = await response.json();
                const branchWithId = data.map((branches: branchesHaveDeqartments, index: number) => ({
                    ...branches,
                    id: index,
                }));
                setBranches(branchWithId);
            } catch (error) {
                console.error('Error fetching departments', error);
            }
        };

        fetchDepartments();
    }, []);
    //{branches.map(item => <Typography key={item.branchID}>Branch: {item.branch_name}</Typography>)}
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {branches.map(item =>
                    <Grid key={item.branchID} item xs={6}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{item.branch_name}</Typography>

                            </AccordionSummary>
                            <AccordionDetails>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> {item.department_name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                )}

            </Grid>
        </>
    )
}