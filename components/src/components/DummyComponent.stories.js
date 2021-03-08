import React from "react";
import DummyComponent from "./DummyComponent";
import { action } from "@storybook/addon-actions";

export default {
    title: "DummyComponent",
    component: DummyComponent,
};

export const Btn = () => <DummyComponent onClick={action("clicked")}>Hello World</DummyComponent>;
