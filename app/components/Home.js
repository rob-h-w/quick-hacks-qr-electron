// @flow
import { remote } from 'electron';
const { dialog } = remote;
import { writeFileSync } from 'fs';
import React, { Component, useRef, useState } from 'react';
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
  const onSave = () => {
    const filePath = dialog.showSaveDialog({
      filters: [
        {
          name: 'Images',
          extensions: ['png']
        }
      ]
    });

    if (filePath) {
      writeFileSync(filePath, pngBuffer);
    }
  };

  const [pngBuffer, setPngBuffer] = useState(null);
  return (
    <div className={styles.container} data-tid="container">
      <div className={styles.top}>
        <h2 className={styles.content}>Generate a QR code</h2>
        <QR className={styles.content} message={message} onPng={setPngBuffer} />
      </div>
      <div className={styles.entry}>
        <textarea
          className={styles.content}
          ref={inputElement}
          onInput={onInput}
        ></textarea>
        <button
          className={styles.content}
          disabled={pngBuffer === null}
          onClick={onSave}
        >
          Save
        </button>
      </div>
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
