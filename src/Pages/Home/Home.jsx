import React from 'react';
import Banner from '../../components/Banner';
import Instagram from '../../components/Instagram';
import Blog from '../../components/Blog';
import Policy from '../../components/Policy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Policy></Policy>
            <Blog></Blog>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;