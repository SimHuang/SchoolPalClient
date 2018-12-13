import React from 'react';
import styles from '../../../style/HOC/signInWrapper.css';

export function signInWrapper(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className={styles.wrapperContainer}>
          <WrappedComponent history={this.props.history}/>
        </div>
      );
    }
  }
}