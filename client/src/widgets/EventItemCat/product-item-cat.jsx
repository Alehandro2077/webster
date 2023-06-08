import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Pagination from '../Pagination/pagination';
import EventItem from './component/event_item';

import lufi from './assets/luffy.jpg'
import "./style.css"

export const ProductItemsCat = () => {
    const [page, setPage] = useState([0]);
    // const { store } = useContext(Context)
    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     async function getCompanies() {
    //         const data = await store.getEventOneComp(idUs, id);
    //         setEvents(data.data)
    //         
    //     }
    //     getCompanies();

    // }, [ events])

    return (
        <div className='box_one_category_product_aboba'>
            <div className="text_centr_list_pr ">          Recent project</div>

            <div className='box_one_category_product_c'>
                {/* {events.slice(page * 12, page * 12 + 12).map((item, index) =>
                    <div></div>
                    // <EventItem key={index} img={item.img} name={item.name} idProject={item._id} />
                )} */}
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
                <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} /> <EventItem img={lufi} name={'ssssssssssssssssss'} idProject={"s"} />
            </div>

            {/* <Pagination quantity={events.length} numberForPage={12} current={page} change={setPage} /> */}
        </div>
    )
}