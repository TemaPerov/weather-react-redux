import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {thunkLoadData,thunk5Day,thunkHourWeather} from "./Actions/action";
import "./dayTime.css"



const Items = () => {
    const[valueInp, setValueInput] = useState("")
    const dispatch = useDispatch();
    const eventAction =(e)=>{
        setValueInput(e.target.value);
    }
    const FindCityValue =()=>{
        if(valueInp){
            dispatch(thunkLoadData(valueInp));
            dispatch(thunk5Day(valueInp));
            dispatch(thunkHourWeather(valueInp))
            setValueInput("")
        }
      
    }
    const sendEnter = (e) => {
        if (e.key === "Enter") {
            FindCityValue();
        }
      };
  return (
    <div className="input-group mb-3 size " >
      <input
        type="text"
        className="form-control"
        placeholder="Введіть назву міста"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange ={eventAction}
        onKeyPress={sendEnter}
        value = {valueInp}
      />
      <div className="input-group-append ">
        <button className="btn btn-outline-secondary" type="button"
        onClick={FindCityValue}>
         Search
        </button>
      </div>
      
  
    </div>
    
  );
};
export default Items;
