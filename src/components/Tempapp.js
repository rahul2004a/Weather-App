import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=32b5ff4c23527855bb8c4e6d97b6250d`;

            const url2 =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=55d677819f84688c0ca87d3be5fd1243`
            const response = await fetch(url2);
            const resJson = await response.json();
            console.log(resJson);
            console.log("hi");
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event) => {
                        setSearch(event.target.value)
                    }} value={search}/>

                </div>
                {!city ? (<p>No Data Found</p>) : (
                       <div>
                        <div className="info">
                            <h2 className="location"><i class="fas fa-street-view">{search}</i></h2>
                            <h1 className="temp">{city.temp} ℃
                            </h1>
                            <h3 className="tempmin_max">Min :{city.temp_min}℃|  Max :{city.temp_max} ℃</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        </div>
                )}

            </div>
        </>
    );
}
export default Tempapp;