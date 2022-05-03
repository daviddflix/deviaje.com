
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { rutaTop, topdestination, setValuesInputs } from '../../Redux/actions/actions';
import s from '../TopDestinations/styles.module.css'
import top from './assets/Istanbul-skyline.jpg'
import top1 from './assets/medellin.jpg'
import top2 from './assets/miami2.jpg'
import top3 from './assets/nueva-york_0.webp'
import top4 from './assets/frankfurt-2.jpg'
import top5 from './assets/las vegas.webp'
import top6 from './assets/barcelona.jpg'
import top7 from './assets/Miami-In-April-Cover.webp'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';



export default function CardDestination() {

  const dispatch = useDispatch()
  const history = useHistory()
  const cities = useSelector(state => state.destination)
  console.log(cities)

  const toFrom = {}
  toFrom.toFrom =  false

  const cityname = cities?.data?.map(p => p.name)
  const cityRank = cities?.data?.map(p => p.global_rank_dst)

  useEffect(() => {
    dispatch(rutaTop())
  },[])

  const handleSearch = (e) => {

    const d = new Date().toISOString()
    const date = d.slice(0,10)

    const inputValues = {
            fly_from: 'buenos aires',
            fly_to: e.target.value,
            dateFrom: date,
            dateTo: '2022-04-29',
    }
    const newInputValues = {
            fly_from: 'buenos aires',
            fly_to: e.target.value,
            dateFrom: date,
            dateTo: '2022-04-29',
            toFrom: toFrom.toFrom
    }
    dispatch(setValuesInputs( newInputValues ))
    // dispatch(topdestination(e.target.value))
    dispatch(topdestination( inputValues ))
    history.push('/home')
  }

  return (

    <div>
      {

        <div className={s.offers}>
          <div>
            <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
              <CardActionArea>
                <input type="image" alt='Orlando' src={top} height="140" width='100%' value='orlando' onClick={handleSearch} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Visit { cityname && cityname[0] }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Going from Buenos Aires
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography variant="body2" className={s.rank}>
                  Global Rank   { cityRank && cityRank[0] }
                </Typography>
              </CardActions>
              <div className={s.precio}>
                <Typography variant='body2' className={s.texto}>Lowest Price</Typography>
                <Typography color='green' variant="body1" className={s.texto}>
                  $500
                </Typography>
              </div>
            </Card>
          </div>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='miami' src={top1} height="140" width='100%' value='miami' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[1] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[1] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='las vegas' src={top2} height="140" width='100%' value='las vegas' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[2] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[2] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='los angeles' src={top3} height="140" width='100%' value='los angeles' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[3] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[3] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='san francisco' src={top4} height="140" width='100%' value='san francisco' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[4] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityname && cityRank[4] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='mexico city' src={top5} height="140" width='100%' value='mexico city' onClick={(e) => handleSearch(e)} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[5] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[5] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='cancun' src={top6} height="140" width='100%' value='cancun' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div">
                  Visit { cityname && cityname[6] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[6] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

          <Card sx={{ maxWidth: 250, height: 360, margin: '1rem' }}>
            <CardActionArea>
              <input type="image" alt='fort lauderdale' src={top7} height="140" width='100%' value='fort lauderdale' onClick={handleSearch} />
              <CardContent>
                <Typography variant="h5" component="div" sx={{fontSize:'1.48rem'}} >
                  Visit { cityname && cityname[7] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Going from Buenos Aires
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="body2" className={s.rank}>
                Global Rank   { cityRank && cityRank[7] }
              </Typography>
            </CardActions>
            <div className={s.precio}>

              <Typography variant='body2' className={s.texto}>Lowest Price</Typography>

              <Typography color='green' variant="body1" className={s.texto}>
                $500
              </Typography>

            </div>

          </Card>

        </div>

      }
      {/*            
          //   cities.data.map((p, i) => {
          //     return(
          //       <div key={p.id} style={{margin: '1rem', display:'inline-flex', position:'relative', left:'1.8rem'}}>
          //       <Card sx={{ maxWidth: 250, height:360 }}>
          //      <NavLink style={{textDecoration:'none'}} to='/home'>
          //   <CardActionArea>
          //     <input type="image" src={img} height="140" width='100%' value={p.name} onClick={handleSearch} />
          //     <CardContent>
          //       <Typography variant="h5" component="div">
          //      Visit {p.name}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Starting from Buenos Aires
          //       </Typography>
          //     </CardContent>
          //   </CardActionArea>
          //   </NavLink>
          //   <CardActions>
          //   <Typography variant="body2" className={s.rank}>
          //     Global Rank   {p.global_rank_dst}
          //       </Typography>
          //   </CardActions>
          //     <div className={s.precio}>
               
          //       <Typography variant='body2' className={s.texto}>Lowest Price</Typography>
               
          //       <Typography color='green' variant="body1" className={s.texto}>
          //       $500
          //       </Typography>
               
          //     </div>
           
          // </Card>
          
          //     </div>
          //     )
          //   })
            */}


    </div>


  );
}



