import React from 'react'

export default function ({ item }) {
    return (
        <div className='card'>
            <div className="card-container">
                <div className="card-row">
                    <div className="card-item">
                        <img src={item.strMealThumb} alt="" />
                        <div className="card-bottom">
                            <p className="food-name"> {item.strMeal}</p>
                            <p className="food-location"> {item.strArea}</p>
                            <p className="title">
                            {item.strInstructions}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
