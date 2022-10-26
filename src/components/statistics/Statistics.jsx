import PropTypes from 'prop-types';
import { WrapStat, StatItem } from './StatisticsStyled';


export const Statistics = ({
  options,
  total,
  positivePercentage,
}) => {
  return (
    <WrapStat>
      {Object.keys(options).map(option => (
        <StatItem key={option}>
          <p>
            {option}: {options[option]}
          </p>
        </StatItem>
      ))}
      <p>Total: {total} </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </WrapStat>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
