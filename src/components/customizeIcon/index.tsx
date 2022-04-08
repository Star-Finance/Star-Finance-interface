import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3314061_0t49u5ous6tn.js',
});

interface IcustomizeIcon {
    type: string;
    style: object;
}

export default function index(props: IcustomizeIcon) {
  return (
    <IconFont {...props} />
  )
}
