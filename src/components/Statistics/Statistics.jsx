import React from 'react';
import PropTypes from 'prop-types';
import { Section} from '../Section/Section';
import { List, Item,ItemGeneral } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
            <Section title='Statistics'>
                <List>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <ItemGeneral>Total: {total}</ItemGeneral>
                    <ItemGeneral>Positive feedback: {positivePercentage}%</ItemGeneral>
                </List>
            </Section>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positive: PropTypes.number,
}