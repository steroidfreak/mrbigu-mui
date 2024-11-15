import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function FastingInfo() {
    return (
        <div>
            <Typography variant="h3" gutterBottom>Your Life, Your Choice!!</Typography>
            <Typography variant="h4" gutterBottom>Fasting and Refeeding Diet Plan and Advice & Precautions</Typography>
            {/* ... Additional text content ... */}
            <List>
                <ListItem>
                    <ListItemText primary="Do not brush your teeth" />
                </ListItem>
                {/* ... More list items for each precaution ... */}
            </List>
            {/* ... Additional content ... */}
        </div>
    );
}

export default FastingInfo;