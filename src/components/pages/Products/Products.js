import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjTwo } from '../HomePage/Data';

function Products() {
    return (
        <div>
            <HeroSection {...homeObjTwo} />

        </div>
    )
};

export default Products;
