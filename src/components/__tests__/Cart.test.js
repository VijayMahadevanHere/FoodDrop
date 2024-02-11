import { render ,fireEvent, waitFor} from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../store/store";
import { RESTAURANT_MENU } from "../../../mocks/dummyData";


global.fetch = jest.fn(() => {
    return Promise.resolve({
       json: () => {
        return Promise.resolve(RESTAURANT_MENU)},
 
     });
   });
 

test("Cart should be cleard on clicking the clear cart button", async() => {
  const cart = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
        <Header/>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

 
  await waitFor(()=>expect(cart.getByTestId('menu')))
  const addbtn=cart.getAllByTestId('addbtn')


  fireEvent.click(addbtn[0])
  await waitFor( ()=>expect(cart.getByTestId('cartList')))
const clearCartButton= cart.getByTestId('clear-btn')


fireEvent.click(clearCartButton)


const cartCount= cart.getByTestId('cart')

expect(cartCount.innerHTML).toBe('Cart-0')


});
