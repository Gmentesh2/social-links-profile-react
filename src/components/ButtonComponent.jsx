/* eslint-disable react/prop-types */

const ButtonComponent = ({ text }) => {
  return (
    <section className="buttonSection">
      <button className="btn">{text}</button>
    </section>
  );
};

export default ButtonComponent;
