import React from 'react';
export function SListX(props) {
    const { showData } = props;
    return (
        <div className='w-full flex flex-col'>
            {showData.map((sdata, index) =>
                <div className='flex flex-row w-full mt-5' key={`show_data_${index}`}>
                    <li className='text-lg text-[#353535] pl-5 w-full '>{sdata}</li>
                    <img className="w-1/5 h-auto pl-5 cursor-pointer" src="img/cancel.png" alt="cancel" />
                </div>
            )}
        </div>
    );
}