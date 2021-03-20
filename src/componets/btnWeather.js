const BtnWeathet = ({ btn, btnOF, btnHour, setBtnHour, weatherOne }) => {
  const click5Days = () => {
    if (weatherOne.name === undefined) {
      alert("Введіть назву міста");
    } else {
      if (btnOF === false) {
        btn(true);
      } else if (btnOF === true) {
        btn(false);
      }
    }
  };

    const clickHour = () => {
        if (weatherOne.name === undefined) {
            alert("Введіть назву міста");
          } else {
      if (btnHour === false) {
        setBtnHour(true);
      } else if (btnHour === true) {
        setBtnHour(false);
      }
    }
  }
  return (
    <div className="btn-group mx-auto">
      <button type="button" className="btn btn-primary" onClick={click5Days}>
       5 днів
      </button>
      <button type="button" className="btn btn-secondary" onClick={clickHour}>
        Погодинно
      </button>
    </div>
  );
};
export default BtnWeathet;
