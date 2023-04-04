import "../Main/main.css";
import "../../assets/cermak-student.png"

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="head-text">{props.heading}</div>
      </div>
      <div className="description">
        <div className="sub-heading">{props.subheading}</div>
        <div className="decs-text"><p>{props.description}</p></div>
      </div>
    </div>
  );
};

export default MainBody;
