import React, {useState} from 'react'
function MyComponent() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964
    })
    const handleYearChange = (e) => {
        setCar(car => ({...car, year: e.target.value}))
    };
    const handleModelChange = (e) => {
        setCar(car => ({...car, model: e.target.value}))
    };
    const handleBrandChange = (e) => {
        setCar(car => ({...car, brand: e.target.value}))
    };
    return (
        <>
            <div className="car-container">
                <h2>{car.brand}</h2>
                <p>{car.model}</p>
                <p>{car.year}</p>

                <input type="text" value={car.brand} onChange={handleBrandChange}  name='carBrand'/>
                <input type="text" value={car.model} onChange={handleModelChange} name='carModel'/>
                <input type="number" value={car.year} onChange={handleYearChange} name='carYear'/>
            </div>

        </>
    )
}
export default MyComponent;