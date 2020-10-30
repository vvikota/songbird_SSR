import * as React from 'react';
import styles from './App.css'
import Header from './header/header';
import MainScreen from './main-screen/main-screen';
import WinScreen from './win-screen/win-screen';

export default class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isGameOver: false,
    };
  }

  render() {
    const {isGameOver} = this.state;

    return (
      <div className={styles.container}>
        <Header />

        {isGameOver ? (
          <WinScreen onNextGameClick={() => this.setState({isGameOver: false})}/>
        ) : (
          <MainScreen onGameOverClick={() => this.setState({isGameOver: true})}/>
        )}
      </div>
  
    );
  }
}