import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import { Wrapper, Btn } from './FeedbackOptoins.styled';

export const FeedbackOptoins = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <Wrapper>
        {options.map(name => {
          return (
            <Btn
              className={name}
              type="button"
              name={name}
              key={name}
              onClick={() => onLeaveFeedback(name)}
            >
              {name}
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
