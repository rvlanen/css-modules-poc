import React from 'react';
import styles from './parent.module.scss';
import Loadable from 'react-loadable';

const Child = Loadable({
    loader: () => import('../elements/child'),
    render(loaded, props) {
        let Component = loaded.Child;
        return <Component {...props} />;
    },
    loading() {
        return <div>Loading...</div>;
    },
});

export const Parent = ({ showChild }) => (
    <div className={styles.base}>
        Parent
        {showChild && <Child className={styles.child} />}
    </div>
);
