export default function Feedback({ countName, total, positive }) {
  return (
    <>
      <ul>
        <li>Goog: {countName.good}</li>
        <li>Neutral: {countName.neutral}</li>
        <li>Bad: {countName.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
}
