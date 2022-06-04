import React from "react";
import ReactDOM from 'react-dom/client';

export default function HelloReact() {
    return (
      <h1>Hello fucking React!</h1>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.createRoot(document.getElementById('hello-react')).render(<HelloReact />);
}
