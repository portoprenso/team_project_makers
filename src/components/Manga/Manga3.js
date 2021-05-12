import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import myd from '../../assets/img/myd.png';
// import Popular from '../Popular/Popular'

const Manga3 = () => {
    const [img, setImg] = useState('')
    const {id} = useParams()
    // const {imgLarge, setImgLarge} = useContext(Popular)

    useEffect(() => {
        async function fetchManga () {
            const {data} = await axios(`http://localhost:8000/manga/${id}`)

            setImg(data.img)
           
        }

        fetchManga()
    }, [])

    return (
        <div>
            {img && <img src={img} alt=""/>}
           
        </div>
    );
};

export default Manga3;