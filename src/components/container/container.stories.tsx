import { ComponentMeta, Story } from "@storybook/react";
import { Container, ContainerProps } from "./container.component";

export default { component: Container } as ComponentMeta<typeof Container>;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>
    <div style={{ background: "red", height: 30 }} />
  </Container>
);

export const Default = Template.bind({});
Default.args = { size: "lg" };
