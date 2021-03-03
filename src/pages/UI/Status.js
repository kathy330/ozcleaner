import React from 'react';
import { Button } from '@material-ui/core';
import { statusStyle } from '../../styles/styles';

export function GreenStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return <Button className={styles.green}>{children}</Button>;
}

export function RedStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return <Button className={styles.red}>{children}</Button>;
}

export function GreyStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return <Button className={styles.grey}>{children}</Button>;
}
