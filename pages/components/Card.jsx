import styles from  "./card.module.css";
import Image from 'next/image'

//import images/portfolio";
export default function Card(props) {
  var skills = props.skills;
  //testing
  return (
    <a className={styles.linkAll} href={props.link} target="_blank" rel="noreferrer">
      <div className={styles.cardMain}>
        <div className={styles.title}>{props.descHead}</div>
        <Image className={styles.image} src={props.image} />
        <div className={styles.description}>
          <div className={styles.Description}>{props.description}</div>
          <div>
            <div className={styles.skillsHead}> Skills used/learned: </div>
            {skills.map((title) => {
              return <div key={title}>{title}</div>;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
