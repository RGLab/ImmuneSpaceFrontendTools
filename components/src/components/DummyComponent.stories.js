import React from "react";
import DummyComponent, { Button } from "./DummyComponent";
import { action } from "@storybook/addon-actions";

export default {
    title: "DummyComponent",
    component: DummyComponent,
};

const Template = (args) => <DummyComponent {...args} />;

export const DummyPrime = Template.bind({});
DummyPrime.args = {
    action: () => console.log("hi"),
    disabled: false,
    children: "wassup",
};

export const Dummy = () => <DummyComponent action={() => console.log("hi")}>Hello World</DummyComponent>;
