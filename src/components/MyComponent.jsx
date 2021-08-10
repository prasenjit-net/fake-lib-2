import PropTypes from "prop-types";
export const MyComponent = ({ name = "World", textColor, backgroundColor }) => {
  return (
    <div style={{ color: textColor, backgroundColor: backgroundColor }}>
      Hello {name}!
    </div>
  );
};

MyComponent.prototype = {
  name: PropTypes.string,
  textColor: PropTypes.string,
};
