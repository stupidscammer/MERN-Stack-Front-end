import React from 'react';
import { Dishes } from '../../../../components/dishes';

export function RightB1(props) {
    const { list}=props;
    
    return (
        <div  className='w-3/4 space-x-10  mt-10 flex flex-col'>
            <p className="mt-5 pl-10 text-7xl font-bold text-white decoration-8 decoration-dashed decoration-white">Recommended Dishes</p>
            {list && list.map((sdata, index) =><Dishes sdata={sdata} />)}
        </div>    
    );
}


