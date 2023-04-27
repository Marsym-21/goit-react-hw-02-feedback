import css from './Feedback.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={css.statistics}>
      <h1 className={css.profile_title}>Statistics</h1>
      <ul className={css.statistics_list}>
        <li className={css.statistics_item}>Good: {good}</li>
        <li className={css.statistics_item}>Neutral: {neutral}</li>
        <li className={css.statistics_item}>Bad: {bad}</li>
        <li className={css.statistics_item}>Total: {total}</li>
        <li className={css.statistics_item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
