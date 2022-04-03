import React from 'react'
import styles from './Nav.module.css'
import axios from 'axios'

const Nav = () => {

  return (
    <header className='header-container-general'>
      <div className='navbar-header' style={{borderBottom: '3px solid #d5e3e6'}}>
        <div style={{display: 'flex', justifyContent:'space-between', alignItems:'top'}}>
            <div className='navbar-brand-box' style={{background:'#FDFEFE'}} >
                <span className={styles.containerTitle}>
                    <h2 className={styles.url}>deviaje.com</h2>
                </span>
            </div>
            <button style={{backgroundColor:'red', height:'50px', width:'50px'}} onClick={()=>{
              axios.get('https://deviaje.herokuapp.com/')
              .then(()=>alert('hay info'))
              .catch(()=>alert('hubo un problema'))
            }}>

            </button>
            <div className = { styles.containerButton } >
                <button
                    color='none'
                    type='button'
                    className='header-item noti-icon waves-effect'
                >Login</button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Nav

