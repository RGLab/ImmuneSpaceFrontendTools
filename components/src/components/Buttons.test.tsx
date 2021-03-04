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
            .create(
                <buttons.HighlightedButton
                    label="Click me!"
                    action={jest.fn()}
                    id={"this-id"}
                ></buttons.HighlightedButton>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("change text", () => {
        const button = mount(
            <buttons.HighlightedButton action={jest.fn()} label={"Before"}>
                {"Before"}
            </buttons.HighlightedButton>,
        );
        expect(button.text()).toEqual("Beforsdfsdfe");

        // Yeah this isn't really testing the button correctly so it's commented out
        // button.setProps({ label: "After" });
        // expect(button.text()).toEqual("After");
    });
    test("id", () => {
        const button = mount(
            <buttons.HighlightedButton action={jest.fn()} label={"Button"} id={"test-button"}>
                {"Button"}
            </buttons.HighlightedButton>,
        );
        expect(button.find("#test-button").hostNodes().text()).toEqual("Button");
    });
    test("click", () => {
        const onClick = jest.fn();
        const button = mount(<buttons.HighlightedButton action={onClick} label={"Apply"} />);
        expect(onClick.mock.calls.length).toBe(0);
        button.simulate("click");
        expect(onClick.mock.calls.length).toBe(1);
    });
    test("href", () => {
        const button = mount(
            <buttons.HighlightedButton href={"go-to-site"} label={"Apply"}>
                {"Apply"}
            </buttons.HighlightedButton>,
        );
        expect(button.find('a[href="go-to-site"]').text()).toEqual("Apply");
    });
});
