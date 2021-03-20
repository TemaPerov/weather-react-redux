

const TodayWeather = ({ data,}) => {
  const ms = data.dt * 1000;
  const weekDayName = new Date(ms).toLocaleString("ua", { weekday: "long" });
  const weekDayData = new Date(ms).toLocaleString("ua", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const img = "owf owf-" + data.weather[0].id + " owf-5x icon-style";


  return (
    <div>
      <div className="card mb-3">
        <i className={img}></i>
        <div className="card-body">
          <h5 className="card-title">
            {Math.round(data.main.temp - 273.15)}&deg;C
          </h5>
          <p className="card-text">{weekDayName}</p>
          <p className="card-text">{weekDayData}</p>
          <p className="card-text">{data.weather[0].description}</p>
        </div>
  
      </div>
    </div>
  );
};
export default TodayWeather;
