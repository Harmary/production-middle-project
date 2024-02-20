import React from "react";
import { BrowserRouter } from "react-router-dom";

export const RouteDecorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)