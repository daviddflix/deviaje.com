import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import s from './Filter.module.css';
import { stopsFilter } from '../../Redux/actions/actions';
import {useDispatch} from 'react-redux'


function Filter( ) {

    
    const dispatch = useDispatch()
 

 const handleStops = (e) => {
        e.preventDefault();  
      dispatch(stopsFilter(e.target.value))
    }

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
                        <div  className={s.description}>
                            <Checkbox />
                         Price
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
                <div >
                <input type="checkbox" value='direct' id='direct' onChange={handleStops}/>
                <label htmlFor="direct">Direct</label>
                </div>
                <div >
                <input type="checkbox" value='1'  onChange={handleStops}/>
                <label >1 Stop</label>
                </div>
                <div >
                <input type="checkbox" value='2'  onChange={handleStops}/>
                <label >2 Stop</label>
                </div>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}

export default Filter;