import { ChevronRight } from 'lucide-react';
import { Button } from '../src/Button';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    }
  },
  args: {
    isDisabled: false,
    children: 'Button',
    size: 'default',
  }
};

export const Default = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Icon = {
  args: {
    variant: 'outline',
    children: <ChevronRight className="h-4 w-4" />
  }
}