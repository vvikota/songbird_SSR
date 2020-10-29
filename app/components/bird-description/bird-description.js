import * as React from "react";
import styles from "./bird-description.css";
import AudioPlayer from "../player/player";
import {connect} from "react-redux";
import {getActiveAnswerData, getIsStartLevel} from "../../../redux/selectors";

// import {CategoryQuestions} from "../../types";

// interface BirdDescriptionProps {
//   isStartLevel: boolean;
//   isPlaying: boolean;
//   onPlayButtonClick: () => void;
//   activeAnswerData: CategoryQuestions;
// }

const BirdDescription = (props) => {
  const {
    activeAnswerData,
    isStartLevel,
    isPlaying,
    onPlayButtonClick
  } = props;

  return (
    <section className={styles.birdDescription}>
      {
        isStartLevel ? (
          <p>Послушайте плеер. <br/> Выберите правильный ответ</p> 
        ) : (
          <div>
            <div className={styles.birdDescriptionTop}>
              <img
                src={activeAnswerData.image}
                alt="bird"
                className={styles.birdDescriptionImage}
              />  
              
              <div className={styles.birdDescriptionNameBlock}>
                <div className={styles.birdDescriptionTitleWrapper}>
                  <h3 className={styles.birdDescriptionTitle}>
                    {activeAnswerData.name}
                  </h3>
                </div>
                
                <div className={styles.birdDescriptionLatinWrapper}>
                  <span className={styles.birdDescriptionLatin}>
                    {activeAnswerData.species}
                  </span>
                </div>

                <div className={styles.birdDescriptionPlayer}>
                  { activeAnswerData.audio ? (
                    <AudioPlayer 
                      isPlaying = {isPlaying}
                      onPlayButtonClick = {onPlayButtonClick}
                      src = {activeAnswerData.audio}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.birdDescriptionText}>
              {activeAnswerData.description}
            </div> 
          </div>
        )   
      }
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    activeAnswerData: getActiveAnswerData(state),
    isStartLevel: getIsStartLevel(state),
  }
);

export default connect(mapStateToProps)(BirdDescription);