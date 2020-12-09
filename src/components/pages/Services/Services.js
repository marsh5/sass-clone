import React from 'react';
import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing/Pricing';
import { homeObjOne , homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Services() {
    return (
        <div>
            <Pricing />
            <HeroSection {...homeObjOne} />
            
        </div>
    )
};

export default Services;
