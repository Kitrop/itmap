import {FC} from "react";
import {useParams} from "react-router-dom";
import styles from '../styles/Main.module.css'
const AboutPage  = () => {
  const {name} = useParams()
  return (
    <div>
      <h2 className={styles.text}>Эта страница {name} </h2>
    </div>
  );
};




export default AboutPage;
