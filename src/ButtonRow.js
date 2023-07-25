import "./ButtonRow.css";
function ButtonRow({
  increment,
  decrement,
  oddincrement,
  asyncincrement,
  toggle,
  startincrement,
  reset
}) {
  return (
    <div className="button">
      <button className="button button-row" onClick={increment}>
        Increment
      </button>
      <button className="button button-row" onClick={decrement}>
        Decrement
      </button>
      <br />
      <button className="button button-row" onClick={oddincrement}>
        Increment-If-Odd
      </button>
      <button className="button button-row" onClick={asyncincrement}>
        Async-Inc
      </button>
      <br />
      <button className="button button-row" onClick={startincrement}>
        {toggle}
      </button>
      <br />
      <button className="button button-row" onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default ButtonRow;
