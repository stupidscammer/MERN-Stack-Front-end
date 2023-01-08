import React , { useState } from 'react';
export function Incgred(props) {  
    const {showData, updatelist} = props;   
    const [newValue,setNewValue] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    return (
        <div >        
            <div>
                <p className='text-white text-3xl'>Include ingredient</p>
                <div className='w-full flex flex-row mt-2'>
                    <input type="text" className="pl-2   w-4/5 h-1/5 border-2 rounded text-white text-2xl border-[#A1A1A1] bg-transparent float-left" 
                        value={newValue} onChange={(e) => setNewValue(e.target.value)}
                    />
                    <button className='w-1/5 h-auto bg-[#548D01] text-2xl text-white hover:bg-[#7CD900] hover:shadow-xl rounded'
                        onClick={(e) => {
                            if(newValue) {
                                let x=showData.indexOf(newValue)
                                if(x===-1){
                                    updatelist([...showData, newValue])
                                    setNewValue('')
                                }
                                else {
                                    setErrorMsg("already exists in array.");
                                    setTimeout(function() {
                                        setErrorMsg("");
                                        setNewValue("");
                                    }, 1000);
                                }
                            }
                            else {
                                setErrorMsg("You must enter a key.");
                                setTimeout(function() {
                                    setErrorMsg("");
                                }, 1000);
                            }
                        }}>+</button>      
                </div>{errorMsg && <h1 className='ml-12 text-red-500'>{errorMsg}</h1>}
                    <div className='overflow-auto max-h-40'>
                        {showData.map((sdata, index) =>     
                            <div className='mt-2' key={`show_data_${index}`}>  
                                <li className="w-4/5 h-1/5 text-white text-2xl  float-left">{sdata}</li>                    
                                <img className='w-1/5 h-1/5 text-center text-white ml-3 cursor-pointer' src="/img/cancel.png" alt="cancel" width="30" height="30"
                                    onClick={(e)=> updatelist(showData.filter(data => data !== sdata))}
                                />
                            </div>
                        )}
                    </div>
            </div>                   
        </div>  
    );
}

