import { useState ,useEffect} from "react"

 const  useRestaurent=(id)=>{
    const[restaurant,setRestaurant]=useState(null)
    const[restaurantMenu,setRestaurantMenu]=useState(null)

    useEffect(() => {
        getRestaurentMenu();
      }, []);
     
      const getRestaurentMenu = async () => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.927532&lng=76.2638427&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const resdata = await data.json();
       
        setRestaurantMenu(resdata.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        setRestaurant(resdata?.data?.cards[0]?.card?.card?.info);
      };

      return [restaurant,restaurantMenu]

}

export default useRestaurent