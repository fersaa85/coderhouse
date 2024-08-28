import React from "react";
import Link from "next/link";

async function getData() {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/categories`,
      { 
        method: 'GET'
      }
    );
    return response.json();
  }


const Categories = async () => {
    const data : any = await getData();

    return (
      <> 
       <div className="container mx-auto px-4 h-full">

       </div>
      {
                  data.map( (category :  any) => (
                    <p><Link  href={`/pages/category/${category.id}`} >{category.name}</Link>  | </p>
                  

                  ))
                }
      </>
    )
};

export default Categories;