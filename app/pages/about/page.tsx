import React, { useEffect } from "react";
import Card from "@/app/components/card";

async function getData() {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products`,
    { method: 'GET'}
  );
  
  return response.json();
}

const About = async ( { params  } : any) => {
  const get : any = await getData();

  //console.log(params);
  //console.log(get);

 // useEffect();

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        
              <h1> About us</h1>

              <div className="grid grid-cols-4 gap-4">
                {
                  get.map( (data) => (
                    <Card data={data}></Card>
                  ))
                }
              </div>
            
              
      </div>
    </>
  );
};

export default About;