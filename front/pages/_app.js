import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore';

const trelloApp = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>trelloApp</title>
    </Head>
    <Component />
  </>
);

trelloApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(trelloApp);
