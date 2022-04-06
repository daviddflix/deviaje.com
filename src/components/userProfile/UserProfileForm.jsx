import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import countries from './Countries';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const UserProfileForm = () =>  {
  const [form, setForm] = useState({
    dni: 0,
    age: 0,
    phone: 0,
    state: '',
    city: '',
    zip: 0,
  })

  //Manejadores de Eventos
 //manejador de eventos de los inputs
 function handleChange(e) {
  setForm({
      ...form,
      [e.target.name]: e.target.value
  })
}

// function handleSubmit(e){
//   e.prevent.default;
//   if(form.dni < 1 || form.age < 1 || form.phone < 1 || !form.state || !form.city || form.zip < 1){
    
//   }
// }



  return (
    <div>
      
    <CssBaseline />
    <Typography variant="h4" align= 'center' gutterBottom component="div" sx={{m: 2}}>
        DATOS PERSONALES
    </Typography>    
    <Container fixed align='center'>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)', bgcolor: '#cfe8fc', height: '70vh', width: '85vh'}}
        noValidate
        autoComplete="off">      
      <div> 
      <TextField required id="standard-required" label="DNI/Passport" name='dni' value={form.dni} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div>

      <div> 
      <TextField required id="standard-required" label="Age" name='age' value={form.age} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div> 

      <div> 
      <TextField required id="standard-required" label="Phone Number" name='phone' value={form.phone} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div> 

      <div> 
      <Autocomplete
      id="country-select-demo"
      sx={{ m: 1, width: '25ch' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField variant="standard" {...params} label="Choose a country" inputProps={{...params.inputProps, autoComplete: 'new-password',}} onChange={(e) => handleChange(e)}/> //disable autocomplete and autofill
      )}
    />  
      </div> 

      <div> 
      <TextField required id="standard-required" label="State" name='state' value={form.state} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div> 

      <div> 
      <TextField required id="standard-required" label="City" name='city' value={form.city} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div> 

      <div> 
      <TextField required id="standard-required" label="Zip Code" name='zip' value={form.zip} defaultValue="" variant="standard" color='success' onChange={(e) => handleChange(e)}/>
      </div>

      <div>     
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="row-radio-buttons-group" color='success' row>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
      </div>

      <div>     
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" >Vaccinated</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Yes" name="row-radio-buttons-group" color='success' row>
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
      </div> 
      <div>   
      <Button sx={{ '& button': { m: 1 }, display: 'center' }} size="medium" color="success" endIcon={<SendIcon />}>Submit</Button> 
      </div>                 
    </Box>        
    </Container>
    </div>
  )
}


export default UserProfileForm