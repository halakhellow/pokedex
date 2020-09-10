import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Pokecard from "./Pokecard";

test("pokecard should have a pokemon name", () => {
  let { queryByTestId } = render(
    <Pokecard id={3} name="Pikachu" type="electric" experience={112} />
  );
  expect(queryByTestId("title")).toBeTruthy();
});

test("should match snapshot ", () => {
  let tree = renderer
    .create(<Pokecard id={3} name="Pikachu" type="electric" experience={112} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
