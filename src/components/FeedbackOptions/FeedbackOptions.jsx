import { Button, FeedbackWrapper } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, HandleIncrement }) => {
  return (
    <FeedbackWrapper>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => HandleIncrement(option)}>{option}</Button>
        </li>
      ))}
    </FeedbackWrapper>
  );
};