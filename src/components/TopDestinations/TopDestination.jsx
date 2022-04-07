import Button from '@mui/material/Button';
import s from './styles.module.css'
import img from './Img/woman.jpg'

export  function TopDestination(){
    return(
        <div className={s.mainContainer}>
            <div className={s.container}>
                <h2 className={s.title}>Top Destinatios</h2>
            </div>
            <div className={s.container}>
                <h2 className={s.title}>Offers you cannot wait</h2>
                <img className={s.img} src={img} alt="Woman on computer" />
                <div className={s.offers}>
                    <p className={s.text}>If you have not yet defined your destination, you may be interested in seeing our offers section.</p>
                    <Button size="small" variant="contained">View Offers</Button>
                </div>
            </div>
        </div>
    )
}