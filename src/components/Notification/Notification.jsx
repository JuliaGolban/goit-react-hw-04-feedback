import React from 'react';
import PropTypes from 'prop-types';
import { Section} from '../Section/Section';
import {Message} from './Notification.styled';

export const Notification = ({message}) => {
    return (
        <Section title=''>
             <Message>{message}</Message>
        </Section>)
}

Notification.propTypes = {
    message: PropTypes.string,
}