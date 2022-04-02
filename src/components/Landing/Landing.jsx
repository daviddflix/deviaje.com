import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getFlightsInfo } from "../../Redux/actions/actions";
import s from "./Landing.module.css";
import validate from './utils/validate';

function Landing() {

  const dispatch = useDispatch()

  const history = useHistory()

  const [input, setInput] = useState({
    fly_from: "",
    fly_to: "",
    dateFrom: "",
    dateTo: "",
  })

  const [errors, setErrors] = useState({})

  let handleInputChange = e => {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = e => {
    e.preventDefault()
    dispatch(getFlightsInfo(input))
    history.push('/home')
  }

  return (
    <>
      <div className={s.fondo}>
        <h1 className={s.titulo}>
          Welcome to <span className={s.url}>deviaje.com</span>
        </h1>
        <div className={s.flex}>
          <div className={s.boxErrors}>
            <input
              type="text"
              placeholder="Enter departure city"
              value={input.fly_from}
              onChange={e => handleInputChange(e)}
              name="fly_from"
              className={s.input}
            />
            {
              errors.fly_from && <div className={s.errors}>{errors.fly_from}</div>
            }
          </div>
          <div className={s.boxErrors}>
            <input
              type="text"
              placeholder="Enter destination city"
              value={input.fly_to}
              onChange={e => handleInputChange(e)}
              name="fly_to"
              className={s.input}
            />
            {
              errors.fly_to && <div className={s.errors}>{errors.fly_to}</div>
            }
          </div>

          <div className={s.boxErrors}>
            <input type="date"
              placeholder="Date"
              value={input.dateFrom}
              onChange={e => handleInputChange(e)}
              name="dateFrom"
              className={s.date}
            />
            {
              errors.dateFrom && <div className={s.errors}>{errors.dateFrom}</div>
            }
          </div>

          <div className={s.boxErrors}>
            <input type="date"
              value={input.dateTo}
              onChange={e => handleInputChange(e)}
              name="dateTo"
              className={s.date}
            />
            {
              errors.dateTo && <div className={s.errors}>{errors.dateTo}</div>
            }
          </div>

          {
            Object.keys(errors).length === 0 && input.fly_to && input.fly_from && input.dateFrom && input.dateTo ?
              (<button className={s.btn} type="submit" onClick={e => handleClick(e)}>
                <SearchIcon />
                Search
              </button>)
              : <button className={s.btn} type="submit" onClick={e => handleClick(e)} disabled>
                <SearchIcon />
                Search
              </button>
          }

        </div>
      </div>
    </>
  );
}

export default Landing;
