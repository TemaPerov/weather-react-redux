import {LOAD_DATA,LOAD_DATA_5DAYS,LOAD_DATA_HOUR} from "./TypeActions"
import ApiTask from "./../../Api/api"

export function loadDataFunc(data, ){
    return {type: LOAD_DATA,data}
   
}
export function loadData5Days(data){
    return {type: LOAD_DATA_5DAYS,data}
}
export function loadHourWeather(data){
    return {type: LOAD_DATA_HOUR,data}
}

export function thunkLoadData(text){
        return  async (dispatch) =>{
            const data = await ApiTask.getData(text);
            dispatch(loadDataFunc(data.data))
        
    }
}
export function thunk5Day(text){
    return async(dispatch)=>{
        const data = await ApiTask.getData5Days(text);
        const arrFilt = data.data.list;
        const filt5Days = arrFilt.filter(a=>a.dt_txt.includes("15:"))
        dispatch(loadData5Days(filt5Days))
    }
}

export function thunkHourWeather(text){
    return async(dispatch)=>{
        const data = await ApiTask.getData5Days(text);
        const arrFilt = data.data.list;
        const today = new Date().getDate()
        const filtHour = arrFilt.filter(a=>a.dt_txt.includes("-"+today))
        dispatch(loadHourWeather(filtHour))
    }
}