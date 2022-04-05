import s from './pagination.module.css'

export function Paginado({flightsPerPage,flights, pagination}){



     const pageNumbers = []
   

     for (let i = 1; i < Math.ceil(flights/flightsPerPage); i++) {
          pageNumbers.push(i)
          
     }

     return(
  
           <nav>
           
           <ul>
                {   
                     pageNumbers && pageNumbers.map(number => {
                         return(
                              <div key={number} className={s.buttonList}>
                              <li>
                              <button className={s.button} onClick={ () => pagination(number)}>{number}</button>
                            </li>
                              </div>
                             
                         )
                     })
                }
           </ul>
      </nav>
     
     )
}


