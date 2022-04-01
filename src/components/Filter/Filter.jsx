import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import s from './Filter.module.css';


function Filter() {
    const [value, setValue] = useState([20, 200]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={s.filters}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Baggage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={s.details}>
                        <div className={s.description}>
                            <Checkbox />
                            Carry-on baggage
                        </div>
                        <div className={s.description}>
                            <Checkbox />
                            Checked baggage
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Stops</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={s.details}>
                        <div className={s.description}>
                            <Checkbox />
                            0 stops
                        </div>
                        <div className={s.description}>
                            <Checkbox />
                            1 or more
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Filter;