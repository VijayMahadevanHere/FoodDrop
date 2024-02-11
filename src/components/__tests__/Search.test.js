import "@testing-library/jest-dom";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURENT_LIST } from "../../../mocks/dummyData";

test("shimmer load on home page", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(RESTAURENT_LIST),
    });
  });

  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);
});

test("Restaurant should load on home page", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(RESTAURENT_LIST),
    });
  });

  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const resList = body.getByTestId("resList");
  expect(resList.children.length).toBe(9);
});

test("sreach string(food) should render restaurants names including food on the home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("input");

  fireEvent.change(input, {
    target: {  
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);
  const resList = body.getByTestId("resList");
  expect(resList.children.length).toBe(1);
});
