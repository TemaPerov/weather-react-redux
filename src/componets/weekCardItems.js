
import "./dayTime.css"

const WeekCardItems = ({ day}) => {
    const arr = day.map((a, index) => { 
    const ms = a.dt * 1000;
    const weekDayName = new Date(ms).toLocaleString("ua", { weekday: "long" });
    const weekDayData = new Date(ms).toLocaleString( "ua",{year: 'numeric', month: 'numeric', day: 'numeric'})
    const dayHour = new Date(ms).toLocaleString("ua",{hour: "2-digit",minute: "2-digit"})
    const imgURL = "owf owf-" + a.weather[0].id + " owf-5x icon-style";
 
return(
  <div key={index}>
  <div className="card text-center" >
    <i className={imgURL} />
    <div className="card-body">
      <h5 className="card-title">{weekDayName}</h5>
      <p>{weekDayData}</p>
      <p>{dayHour}</p>
      <h4 className="card-text">
      {Math.round(a.main.temp)} &deg;
      </h4>
      <p className="card-text">
        <small className="text-muted">{a.weather[0].description}</small>
      </p>
    </div>
  </div>
  </div>
)
})
return <div className="box">{arr}</div>;
}

export default WeekCardItems;
