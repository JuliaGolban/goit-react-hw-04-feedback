import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { Wrapper, Btn } from './FeedbackOptoins.styled';

export const FeedbackOptoins = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <Wrapper>
        {options.map(type => {
          return (
            <Btn
              className={type}
              type="button"
              name={type}
              key={type}
              onClick={() => onLeaveFeedback(type)}
            >
              {type}
            </Btn>
          );
        })}
      </Wrapper>
    </Section>
  );
};

FeedbackOptoins.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
