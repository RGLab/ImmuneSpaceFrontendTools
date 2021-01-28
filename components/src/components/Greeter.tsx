import * as React from 'react';

import "./Greeter.scss"

interface GreeterProps {
    name: string
}

const Greeter: React.FC<GreeterProps> = ({name}) => <h1>Hello {name}</h1>;

export default Greeter