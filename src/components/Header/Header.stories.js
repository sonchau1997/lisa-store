import { Header} from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
const Template = (args) => <Header {...args}>Button</Header>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const PrimaryButton = Template.bind({});
// PrimaryButton.args = {
//   bgColor: 'white',
//   textColor: 'purple',
//   boderColor: 'purple',
// }


// export const BlackButton = {
//   args: {
//     label: 'Button',
//     bgColor: 'black',
//     textColor: 'white'
//   },
// };

export const HeaderTest = {
  args: {
    label: 'header',
    text:'test'
   
  
  },
};



