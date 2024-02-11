import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import store from '../../store/store'
import {StaticRouter} from 'react-router-dom/server'
test("online status should be green on rendering header",()=>{
  const header = render(
    <StaticRouter>
  <Provider store={store}>
    <Header/>
  </Provider>
  </StaticRouter>

  )

  const onlineStatus=header.getByTestId("online-status")
   
   expect(onlineStatus.innerHTML).toBe("💗")
})

test("cart item should be 0 on rendering header",()=>{
  const header = render(
    <StaticRouter>
  <Provider store={store}>
    <Header/>
  </Provider>
  </StaticRouter>

  )

  const cart=header.getByTestId("cart")
   
   expect(cart.innerHTML).toBe("Cart-0")
})