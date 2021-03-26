import React from 'react';
import { Button } from '@material-ui/core';
import { statusStyle } from '../../styles/styles';

export function GreenStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return (
    <Button disabled classes={{ disabled: styles.green }}>
      {children}
    </Button>
  );
}

export function RedStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return (
    <Button disabled classes={{ disabled: styles.red }}>
      {children}
    </Button>
  );
}

export function GreyStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return (
    <Button
      disabled
      classes={{
        disabled: styles.grey,
      }}
    >
      {children}
    </Button>
  );
}

export function DisabledStatus(props) {
  const styles = statusStyle();
  const { children } = props;
  return (
    <Button
      disabled
      classes={{
        disabled: styles.disabled,
      }}
    >
      {children}
    </Button>
  );
}
