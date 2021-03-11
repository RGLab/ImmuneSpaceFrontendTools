import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import {
    ButtonData,
    DropdownButtonProps,
    OuterDropdownButton,
    OuterDropdownButtonProps,
    SimpleDropdown,
    DropdownContent,
    DropdownButtons,
    InnerDropdownButtons,
} from "./Dropdowns";

export default {
    title: "Dropdowns",
    component: SimpleDropdown,
} as Meta;

// mock data used to populate dropdown options
const btnData: ButtonData = {
    label: "Button Option",
    icon: <div className="btn">Icon</div>,
    action: () => {},
    disabled: false,
    href: "#",
};

// This button actually doesn't dropdown due to css ....?
const SimpleDropdownTemplate: Story<DropdownButtonProps> = (args) => <SimpleDropdown {...args} />;
export const SimpleDropdownBasic = SimpleDropdownTemplate.bind({});
SimpleDropdownBasic.args = {
    title: "Drop Down",
    buttonData: [btnData, btnData],
    disabled: false,
    id: "12345",
};

// The OuterDropdownButton and DropdownButtons seems to be the same thing?
const OuterDropdownTemplate: Story<OuterDropdownButtonProps> = (args) => <OuterDropdownButton {...args} />;
export const OuterDropdownBasic = OuterDropdownTemplate.bind({});
OuterDropdownBasic.args = {
    disabled: false,
    title: "Dropdown",
    id: "12345",
    children: <DropdownContent buttonData={[btnData]} />,
};

const DropdownButtonsTemplate: Story<DropdownButtonProps> = (args) => <DropdownButtons {...args} />;
export const DropdownButtonsBasic = DropdownButtonsTemplate.bind({});
DropdownButtonsBasic.args = {
    title: "Dropdown",
    buttonData: [btnData],
    disabled: false,
    id: "11111",
};

const InnerDropdownTemplate: Story<DropdownButtonProps> = (args) => <InnerDropdownButtons {...args} />;
export const InnerDropdownBasic = InnerDropdownTemplate.bind({});
InnerDropdownBasic.args = {
    ...DropdownButtonsBasic.args,
};
