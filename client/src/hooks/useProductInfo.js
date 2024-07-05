import { useEffect, useState } from "react";

function useProductInfo(){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/products/allProducts')
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
    console.log(data);
    return data;
}

export default useProductInfo;

// import { useEffect, useState } from "react";

// function useProductInfo() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/products/allProducts');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const result = await response.json();
//                 setData(result);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     return { data, loading, error };
// }

// export default useProductInfo;
