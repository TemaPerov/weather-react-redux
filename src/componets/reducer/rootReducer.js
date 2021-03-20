import { LOAD_DATA,LOAD_DATA_5DAYS,LOAD_DATA_HOUR } from "../Actions/TypeActions";

const initialState = {
  arrWeather: {
  },
  arr5DaysWeather :{
  },
  arrHourWeather:{

  }
  
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        arrWeather: action.data,
      };
      break;
      case LOAD_DATA_5DAYS:
        return {
          ...state,
          arr5DaysWeather: action.data,
        };
        break;
      case LOAD_DATA_HOUR:
        return {
          ...state,
          arrHourWeather: action.data,
        };
        break;
    default:
      return state;
  }
}
