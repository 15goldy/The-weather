import React, { useEffect, useState } from "react";
import "./css/style.css";

const Temperature = () => {
	const [city,setCity] = useState(null)
	const [search,setSearch]=useState("mumbai")

	useEffect(() => {

		const fetchApi=async()=>{
			const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=072a2c55e9c85a707b6ff20f9454ee0a`
			const response=await fetch(url);   
	   const resJson= await response.json();
		 console.log(resJson)
		 setCity(resJson.main)
		};


	fetchApi();
	}, [search])
	


	
const change=(event)=>{
	setSearch(event.target.value)

}

  return (
    <>

      <div className="inputData">
        <input type="search" className="inputFeild" onChange={change} />


{!city? (<p> no data found</p>) :(
	<div>
  <div className="info">
        <h2 className="location">
          <i className="fas fa-street-view"> {search}</i>
        </h2>
				{/* <p>{city.wind}</p> */}
				<h1 className="temp">
          {city.temp} &deg;c
				</h1>
				<h3 className="temmin_max">{city.temp_min}&deg;c | {city.temp_max}&deg;c </h3>
      </div>
   
	 <div className="wave-one"></div>
   <div className="wave-two"></div>
   <div className="wave-three"></div>
         
	</div>
)}
       
			</div>
    </>
  );
};

export default Temperature;
