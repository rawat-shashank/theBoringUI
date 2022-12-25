import cx from 'clsx';
import { createElement } from 'react';
import styles from './styles.css';

const Text = ({ children, className, as = 'p', variant, ...rest }) => {
  const textVariant = styles[variant] || 'Body';
  console.log(textVariant);
  const classes = cx(
    styles.Text,
    {
      [textVariant]: variant,
    },
    className
  );
  return createElement(
    as,
    {
      ...rest,
      className: classes,
    },
    children
  );
};

export { Text };