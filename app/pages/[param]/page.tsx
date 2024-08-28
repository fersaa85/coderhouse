import React, { useEffect } from "react";
import Card from "@/app/components/card";
//import { useParams } from 'next/navigation'

async function getData(category: string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=1&${category}`,
    { 
      method: 'GET'
    }
  );
  return response.json();
}

const Category =  async ( { params : { category }  } : any) => {
  const get : any = await getData(category);
console.log('get', get);
  //const queryparams = useParams()
  //console.log(queryparams);
  //console.log('params', params);
 console.log('params.category', category);
 // useEffect();

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        
              <h1> About us</h1>

              <div className="grid grid-cols-4 gap-4">
                user client            

              </div>
            
              
      </div>
    </>
  );
};

export default Category;