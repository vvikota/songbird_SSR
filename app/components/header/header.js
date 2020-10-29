import * as React from "react";
import styles from './header.css';
import {connect} from "react-redux";
import {getCategories} from "../../../redux/selectors";
import {getCurrenCategory} from "../../../redux/selectors";
import {getScore} from "../../../redux/selectors";

// import logo from '../../assets/images/logo.png';

// interface HeaderProps {
//   categories: string[]
//   currenCategory: number
//   score: number
// }

const Header = (props) => {
  const {
    categories,
    currenCategory,
    score
  } = props;

  return (
    <header>
      <div className={styles.topHeader}>
        {/* <img src={logo} alt="logo"/> */}
        <span className={styles.pointCounter}>Score: {score}</span>
      </div>

      <div className={styles.categoryQuestions}>
        {categories.map((category, id) => (
          <span 
            className={currenCategory === id ? `${styles.categoryQuestionsItemActive} ${styles.categoryQuestionsItem}` : styles.categoryQuestionsItem}
            key={id}>
            {category}
          </span>
        ))}
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  currenCategory: getCurrenCategory(state),
  score: getScore(state),
});

export default connect(mapStateToProps)(Header);