import React from 'react';
import Navigation from "./Navigation/container";
import HinataSwich from "./Swichs/Hinata/container";
const style = {
    display: "flex"
}

const HeadetsItems = () => {

    return (
        <div style={style}>
            <Navigation />
            <HinataSwich />
        </div>
    );
};

export default HeadetsItems;
