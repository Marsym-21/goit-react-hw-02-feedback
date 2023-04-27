import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.onAddFeedback(e);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  onAddFeedback = e => {
    const object = e.target.textContent.toLocaleLowerCase();
    console.log(object);
    switch (object) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
  };

  total = 0;

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  positivePercentage = 0;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    console.log(good);
    this.positivePercentage = ((good / this.total) * 100).toFixed([0]);
  };

  render() {
    const state = this.state;
    const { good, neutral, bad } = state;

    return (
      <div className={css.profile}>
        <h1 className={css.profile_title}>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.total}
          positivePercentage={this.positivePercentage}
        />
      </div>
    );
  }
  onPropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
    addGood: PropTypes.string.isRequired,
    addNeutral: PropTypes.string.isRequired,
    addBad: PropTypes.string.isRequired,
  };
}
export default Feedback;
