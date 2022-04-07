import React, { useEffect, useState } from 'react';
import s from './Filter.module.css';
import { dateFilter, stopsFilter, priceFilter, availabilityFilter } from '../../Redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Modal} from '../modal/index'





function Filter( ) {
    const modalErr = useSelector((state) => state.modalErr);
    const [price, setPrice] = useState('500')
    const [check, setCheck] = useState('')
    const [availability, setAvailability] = useState('1')
   
    const dispatch = useDispatch()

    const handlecheck = (e) => {
        if(e.target.checked){
            setCheck(e.target.value)
        }
    }

     useEffect(()=> {
         if(check){
       dispatch(stopsFilter(check))
         }
        
     }, [check])
    
    const handleDate = (e) => {
        e.preventDefault();  
        dispatch(dateFilter(e.target.value))
    }

   useEffect(() => {
       if(price){
        dispatch(priceFilter(price))
       }
   }, [ price])
 
    let handleInputPrice = (e) => {
        setPrice(e.target.value);
      };

      useEffect(()=> {
          if(availability){
              dispatch(availabilityFilter(availability))
          }
      }, [availability])

      let handleInputavailability = (e) => {
        setAvailability(e.target.value);
      };


    return (
        <div className={s.filters}>
             {
      modalErr && <Modal title='No flights found' /> 
    }
              <div className={s.container}>
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Stops</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="direct"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="direct" control={<Radio />} label="Non-Stop" onChange={handlecheck} />
                    <FormControlLabel value="1" control={<Radio />} label="1 Stop" onChange={handlecheck} />
                    <FormControlLabel value="2" control={<Radio />} label="2 Stop or more"  onChange={handlecheck}/>
                </RadioGroup>
                </FormControl>
              </div>
               
                
               <div className={s.container2}>
                    {/* <label className={s.title}>Sort by</label>
                <div className={s.label}>
                    <input  className={s.checkbox}  type="checkbox" value='date' checked={check} onChange={handleDate}/>
                    <label  className={s.label} >Upcoming flights</label>
                </div> */}
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="date" control={<Radio />} label="Upcoming flights" onChange={handleDate} />
                   
                </RadioGroup>
                </FormControl>
               </div>
                

            <div className={s.container2}>
                <FormLabel className={s.title}  id="demo-radio-buttons-group-label">Price</FormLabel>
                <div className={s.flex}>
                <div>
                    <span className={s.padding} >$10</span>
                </div>
                <div>
                    <span className={s.price}>{price}</span>
                    <input className={s.range} type="range" min='10' max='1000' name='price'  value={price}  onChange={handleInputPrice}/>
                    <span className={s.padding}>$1.000</span>
                </div>
            </div>
            </div> 
            <div   className={s.container2}>
            <FormLabel className={s.title} id="demo-radio-buttons-group-label">Availability</FormLabel>
                <div className={s.flex}>
                <div>
                    <span className={s.padding} >1</span>
                </div>
                <div>
                    <span className={s.price}>{availability}</span>
                    <input className={s.range} type="range" min='1' max='10' name='availability'  value={availability}  onChange={handleInputavailability}/>
                    <span className={s.padding}>10</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Filter;