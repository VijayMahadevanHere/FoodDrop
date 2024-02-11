  export const filterData = (searchtxt, restaurants) => {
    const filterdData = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchtxt?.toLowerCase())
    );
    return filterdData;
  };

