import React from 'react';
import { Child } from '../elements/child';
import styles from './parent.module.scss';

export const Parent = () => (
    <div className={styles.base}>
        Parent
        <Child className={styles.child} />
    </div>
);
