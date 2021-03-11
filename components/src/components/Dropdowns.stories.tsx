import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import {
    ButtonData,
    DropdownButtonProps,
    DropdownContentProps,
    OuterDropdownButtonProps,
    SimpleDropdown,
} from "./Dropdowns";

export default {
    title: "Dropdowns",
    component: SimpleDropdown,
} as Meta;

const SimpleTemplate: Story<DropdownButtonProps> = (args) => <SimpleDropdown {...args} />;
export const Primary = SimpleTemplate.bind({});

const btnData: ButtonData = {
    label: "data",
    icon: <div>Hello</div>,
    action: () => {},
    disabled: false,
    href: "#",
};

Primary.args = {
    title: "Drop Down",
    buttonData: [btnData, btnData],
    disabled: false,
    id: "12345",
};
