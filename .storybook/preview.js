import { withVuetifyTheme } from "./withVuetifyTheme.decorator";
import { app } from "@storybook/vue3";
import vuetify from "../src/plugins/vuetify";

app.use(vuetify);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    sort: "requiredFirst",
    // matchers: {
    //   color: /(background|color)$/i,
    //   date: /Date$/,
    // },
  },
  docs: {
    inlineStories: false,
  },
};

export const globalTypes = {
  theme: {
    name: "vuetify.theme.defaultTheme",
    description: "Global theme for components",
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withVuetifyTheme];
