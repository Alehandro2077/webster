import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const EventItem = ({ idProject, name, img }) => {
    let navigate = useNavigate();

    return (
        <div className='item_card'>
            <div className='card_white'>
                <img className='eventimg' src={img} alt="aboba" />

                <p className='event-name-text'>{name}</p>

                <div className='card_dark'>

                    <span className='event_button' onClick={() => { navigate(`/editor/${idProject}`) }}>OPEN</span>

                </div>
            </div>
        </div>
    )
}
export default EventItem;