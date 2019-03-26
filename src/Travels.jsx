import React from 'react';
import Travel from './Travel';

const travels = [
{
    destination: 'plop',
    country: 'Inde',
    photo: 'Photo',
    distance: '5000 bornes'
},
{
    destination: 'plop2',
    country: 'Guatemala',
    photo: 'Photo',
    distance: '7000 bornes'
},
{
    destination: 'Berlin',
    country: 'Germany',
    photo: 'Photo',
    distance: '1000 bornes'
},
{
    destination: 'Cancune',
    country: 'Mexico',
    photo: 'Photo',
    distance: '7000 bornes'
},
{
    destination: 'London',
    country: 'Great Britain',
    photo: 'Photo',
    distance: '700 bornes'
}]

const Travels = props => (
    <div>
        {travels.map(travel => (
            <Travel
                destination = {travel.destination}
                country = {travel.country}
                photo = {travel.photo}
                distance = {travel.distance}
            />
        ))}
    </div>
);

export default Travels;