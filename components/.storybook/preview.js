import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
    kindleFire2: {
        name: "Kindle Fire 2",
        styles: {
            width: "600px",
            height: "963px",
        },
    },
    kindleFireHD: {
        name: "Kindle Fire HD",
        styles: {
            width: "533px",
            height: "801px",
        },
    },

    bigScreen: {
        name: "Very Large Devices",
        styles: {
            width: "2560px",
            height: "1440px",
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
};
