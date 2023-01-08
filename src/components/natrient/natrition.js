import React  , { useState } from 'react';
import config, { nutrients } from '../../config';
export function Natrition(props) {
    const { showData } = props;
    const [newValue,setNewValue] = useState('');
    const [newValue1,setNewValue1] = useState('');
    const [newValue2,setNewValue2] = useState('');
    const [newValue3,setNewValue3] = useState('');
    const [newValue4,setNewValue4] = useState('');
    const [newValue5,setNewValue5] = useState('');
    const [newValue6,setNewValue6] = useState('');
    const [newValue7,setNewValue7] = useState('');
    const [newValue8,setNewValue8] = useState('');
    const [newValue9,setNewValue9] = useState('');
    const [newValue10,setNewValue10] = useState('');
    // console.log(nutrients[6])
    return (
        <div className=''>
            <div>
                <label className='text-white text-3xl '>{showData.title}</label>
            </div>
            <div className='w-full text-xl text-white flex flex-col mt-2 overflow-auto max-h-80'>
                {nutrients.map((sdata, index) =>
                    <div className='mt-2' key={`show_data_${index}`}>
                        <div className='w-full flex flex-row'>
                            <div className='w-2/3' >
                                <label className='w-full text-xl'>{sdata}</label>
                            </div>
                            <div className='w-1/3'>
                                <div className='w-full flex flex-row '>
                                    <div >
                       


                    <input type="text" className="w-10 rounded border-white border text-white  bg-transparent text-xl" placeholder="Min" 
                        value={newValue} onChange={(e) => setNewValue(e.target.value)}
                    />


                                    </div>
                                    <div className='w-1/5'>-</div>
                                    <div className='min-w-max'>
                                    <input type="text" className="w-10 rounded text-white border-white border bg-transparent text-xl" placeholder="Max" 
                        value={newValue} onChange={(e) => setNewValue(e.target.value)}
                    />

                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


