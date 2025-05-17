import { Chart } from "react-google-charts";

export function DevelopersTimeline() {
  const columns = [
    { type: "string", id: "Developer" },
    { type: "string", id: "Task" },
    { type: "datetime", id: "Start" },
    { type: "datetime", id: "End" },
  ];

  const rows = [
    [
      "Ana",
      "Projekt A",
      new Date(2023, 4, 16, 9, 0),
      new Date(2023, 4, 16, 11, 0),
    ],
    [
      "Ana",
      "Sestanek",
      new Date(2023, 4, 16, 13, 0),
      new Date(2023, 4, 16, 14, 30),
    ],
    [
      "Marko",
      "Bug fixing",
      new Date(2023, 4, 16, 10, 0),
      new Date(2023, 4, 16, 12, 0),
    ],
    [
      "Petra",
      "Code review",
      new Date(2023, 4, 16, 11, 0),
      new Date(2023, 4, 16, 13, 0),
    ],
    [
      "Petra",
      "DevOps",
      new Date(2023, 4, 16, 14, 0),
      new Date(2023, 4, 16, 16, 0),
    ],
  ];

  const options = {
    timeline: {
      showRowLabels: true,
      groupByRowLabel: true,
    },
    avoidOverlappingGridLines: false,
  };

  return (
    <div>
      <h2>Project Timetable</h2>
      <Chart
        chartType='Timeline'
        data={[columns, ...rows]}
        options={options}
        width='100%'
        height='400px'
        loader={<div>Nalaganje grafa...</div>}
      />
    </div>
  );
}
