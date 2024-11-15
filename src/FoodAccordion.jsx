import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Grid } from '@mui/material';  // Use Grid from @mui/material
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FoodAccordion({ title, items }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{title}</Typography>
            </AccordionSummary>
            {items.map((item, index) => (
                <AccordionDetails key={index}>
                    <Typography>{item.name}</Typography>
                    <Grid container spacing={2}> {/* Use Grid from @mui/material */}
                        <Grid item>
                            {/* Image of the food */}
                        </Grid>
                        <Grid item>
                            <Typography>{item.description}</Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            ))}
        </Accordion>
    );
}

export default FoodAccordion;
