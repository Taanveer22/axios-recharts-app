import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-yellow-700 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  // You can declare that a prop is a specific JS primitive
  route: PropTypes.object,
};

export default Link;
