import React from 'react';
import styles from './index.less';
import logoSrc from '@/assets/logo.svg'
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <h1 className={styles.title}>Page index</h1>
      <img src={logoSrc} alt="logo" />
    </div>
  );
}
