import React from 'react';
import Home from './Home';
import HomeMobile from './HomeMobile';

const HomeHub = ({isMobile}) => {

console.log("homehub", isMobile)
    return (
        <>
        {isMobile.isMobile ? <HomeMobile/> : <Home/>}
        </>
    );
};

export default HomeHub;