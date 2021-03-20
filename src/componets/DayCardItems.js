import "./dayTime.css";
const DayCardItems = ({ day }) => {
  const arr = day.map((a, index) => {
    const ms = a.dt * 1000;
    const weekDayName = new Date(ms).toLocaleString("ua", {
      weekday: "long",
    });
    const weekDayData = new Date(ms).toLocaleString("ua", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const dayHour = new Date(ms).toLocaleString("ua", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const img = "owf owf-" + a.weather[0].id + " owf-3x icon-style";
    return (
      <div className="card text-white bg-primary mb-3" key={index}>
        <div className="card-header">
          {weekDayName}
          <p>{weekDayData}</p>
          <div>
            <i className={img}></i>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{Math.round(a.main.temp)} &deg;</h5>
          <p className="card-text">{a.weather[0].description}</p>
        </div>
      </div>
    );
  });
  return <div className="box">{arr}</div>;
};

export default DayCardItems;
