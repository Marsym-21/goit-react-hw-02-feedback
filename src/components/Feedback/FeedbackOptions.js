import css from './Feedback.module.css';

const FeedbackOptions = props => {
  const { onLeaveFeedback } = props;
  return (
    <div className={css.profile_box_btn}>
      <button
        className={`${css.profile_btn} ${css.good}`}
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>

      <button
        className={`${css.profile_btn} ${css.neutral}`}
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>

      <button
        className={`${css.profile_btn} ${css.bad}`}
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
