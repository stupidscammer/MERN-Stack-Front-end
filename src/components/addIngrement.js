import React , { useState } from 'react';
export function AddIngrement(props) {  
    const {showData, updatelist} = props;   
    const [newValue,setNewValue] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    return (
        <div >        
            <div>
                {/* <p className='text-white text-3xl'>Omit ingredient</p> */}
                <div className="flex flex-row w-full mt-5 mb-5 ">
                    <input type="text" className="pl-2 ml-3.5 mr-4 h-12 border-2 w-full rounded text-black border-[#353535] bg-transparent text-2xl" placeholder={showData.addIn} 
                        value={newValue} onChange={(e) => setNewValue(e.target.value)}
                    />
                   <img className=" cursor-pointer ml-5  w-1/6 h-12 rounded-md" src='img/plus.png' alt="slist"
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
                        }}/>  
                </div>
                <div className='w-full flex flex-col'>{errorMsg && <h1 className='ml-12 text-red-500'>{errorMsg}</h1>}
                    {showData.map((sdata, index) =>     
                        <div className='flex flex-row w-full mt-5' key={`show_data_${index}`}>  
                        <li className='text-2xl text-[#353535] pl-5 w-full '>{sdata}</li>                    
                            <img className='w-1/5 h-auto pl-5 cursor-pointer' src="/img/cancel.png" alt="cancel" width="30" height="30"
                                 onClick={(e)=> updatelist(showData.filter(data => data !== sdata))}
                            />
                        </div>
                    )}
                </div>
            </div>                   
        </div>  
    );
}

