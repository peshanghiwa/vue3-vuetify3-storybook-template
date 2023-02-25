import MyButton from "./MyButton.vue";

export default {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    color: {
      control: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "error",
        ],
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MyButton v-bind="args" content="click me"/>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  color: "error",
  loading: true,
};
