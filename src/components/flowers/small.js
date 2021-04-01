
import React from 'react';
import './small.css';

const SmallFlower = ({classSmallFlower, flowerTittle}) => {

            return (
                <>
                    <div className="small-flower">
                        <div className={classSmallFlower}/>
                        <div className={classSmallFlower}/>
                        <div className={classSmallFlower}/>
                        <div className={classSmallFlower}/>
                    </div>
                    <span>{flowerTittle}</span>
                </>
            )
}

export default SmallFlower;