export const MyComponent = ({ name = "World", textColor, backgroundColor }) => {
  return (
    <div style={{ color: textColor, backgroundColor: backgroundColor }}>
      Hello {name}!
    </div>
  );
};
