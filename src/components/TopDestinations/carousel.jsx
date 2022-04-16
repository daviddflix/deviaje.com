import Button from '@mui/material/Button';
import s from './styles.module.css'
import img from './assets/woman.jpg'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { topdestination } from '../../Redux/actions/actions';
import top from './assets/istanbul.jpg'
import top1 from './assets/medellin.jpg'   
import top2 from './assets/miami2.jpg'
import top3 from './assets/nueva-york_0.webp'
import top4 from './assets/frankfurt-2.jpg'
import top5 from './assets/las vegas.webp'
import top6 from './assets/barcelona.jpg'
import { Loading } from '../loading/Loading';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import getCity from './helpers/getCity'
import {useHistory} from 'react-router-dom'
   

export  function TopDestination(){


    const history = useHistory()
    const [location, setLocation] = useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    })
    const [ showLoading, setShowLoading ] = useState(false)
    let [ data, setData] = useState('') // origin
    console.log('location',location)
    console.log('city',data)
  

   useEffect(() => {
    if(!("geolocation" in navigator)){
      onError({
         code:0,
         message:"Geolocation not supported"
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}, [])


   useEffect(() => {
    const updateCity = () => {
        getCity(location)
           .then((city) => {
               setData(prev => ({...prev, city}))
           })
           .catch(err => console.log('errorCity',err))
    }
    updateCity()
   } ,[location])





    
    const dispatch = useDispatch()

    const handleSearch = (e) =>{  
        setShowLoading(true)
        if(e.target.value){
            dispatch(topdestination(e.target.value))
            setShowLoading(true)
        }
    setShowLoading(false)
    history.push('/home')
   }

  
   
   const onSuccess = location => {
       setLocation({
          loaded:true,
          coordinates:{
              lat:location.coords.latitude,
              lng:location.coords.longitude,
          }
       })
   }

   const onError = error => {
       setLocation({
           loaded: true,
           error,
       })
   }

   const buttonToOffersPage = () => {
       history.push('/top')
   }


 

    return(
        <div className={s.mainContainer}>
              {
          showLoading &&  <div style={{position: 'abolsute'}} > <Loading /> </div> 
              }
             
            <div className={s.container}>
                <h2 className={s.title}>Top Destinations</h2>
         <Carousel>
            <Carousel.Item>
                    <input type='image' value='istabul' name='istabul' className={s.slide} src={top} alt="Istabul" onClick={(e) => handleSearch(e, data)}/>
                <Carousel.Caption>
                <p>Istanbul</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='medellin' name='medellin'  className={s.slide} src={top1} alt="Medellin" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Medellin</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='miami'  name='miami'  className={s.slide} src={top2} alt="Miami" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Miami</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                
                    <input type='image' value='new york' name='new york' className={s.slide} src={top3} alt="New York" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>New York</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             
                    <input type='image' value='frankFurt' name='frankFurt'  className={s.slide} src={top4} alt="FrankFurt" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>FrankFurt</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
               
                    <input type='image' value='las vegas' name='las vegas'  className={s.slide} src={top5} alt="Las Vegas" onClick={handleSearch}/>
                
                <Carousel.Caption>
                <p>Las Vegas</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                
                    <input type='image' value='barcelona'  name='barcelona'  className={s.slide} src={top6} alt="Barcelona" onClick={handleSearch}/>
               
                <Carousel.Caption>
                <p>Barcelona</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </div>
            <div className={s.container}>
                <h2 className={s.title}>Offers you cannot wait</h2>
                <img className={s.img} src={img} alt="Woman on computer" />
                <div className={s.offers}>
                    <p className={s.text}>If you have not yet defined your destination, you may be interested in seeing our offers section.</p>
                    <Button onClick={buttonToOffersPage} size="small" variant="contained">View Offers</Button>
                </div>
            </div>
        </div>
    )
}