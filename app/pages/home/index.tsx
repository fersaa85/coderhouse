'use client';
export default function HomePage() {
    const callAPI = async () => {
		try {
			const res = await fetch(
				`https://api.escuelajs.co/api/v1/products`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};


    
  return (
    <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
            <h1> home</h1>
            <button onClick={callAPI}>Make API Call</button>
        </div>    
     </div>
  );
}