const Text = ({ tag: Component, ...props }) => <Component {...props} />;

Text.defaultProps = {
  tag: "p",
  size: "m",
  isWhite: false,
};

export default Text;
