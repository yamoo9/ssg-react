import React from 'react';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      {/* <header>앱 헤더</header> */}
      <main>{children}</main>
      {/* <footer>앱 푸터</footer> */}
    </React.Fragment>
  );
}
