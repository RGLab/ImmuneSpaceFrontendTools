import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
const DEVICE_HEIGHT = "700px";

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

    vSmall: {
        name: "Very Small Devices, Small Phones",
        styles: {
            width: "320px",
            height: DEVICE_HEIGHT,
        },
    },

    small: {
        name: "Small Devices, Medium-Large Phones",
        styles: {
            width: "480px",
            height: DEVICE_HEIGHT,
        },
    },

    medium: {
        name: "Medium Devices, Tablets",
        styles: {
            width: "768px",
            height: DEVICE_HEIGHT,
        },
    },

    medLarge: {
        name: "Medium-Large Devices, Small Laptops & Large Tablets",
        styles: {
            width: "1024px",
            height: DEVICE_HEIGHT,
        },
    },

    large: {
        name: "Large Devices, Large Laptops & Normal Desktops",
        styles: {
            width: "1440px",
            height: DEVICE_HEIGHT,
        },
    },

    vLarge: {
        name: "Very Large Devices, Large Desktops",
        styles: {
            width: "2560px",
            height: DEVICE_HEIGHT,
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
    backgrounds: {
        default: "white",
        values: [
            {
                name: "white",
                value: "#FFFFFF",
            },
            {
                name: "twitter",
                value: "#00aced",
            },
            {
                name: "facebook",
                value: "#3b5998",
            },
        ],
    },
};
