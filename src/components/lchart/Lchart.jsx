import { LineChart, Line, XAxis, YAxis,  } from "recharts";

const Lchart = () => {
  const MarksData = [
    { id: 1, name: "sakib", physics: 55, math: 89 },
    { id: 2, name: "saki", physics: 85, math: 89 },
    { id: 3, name: "sak", physics: 75, math: 85 },
    { id: 4, name: "sa", physics: 55, math: 68 },
    { id: 5, name: "sak", physics: 85, math: 79 },
    { id: 6, name: "sa", physics: 58, math: 39 },
    { id: 7, name: "sakib", physics: 85, math: 99 },
    { id: 8, name: "sak", physics: 52, math: 85 },
    { id: 9, name: "saki", physics: 58, math: 83 },
    { id: 10, name: "sa", physics: 75, math: 59 },
  ];
  return (
    <div>
          <LineChart width={500} height={400} data={MarksData}>
              <XAxis dataKey={'name'}></XAxis>
              <YAxis></YAxis>
              <Line dataKey="math" stroke="red"></Line>
              <Line dataKey={"physics"} stroke="yellow"></Line>
      </LineChart>
    </div>
  );
};

export default Lchart;
