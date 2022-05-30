import React from 'react';
import Add from '../Add/Add';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Add></Add>
        </div>
    );
};

export default Home;