import { useEffect, useState } from "react";
import Allproducts from "./components/Allproducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import useProductInfo from "./hooks/useProductInfo"
function App() {
  const products=useProductInfo();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
    const renderPage = () => {
      switch (currentPath) {
          case '/':
              return <Home />;
          case '/Product/:id':
              return <Product />;
          case '/Product/allProducts':
              return <Allproducts />;
          default:
              return <Home />;
      }
  };
  return (
    <>
    <Header/>
    {renderPage()}
    <Footer/>
    </>
  )
}

export default App
 