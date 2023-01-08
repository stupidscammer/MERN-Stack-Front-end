import React, {useState, useEffect}from 'react';
export function Dishes(props) {
    const {sdata} = props;
    const [ingredients, setIngredients] = useState([]);
    const [heart, setHeart] = useState(false);
    useEffect(() => {
        let requestUrl = `http://localhost:8000/search/recipes/${sdata.id}/ingredientWidget.json`;
        fetch(requestUrl, { headers: { 'x-api-key': '89b04a7d09d0431a961aed3ef2cc6c1b', 'Access-Control-Allow-Origin': "http://localhost:3000" } })
            .then(res => res.json())
            .then(
                (result) => {
                  console.log('ddddddddddddddd',result.ingredients)
                  setIngredients(result.ingredients);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [sdata])
    function favorite(params) {
        if (heart) {
            setHeart(false);
        }
        else
            setHeart(true);
    }
    console.log('dsfsadfdf', ingredients)
    return (
        
        <div className='w-4/5 h-auto '>
            
                <figure className=" items-stretch mt-10 bg-white rounded-2xl flex flex-row ">
                    <img className=" self-center w-2/5 h-auto rounded-2xl" src={sdata.image} alt="dish"/>
                    <div className='w-3/5 flex flex-row'>
                        <div className='w-full overflow-scroll'>
                            <p className="text-4xl mt-6 ml-5">{sdata.title}</p>
                            <div className=' overflow-scroll '>
                            {(ingredients.length > 0) && (ingredients.map((data1, index) =>                            
                                    <div className='flex flex-row w-full mt-5' key={`show_data_${index}`}>
                                        <li className='text-lg text-[#353535] ml-10  w-4/5 '>{data1.name}</li>
                                    </div>                            
                            ))}
                            </div>
                        </div>
                        {!heart && (
                            <div className='w-1/6 mr-5 mt-5'>
                                <img src='../../../../img/unheart.png' className='w-auto h-auto rounded-2xl cursor-pointer' alt='heart' onClick={favorite} />
                            </div>
                        )}
                        {heart && (
                            <div className='w-1/6 mr-5 mt-5'>
                                <img src='../../../../img/heart.png' className='w-auto h-auto rounded-2xl cursor-pointer' alt='heart' onClick={favorite} />
                            </div>
                        )}                  
                    </div>
                </figure> 
             
        </div>
    );
}


