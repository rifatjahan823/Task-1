import React from 'react';
import Add from '../Add/Add';
import Banner from '../Banner/Banner';
import FactArea from '../FactArea/FactArea';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Add></Add>
            <FactArea></FactArea>
            <Slider></Slider>
        </div>
    );
};

export default Home;