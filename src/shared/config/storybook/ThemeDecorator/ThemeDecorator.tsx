import { Theme } from "app/providers/ThemeProviders";
import React from "react";

export const ThemeDecorator = (theme: Theme) => (Story) => (
    <div className={`app ${theme}`}>
        <Story/>
    </div>
)