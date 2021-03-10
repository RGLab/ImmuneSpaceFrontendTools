import React, { FunctionComponent } from "react";
import "./DummyComponent.css";

export interface DummyProps {
    onClick?: () => void;
    disabled?: boolean;
}

const DummyComponent: FunctionComponent<DummyProps> = ({ children, ...rest }) => {
    return (
        <button id="dummy" {...rest}>
            {children}
        </button>
    );
};

export const Button = ({ children, ...rest }) => {
    return (
        <button id="button" {...rest}>
            {children}
        </button>
    );
};

export default DummyComponent;
