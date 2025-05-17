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

  const start = new Date(2023, 4, 16, 9, 0);
  const end = new Date(2023, 4, 16, 17, 0);

  const generateHourlyTicks = (start: Date, end: Date) => {
    const ticks: Date[] = [];
    let current = new Date(start);
    while (current <= end) {
      ticks.push(new Date(current));
      current.setHours(current.getHours() + 1);
    }
    return ticks;
  };

  const options = {
    timeline: {
      showRowLabels: true,
      groupByRowLabel: true,
      rowLabelStyle: { color: "#F9FAFB", fontSize: 14 },
      barLabelStyle: { color: "#F9FAFB", fontSize: 12 },
    },
    hAxis: {
      ticks: generateHourlyTicks(start, end),
      textStyle: { color: "#F9FAFB", fontSize: 12 },
      gridlines: { color: "#F9FAFB" },
    },
    backgroundColor: "#111827",
  };

  return (
    <div className='max-w-4xl bg-[#111827] rounded-lg shadow-md mt-4 p-6'>
      <h2 className='text-2xl font-semibold mb-4 text-[#F9FAFB]'>
        Project Timetable
      </h2>
      <Chart
        chartType='Timeline'
        data={[columns, ...rows]}
        options={options}
        width='100%'
        height='400px'
        loader={
          <div className='text-center text-gray-500'>Loading graph...</div>
        }
      />
    </div>
  );
}
