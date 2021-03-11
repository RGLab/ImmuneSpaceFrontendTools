import React from "react";
import { Loader, LoaderProps } from "./Loader";
import { Story, Meta } from "@storybook/react";

export default {
    title: "Loader",
    component: Loader,
} as Meta;

const LoaderTemplate: Story<LoaderProps> = (args) => <Loader {...args} />;

export const MainLoader = LoaderTemplate.bind({});
MainLoader.args = {
    id: "123",
};
