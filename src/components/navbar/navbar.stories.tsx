import * as faker from "faker";
import { ComponentMeta, Story } from "@storybook/react";
import { Navbar, NavbarProps } from "./navbar.component";

export default { component: Navbar } as ComponentMeta<typeof Navbar>;

const Template: Story<NavbarProps> = (args: NavbarProps) => (
  <Navbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: faker.datatype.number(),
    attributes: {
      links: Array.from(new Array(5), () => ({
        id: faker.datatype.number(),
        text: faker.lorem.word(),
        href: faker.internet.url(),
      })),
    },
  },
};
