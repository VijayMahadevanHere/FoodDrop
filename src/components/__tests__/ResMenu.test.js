import { render ,waitFor,fireEvent} from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../store/store";
import { RESTAURANT_MENU } from "../../../mocks/dummyData";
import Header from "../Header";


global.fetch = jest.fn(() => {
   return Promise.resolve({
      json: () => {
       return Promise.resolve(RESTAURANT_MENU)},

    });
  });

test("Cart should update on click of the button", async() => {
   
    
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
        <Header/>
      </Provider>
    </StaticRouter>
  );

  
  await waitFor(()=>expect(menu.getByTestId('menu')))

  const addbtn=menu.getAllByTestId('addbtn')
  fireEvent.click(addbtn[0])
  const cartItem = menu.getByTestId('cart')
  expect(cartItem.innerHTML).toBe("Cart-1")

});


