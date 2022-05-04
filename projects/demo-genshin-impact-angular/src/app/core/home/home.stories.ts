import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

export default {
  title: 'mrlonis/HomeComponent',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [HomeModule, RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
