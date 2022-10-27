import { useState } from 'react'
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';





export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  }

  const HandleIncrement = name => {

    if (name === 'good') { setGood(prew => prew + 1); }
    if (name === 'bad') { setBad(prew => prew + 1); }
    if (name === 'neutral') { setNeutral(prew => prew + 1); }
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            HandleIncrement={HandleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={{ good, bad, neutral }}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }