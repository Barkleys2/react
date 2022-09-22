import randColor from "../../Functions/randColor";

function Star({ color }) {
  return (
    <h1
      style={{
        fontSize: 150,
        color: randColor(),
      }}
    >*</h1>
  );
}

export default Star;
