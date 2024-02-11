import { useEffect, useState } from "react";

const useLocalStorage = (key) => {


    const[items,setItems]=useState('')
   

    useEffect(()=>{
        const getLocalVariables = () => {
            const getItem = window.localStorage.getItem(key);
            setItems(getItem)
            return getItem ? JSON.parse(getItem) : null;
          };
          getLocalVariables()
    },[items])

       
        
          const setLocalVariables = (value) => {
          const setItem=window.localStorage.setItem(key, JSON.stringify(value));
          setItems(setItem);
          return
          };
          
 

 
    return [items, setLocalVariables];

};

export default useLocalStorage;
