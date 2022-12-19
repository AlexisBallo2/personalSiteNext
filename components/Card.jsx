import "./card.Module.css";

//import images/portfolio";
export default function Card(props) {
  var skills = props.skills;
  //testing
  return (
    <a className="linkall" href={props.link} target="_blank" rel="noreferrer">
      <div className="cardMain">
        <div className="title">{props.descHead}</div>
        <img className="image" src={props.image}></img>
        <div className="description">
          <div className="Description">{props.description}</div>
          <div>
            <div className="skillsHead"> Skills used/learned: </div>
            {skills.map((title) => {
              return <div key={title}>{title}</div>;
            })}
          </div>
        </div>
      </div>
    </a>
  );
}
