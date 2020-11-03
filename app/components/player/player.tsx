import * as React from 'react';
import {createRef} from 'react';
import {PlayIcon, PauseIcon} from '../icons.js';
import * as styles from './player.css';

interface Props {
  src: string;
  onPlayButtonClick: () => void;
  isPlaying: boolean;
}

interface State {
  duration: number;
  progress: number;
}

class AudioPlayer extends React.PureComponent<Props, State> {
  static playerComponentWrapper: string;
  static trackButton: string;
  static trackButtonPause: string;
  static trackButtonPlay: string;
  constructor(props: Readonly<Props>) {
    super(props);
    
    this.state = {
      duration: 0,
      progress: 0,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  private _audioRef = createRef<HTMLAudioElement>()
  
  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
  }

  componentDidMount() {
    const audio = this._audioRef.current;
    
    if(audio){
      audio.src = this.props.src;

      audio.onloadedmetadata = () => this.setState({
        duration: Math.round(audio.duration),
      })

      audio.ontimeupdate = () => this.setState({
        progress: audio.currentTime
      });

      audio.onended = () => this.props.onPlayButtonClick();
    }
  }

  componentDidUpdate(prevProps: {src: string}) {

    const audio = this._audioRef.current;

    if(audio){
      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      if(prevProps.src !== this.props.src){

        audio.src = this.props.src;
        const {isPlaying} = this.props
        if (isPlaying === true){
          this._onPlayButtonClick()
        }
      }
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;

    if(audio){
      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
    }
  }

  render() {
    const {
      duration,
      progress
    } = this.state;

    const {isPlaying} = this.props;

    let progressInPercent = (progress / duration) * 100;
   
    const transformTime = (time: number) => {
      let minutes: number | string = Math.floor(time / 60);
      let seconds: number | string =  Math.floor(time % 60);

      if (minutes < 10) {
        minutes = '0' + minutes;
      };

      if (seconds < 10) {
        seconds = `0` + seconds;
      };

      return minutes + `:` + seconds
    }
    
    let acumTime = transformTime(progress);
    let residueTime = transformTime(duration - progress);

    const onVolumeChange = (event: React.FormEvent<HTMLInputElement>) : void => {
      const audio = this._audioRef.current;
      if(audio) {
        audio.volume = +(event.currentTarget.value);
      }
    }

    return (
      <div className={styles.playerComponentWrapper}>
          <div
            className={isPlaying ?
               `${styles.trackButton} ${styles.trackButtonPause}` :
               `${styles.trackButton} ${styles.trackButtonPlay}`
              }
            data-type="button"
            onClick={this._onPlayButtonClick}
          > 
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>

          <div className={styles.trackStatusBlock}>
            <div className={styles.trackStatus}>
              <div
                className={styles.trackStatusProgress}
                style={{width: progressInPercent + `%`}}
              >  
              </div>
              <div 
                className={styles.trackStatusMarker}
                style={{left: progressInPercent + `%`}}
              ></div>
              <audio
                ref={this._audioRef}
              />
            </div>
            <div className={styles.timeIndicators}>
              <span className={styles.timeIndicatorsStart}>{acumTime}</span>
              <span className={styles.timeIndicatorsFinish}>{residueTime}</span>
            </div>

            <div className={styles.volumeBlock}>
              <div className={styles.volumeStatus}>
                <input 
                  className={styles.rangeType}
                  type="range"
                  name="volume"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={onVolumeChange}
                />
              </div>
            </div>
          </div>
      </div>  
    );
  }
}

export default AudioPlayer;