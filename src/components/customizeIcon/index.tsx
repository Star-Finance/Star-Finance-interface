import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3314061_ugzbpsgmjp.js',
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
