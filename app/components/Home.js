// @flow
import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import routes from '../constants/routes';
import styles from './Home.css';
import QR from './QR';
import * as MessageActions from '../actions/message';

type Props = {
  message: string,
  setMessage: string => void
};

function Home(props: Props) {
  const { message, setMessage } = props;
  const inputElement = useRef(null);
  const onInput = () => {
    setMessage(inputElement.current.value);
  };
  return (
    <div className={styles.container} data-tid="container">
      <h2>Generate a QR code</h2>
      <QR message={message} />
      <input ref={inputElement} onInput={onInput}></input>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    message: state.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MessageActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
