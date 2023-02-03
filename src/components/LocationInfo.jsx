import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {
    // console.log(location);

    return (
    <article className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span className='location__label'>Type: </span>{location?.type}</li>
            <li className='location__item'><span className='location__label'>Dimension: </span>{location?.dimension}</li>
            <li className='location__item'><span className='location__label'>Population: </span>{location?.residents.length}</li>
            {/* ul>li*3>span    */}
        </ul>
    </article>
)
}

export default LocationInfo