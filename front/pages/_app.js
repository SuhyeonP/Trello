import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Global } from '@emotion/react';
import wrapper from '../store/configureStore';
import { CommonCss } from '../css/cssglobal';

const trelloApp = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>trelloApp</title>
    </Head>
    <Global styles={CommonCss} />
    <Component />
  </>
);

trelloApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(trelloApp);
