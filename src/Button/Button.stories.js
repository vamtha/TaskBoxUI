import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('with red', () => <Button bg="red">First Test</Button>)
  .add('with yellow', () => <Button bg="yellow">Second Test</Button>);
