import * as React from "react";
import {connect} from "react-redux";
import {stateInterface} from "../../../types";
import {getCategories, getCurrenCategory, getScore} from "../../../redux/selectors.js";
import * as styles from './header.css';

const logoURL = "https://vvikota-songbird.netlify.app/static/media/logo.da8f049a.png";

interface HeaderProps {
  categories: string[]
  currenCategory: number
  score: number
}

const Header = (props: HeaderProps) => {
  const {
    categories,
    currenCategory,
    score
  } = props;

  return (
    <header>
      <div className={styles.topHeader}>
        <img src={logoURL} alt="logo"/>
        <span className={styles.pointCounter}>Score: {score}</span>
      </div>

      <div className={styles.categoryQuestions}>
        {categories.map((category, id) => (
          <span 
            className={
              currenCategory === id ?
               `${styles.categoryQuestionsItemActive} ${styles.categoryQuestionsItem}` :
                styles.categoryQuestionsItem}
            key={id}>
            {category}
          </span>
        ))}
      </div>
    </header>
  )
}

const mapStateToProps = (state: stateInterface) => ({
  categories: getCategories(state),
  currenCategory: getCurrenCategory(state),
  score: getScore(state),
});

export default connect(mapStateToProps)(Header);