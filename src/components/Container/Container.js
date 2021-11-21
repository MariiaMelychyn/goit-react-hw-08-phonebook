// import { CssBaseline } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';

export default function Container({ children }) {
  return (
    <div>
      {children}
      <CssBaseline />
    </div>
  );
}