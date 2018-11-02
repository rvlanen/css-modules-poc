import React from 'react';
import cx from 'classnames';
import styles from './child.module.scss';

export const Child = ({ className }) => (
    <div className={cx(styles.base, className)}>
        <p className={styles.paragraph}>Child</p>
    </div>
);
