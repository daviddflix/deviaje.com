import React, { useEffect, useState } from 'react';
import s from './Filter.module.css';
import { dateFilter, stopsFilter, priceFilter, scheduleFilter } from '../../Redux/actions/actions';
import {useDispatch} from 'react-redux'


function Filter( ) {

    const [price, setPrice] = useState('500')
    const [check, setCheck] = useState('')
    const [schedule, setSchedule] = useState('')
   
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
        
     }, [dispatch, check])
    
    const handleDate = (e) => {
        e.preventDefault();  
      dispatch(dateFilter(e.target.value))
    }

   useEffect(() => {
       if(price){
        dispatch(priceFilter(price))
       }
   }, [dispatch, price])
 
    let handleInputPrice = (e) => {
        setPrice(e.target.value);
      };

      useEffect(()=> {
          if(schedule){
              dispatch(scheduleFilter(schedule))
          }
      }, [dispatch, schedule])

      let handleInputSchedule = (e) => {
        setSchedule(e.target.value);
      };


    return (
        <div className={s.filters}>
              <div className={s.container}>
                <label className={s.title}>Stops</label>

                <div  className={s.label}>
                <input className={s.checkbox}  type="checkbox" value='direct' onChange={handlecheck} name='direct'/>
                <label className={s.label}>Non-stops</label>
                </div>
                <div  className={s.label} >
                <input className={s.checkbox}  type="checkbox" value='1'  onChange={handlecheck} name='1'/>
                <label className={s.label}>1 Stop</label>
                </div>
                <div  className={s.label} >
                <input className={s.checkbox}  type="checkbox" value='2'  onChange={handlecheck} name='2' />
                <label className={s.label}>2 Stop or more</label>
                </div>
              </div>
               
                
               <div className={s.container2}>
                    <label className={s.title}>Sort by</label>
                <div className={s.label}>
                    <input  className={s.checkbox}  type="checkbox" value='date'  onChange={handleDate}/>
                    <label  className={s.label} >Upcoming flights</label>
                </div>
               </div>
                

            <div className={s.container2}>
                <label className={s.title}>Price</label>
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
                <label className={s.title}>Schedule</label>
                <div>
                <div className={s.label}>
                    <input  className={s.checkbox}  type="checkbox" value='day' name='day' onChange={handleInputSchedule} />
                    <label className={s.label}>Day Flight</label>
                </div>
                <div className={s.label}>
                    <input  className={s.checkbox}  type="checkbox" value='night' name='night' onChange={handleInputSchedule}/>
                    <label className={s.label}>Night flight</label>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Filter;