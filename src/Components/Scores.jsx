import "./GameBoard.css";

export const Scores = (props) => {
  const { score, topscore } = props;

  return (
    <div className="scores">
      current score:{score};
      <br />
      <br />
      top score: {topscore};
    </div>
  );
};
