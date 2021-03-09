import React, { FunctionComponent } from "react";
import "./DummyComponent.css";

interface DummyProps {
    action?: () => void;
    disabled?: boolean;
}

const DummyComponent: FunctionComponent<DummyProps> = ({ children, action, ...rest }) => {
    return (
        <button id="dummy" onClick={action} {...rest}>
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
