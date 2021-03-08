import React, { FunctionComponent } from "react";
import "./DummyComponent.css";

interface DummyProps {
    text?: string;
    action?: () => void;
}

const DummyComponent: FunctionComponent<DummyProps> = ({ children }) => {
    return <button id="dummy">{children}</button>;
};

export default DummyComponent;
