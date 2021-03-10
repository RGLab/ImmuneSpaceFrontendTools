import React from "react";
import DummyComponent, { DummyProps } from "./DummyComponent";
import { action } from "@storybook/addon-actions";

export default {
    title: "DummyComponent",
    component: DummyComponent,
    parameters: { actions: { argTypesRegex: "^on.*" } },
};

const Template = (args: DummyProps) => <DummyComponent {...args} />;

export const DummyPrime = Template.bind({});
DummyPrime.args = {
    disabled: false,
    children: "wassup",
};

export const DummySecond = Template.bind({});
DummySecond.args = {
    children: "Hello World",
};
//export const Dummy = () => <DummyComponent action={() => console.log("hi")}>Hello World</DummyComponent>;