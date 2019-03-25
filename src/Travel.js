import React from 'react';

const Travel = props => (
    <div>
        <div>destination: {props.destination}</div>
        <div>country: {props.country}</div>
        <div>photo: {props.photo}</div>
        <div>distance: {props.distance}</div>
    </div>
);

export default Travel;