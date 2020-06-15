import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../src/scss/abstracts/_variables.scss');

// 완성전까지 타입스크립트 못쓰겠네 쩝
theme.name = "main";
const themes = [theme];

addDecorator(withThemesProvider(themes));
