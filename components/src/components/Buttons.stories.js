import * as React from "react";
import { HighlightedButton } from "./Buttons";
import { withKnobs, text } from "@storybook/addon-knobs";

// export default {
//     title: "Highlighted Button",
//     argTypes: { action: { action: "click" } },
//     decorators: [withKnobs],
// };

// export const highlighted_button = () => {
//     const content = text("Text", "This is a button");
//     return <HighlightedButton>{content}</HighlightedButton>;
// };

// export const highlighted_working_button = () => {
//     const content = text("Text", "Go to Google");
//     const actionFunc = () => {
//         console.log("yay!");
//     };
//     const href = "https://www.google.com/";
//     return (
//         <HighlightedButton id={"google_btn"} action={actionFunc}>
//             {content}
//         </HighlightedButton>
//     );
// };

export default {
    title: "Highlighted Button",
    decorators: [withKnobs],
};

const Template = (args) => <HighlightedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    action: () => console.log("yeet"),
};
