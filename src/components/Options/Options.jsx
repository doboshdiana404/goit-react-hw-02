import s from './Options.module.css';
export default function Options({ update, total, reset }) {
  return (
    <div className={s.btnContainer}>
      <button onClick={() => update('good')}>Goog</button>
      <button onClick={() => update('neutral')}>Neutral</button>
      <button onClick={() => update('bad')}>Bag</button>
      {Boolean(total) && <button onClick={reset}>Reset</button>}
    </div>
  );
}
