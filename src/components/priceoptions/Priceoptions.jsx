import Priceoption from "../priceoption/Priceoption";

const Priceoptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Extended gym hours",
        "Group fitness classes",
        "Access to locker room",
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service",
      ],
      price: 80.0,
    },
  ];

  return (
    <div className="m-8">
      <h2 className="text-5xl mb-8">best prices in the town</h2>

      <div className="grid md:grid-cols-3 gap-3">
        {priceOptions.map((option) => (
          <Priceoption key={option.id} option={option}></Priceoption>
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
