import React from 'react';
import Banner from '../../components/Banner';
import Instagram from '../../components/Instagram';
import Blog from '../../components/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blog></Blog>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;