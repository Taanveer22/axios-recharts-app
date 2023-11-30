import PropTypes from "prop-types";
import Feature from "../feature/feature";

const Priceoption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-700 text-white rounded-md p-4 text-center flex flex-col">
      <h2>
        <span className="text-6xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl my-4">{name}</h4>

      <div className="ml-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
          </div>
          <button className="mt-8 bg-green-700 w-full py-3 font-bold rounded-lg">buy now</button>
    </div>
  );
};

{
  Priceoption.propTypes = {
    option: PropTypes.object,
  };
}

export default Priceoption;
