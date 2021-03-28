const Title = ({ level, ...props }) => {
  const Component = `h${level}`;

  return <Component {...props} />;
};

Title.defaultProps = {
  level: 1,
};

export default Title;
