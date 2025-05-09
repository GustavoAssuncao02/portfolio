import "./Title.css";

export const Title = ({ data }) => {
  return (
    <div className="section-title">
      <span className="line-section"></span>
      <h2>{data}</h2>
    </div>
  );
};
