import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <AiOutlineCheck className="mr-2"></AiOutlineCheck>
        {feature}
      </p>
    </div>
  );
};

{
  Feature.propTypes = {
    feature: PropTypes.string,
  };
}

export default Feature;
