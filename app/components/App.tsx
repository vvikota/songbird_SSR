import * as React from 'react';
// @ts-ignore
import Header from './header/header.tsx';
// @ts-ignore
import MainScreen from './main-screen/main-screen.tsx';
// @ts-ignore
import WinScreen from './win-screen/win-screen.tsx';

const styles = require('./App.css');

interface Props {}
interface State {
  isGameOver: boolean;
}

export default class App extends React.PureComponent<Props, State>{
  constructor(props: any) {
    super(props);

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