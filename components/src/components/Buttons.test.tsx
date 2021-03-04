import React from "react";
import * as renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";

import { configure, mount } from "enzyme";
import * as buttons from "./Buttons";

// https://stackoverflow.com/questions/50222545/enzyme-expects-an-adapter-to-be-configured
configure({ adapter: new Adapter() });

describe("<HighlightedButton />", () => {
    test("render with all props", () => {
        const tree = renderer
            .create(<buttons.HighlightedButton action={jest.fn()} id={"this-id"}></buttons.HighlightedButton>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("change text", () => {
        const button = mount(<buttons.HighlightedButton action={jest.fn()}>{"Before"}</buttons.HighlightedButton>);
        expect(button.text()).toEqual("Before");
    });
    test("id", () => {
        const button = mount(
            <buttons.HighlightedButton action={jest.fn()} id={"test-button"}>
                {"Button"}
            </buttons.HighlightedButton>,
        );
        expect(button.find("#test-button").hostNodes().text()).toEqual("Button");
    });
    test("click", () => {
        const onClick = jest.fn();
        const button = mount(<buttons.HighlightedButton action={onClick} />);
        expect(onClick.mock.calls.length).toBe(0);
        button.simulate("click");
        expect(onClick.mock.calls.length).toBe(1);
    });
    test("href", () => {
        const button = mount(<buttons.HighlightedButton href={"go-to-site"}>{"Apply"}</buttons.HighlightedButton>);
        expect(button.find('a[href="go-to-site"]').text()).toEqual("Apply");
    });
});
