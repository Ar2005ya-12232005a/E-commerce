import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState("relevant")

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(product=> product!== e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }

  }

  const toggleSubcategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(product=> product!== e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }

  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();

    if(category.length >0){
      productsCopy = productsCopy.filter(product => category.includes(product.category));
    }

    if(showSearch && search){
      productsCopy = productsCopy.filter((product=>product.name.toLowerCase().includes(search.toLowerCase())))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(product => subCategory.includes(product.subCategory));
    }


    setFilterProducts(productsCopy);
  }


  const sortProduct = ()=>{
    let fproducts = filterProducts.slice();
     switch(sortType){
      case "low-high":
        setFilterProducts(fproducts.sort((a,b)=> (a.price- b.price)))
        break;

      case "high-low":
        setFilterProducts(fproducts.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter()
        break;

     }

  }

  useEffect(()=>{
    sortProduct()

  },[sortType])
 
  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])



 

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}

      <div className=" min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center  cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6  ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange= {toggleCategory} /> Men
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange= {toggleCategory} /> Women
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange= {toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5  ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange= {toggleSubcategory} />{" "}
              Topwear
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange= {toggleSubcategory}/>{" "}
              Bottomwear
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange= {toggleSubcategory}/>{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className = "flex-1">
        <div className = "flex justify-between mb-4 text-base sm:text-2xl">
          <Title text1={"ALL"} text2= {"COLLECTIONS"}/>
          <select onChange={(e)=>setSortType(e.target.value)}className = "border-2 border-gray-300 rounded px-2 text-sm">
            <option  value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

          {/* Display Products */}
         <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {
          filterProducts.map((product, index)=>(
            <ProductItem key={index} name={product.name} id={product._id} image={product.image} price={product.price}/>
          ))
        }

      </div>
      </div>
    

     
    </div>
  );
};

export default Collection;
