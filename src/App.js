import React, { useState } from "react";
import "./WeatherWidget";
import SearchBar from "./components/SearchBar";
import Layout from "./Layout";

function App() {
    const [activeCarouselItem, setActiveCarouselItem] = useState(0);
    const cities = ["Skopje", "Kavadarci", "Kumanovo", "Ohrid"];

    return (
        <div className="mx-auto max-w-md mt-5 py-3 px-5 h-fit">
            <SearchBar />
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators relative">
                    {
                        cities.map((city, index) => {

                            /* className='absolute bottom-2 bg-gray-500'  */
                            return <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={`${activeCarouselItem === index ? 'active' : ''} absolute top-5 bg-gray-500`}
                                onClick={() => setActiveCarouselItem(index)}
                            ></button>
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        cities.map((city, index) => <div key={index}
                            className={index === activeCarouselItem ? 'carousel-item active' : 'carousel-item'}>
                            <Layout city={city} activeCarouselItem={activeCarouselItem} itemIdx={index} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
