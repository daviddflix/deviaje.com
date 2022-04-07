import Button from '@mui/material/Button';
import s from './styles.module.css'

export  function TopDestination(){
    return(
        <div className={s.mainContainer}>
            <div className={s.container}>
                <h2>Top Destinatios</h2>
            </div>
            <div className={s.container}>
                <h2>Offers you can`t wait</h2>
                <div className={s.offers}>
                    <p className={s.text}>If you have not yet defined your destination, you may be interested in seeing our offers section.</p>
                    <Button size="small" variant="contained">View Offers</Button>
                </div>
            </div>
        </div>
    )
}