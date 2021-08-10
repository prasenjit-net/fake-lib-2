import React from "react";
import { MyComponent } from "../components/MyComponent";

export default {
  title: "Components/My",
  component: MyComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  name: "Prasenjit",
  textColor: "blue",
};
