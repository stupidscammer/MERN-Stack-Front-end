
import { BottomX } from '../leftX/bottomX/BottomX';
import { TopX } from '../leftX/topX';
import React, {useState, useEffect} from 'react';
// import { useSelector } from 'react-redux';
export function LeftX() {
  const [flagaa, setFlagaa] = useState(false);
  const [dishdata, setDishdata] = useState();
  const [rName, setRName] = useState('');
  const [list, setList] = useState([]);
  // const [namelist, setNamelist] = useState([]);
  
  useEffect(() => {
    let requestUrl = `https://api.spoonacular.com/recipes/complexSearch`;
    fetch(requestUrl, { headers: { 'x-api-key': '89b04a7d09d0431a961aed3ef2cc6c1b', 'Access-Control-Allow-Origin': "http://localhost:3000" } })
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result)
                setList(result.results);
            },
            (error) => {
                console.log(error);
            }
        )
    // let options = {
    //   method: 'GET',
    //   headers: {
    //       'Content-Type': 
    //           'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(rName)
    // }
    // let fetchRes = fetch(
    //   "http://localhost:8000/query",options);
    //           fetchRes.then(res =>
    //               res.json()).then(d => {
    //                   console.log(d)
    //               })
  }, [])
// useEffect(()=>{

// }, [])
  const handleSearchKey = (e) => {
    setRName(e);
    handleSearch(e);
  }
  const handleSearch = (e) => {
    // onClick={(e)=> updatelist(showData.filter(data => data !== sdata))}
    //  let listqwe = list.filter(person => person.title.include(rName) ).map(filteredPerson => filteredPerson);
    list.map((sdata,index)=>sdata.includes(rName))    //  setList(list.includes(rName));
   console.log('filterList==>', list);
  }
  // console.log('flagaa====', rName);
  return (    
    <div>
      <TopX flagaa = {flagaa} setFlagaa = {setFlagaa} handleSearchKey={handleSearchKey} rNameValue={rName}/>      
      <BottomX flagaa = {flagaa} setFlagaa = {setFlagaa} setDishdata={setDishdata} dishdata={dishdata} list={list}/>           
    </div>
  );
}
