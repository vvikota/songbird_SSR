import * as React from 'react';
import styles from './App.css'
import Header from './header/header';
import MainScreen from './mainScreen/mainScreen';
import WinScreen from './win-screen/win-screen';

export default class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isGameOver: true,
    };
  }

  render() {
    const {isGameOver} = this.state;

    return (
      <div className={styles.wrapper}>
        <Header />

        {isGameOver ? (
          <WinScreen />
        ) : (
          <MainScreen />
        )}
      </div>
  
    );
  }
}