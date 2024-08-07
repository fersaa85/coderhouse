import React, { useEffect } from "react";
import Card from "@/app/components/navigation/card";



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
      <Card></Card>
    </>
  );
};

export default About;