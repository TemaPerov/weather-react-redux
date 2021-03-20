import { useSelector } from "react-redux";

import React, {useState } from "react";
import TodayWeather from "./todayWeater";
import Items from "./itemsWeekCard";
import DayCardItems from "./DayCardItems";
import WeekCardItems from "./weekCardItems";
import BtnWeathet from "./btnWeather";

const WeekCard = () => {
  const state = useSelector((state) => state);
  const weatherOne = state.arrWeather;
  const weather5Days = state.arr5DaysWeather;
  const weatherHour = state.arrHourWeather;
  const [btn, setBtn] = useState(false);
  const [btnHour, setBtnHour] = useState(false);
  return (
    <div className="card text-center">
      <Items data={weatherOne} />
      <h1>{weatherOne.name}</h1>
      {weatherOne.name && (
        <div>
          {btnHour ? (
            <WeekCardItems day={weatherHour} />
          ) : (
            <TodayWeather data={weatherOne} />
          )}
        </div>
      )}

      <div>
        <BtnWeathet
          btn={setBtn}
          btnOF={btn}
          btnHour={btnHour}
          setBtnHour={setBtnHour}
          weatherOne={weatherOne}
        />
      </div>
     
      {btn ? <DayCardItems day={weather5Days} /> : null}
    </div>
  );
};
export default WeekCard;
