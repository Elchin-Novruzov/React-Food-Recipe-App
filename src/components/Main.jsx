import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Card from './Card'

export default function Main() {

    const [data, setData] = useState()
    const [getFood, setFood] = useState([])

    const get = async (evt) => {
        if (evt.key === 'Enter') {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
            setFood(response.data.meals)
            setData("")
        }
    }

    return (
        <div className='food'>
            <div className="f-banner">
                <h1> Search your food recipe  😋</h1>
                <div className="f-item">
                    <input onKeyPress={get} onChange={(e) => setData(e.target.value)} value={data} type="text" placeholder='enter your food name' />
                </div>
            </div>
            <div className="cards">
                {
                    getFood === null ? <p className='not' style={{ fontSize: "27px", color: 'red' }}> Not Found... </p> :
                        getFood.map((item, idx) => {
                            return (
                                <Card item={item} key={idx} />
                            )
                        })
                }
            </div>
        </div>
    )
}
