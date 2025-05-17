import Timeline from "react-calendar-timeline";
import moment from "moment";
import "react-calendar-timeline/dist/style.css";
import { useEffect, useMemo, useState } from "react";

export function DevelopersTimeline() {
  //tu fetchamo zaposlene
  const groups = [
    { id: 1, title: "Ana" },
    { id: 2, title: "Marko" },
    { id: 3, title: "Petra" },
    { id: 4, title: "burke" },
    { id: 5, title: "brapo" },
    { id: 6, title: "buraz" },
  ];

  //tu fetchamo taske zaposlenih
  const OriginalItems = [
    {
      id: 1,
      group: 1,
      title: "Projekt A",
      start_time: moment("2025-05-13T09:00").valueOf(),
      end_time: moment("2025-05-17T11:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 2,
      group: 1,
      title: "Sestanek",
      start_time: moment("2025-05-17T13:00").valueOf(),
      end_time: moment("2025-05-17T14:30").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 3,
      group: 2,
      title: "Bug fixing",
      start_time: moment("2025-05-17T10:00").valueOf(),
      end_time: moment("2025-05-17T12:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 4,
      group: 3,
      title: "Code review",
      start_time: moment("2025-05-17T11:00").valueOf(),
      end_time: moment("2025-05-17T13:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 5,
      group: 3,
      title: "DevOps",
      start_time: moment("2025-05-17T14:00").valueOf(),
      end_time: moment("2025-05-17T16:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 6,
      group: 4, // burke
      title: "Dokumentacija",
      start_time: moment("2025-05-17T09:30").valueOf(),
      end_time: moment("2025-05-17T11:30").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 7,
      group: 5, // brapo
      title: "UX raziskava",
      start_time: moment("2025-05-17T10:30").valueOf(),
      end_time: moment("2025-05-17T12:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 8,
      group: 5, // brapo
      title: "Testiranje",
      start_time: moment("2025-05-17T13:30").valueOf(),
      end_time: moment("2025-05-17T15:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 9,
      group: 6, // buraz
      title: "Deploy",
      start_time: moment("2025-05-17T09:00").valueOf(),
      end_time: moment("2025-05-17T10:00").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
    {
      id: 10,
      group: 6, // buraz
      title: "Analiza logov",
      start_time: moment("2025-05-17T11:00").valueOf(),
      end_time: moment("2025-05-17T12:30").valueOf(),
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    },
  ];

  // popravljen izpis v headerju --> samo ure (tudi dinamicno ko premikam urnik)
  //1. izpis
  const todayStart = moment().startOf("day").add(7, "hours"); // danes ob 07:00
  const todayEnd = moment().startOf("day").add(18, "hours"); // danes ob 17:00

  //state
  const [timeRange, setTimeRange] = useState({
    start: todayStart.valueOf(),
    end: todayEnd.valueOf(),
  });

  // funkcija za preklop na dnevni pogled (07:00–17:00)
  const setDailyViewToToday = () => {
    const start = moment().startOf("day").add(7, "hours").valueOf();
    const end = moment().startOf("day").add(18, "hours").valueOf();
    setTimeRange({ start, end });
  };

  //funkcija za preklop na tedenski pogled
  const setWeeklyViewToThisWeek = () => {
    const start = moment().startOf("week").valueOf();
    const end = moment().endOf("week").valueOf();
    setTimeRange({ start, end });
  };

  // funkcija za preklop na mesecni pogled
  const setMonthlyViewToThisMonth = () => {
    const start = moment().startOf("month").valueOf();
    const end = moment().endOf("month").valueOf();
    setTimeRange({ start, end });
  };

  // definiramo za daily, weekly, monthly pogled
  // Skrijemo naslove taskov, če range ni dnevni
  const items = useMemo(() => {
    const isDailyView =
      moment.duration(timeRange.end - timeRange.start).asHours() <= 24;

    return OriginalItems.map((item) => ({
      ...item,
      id: item.id + (isDailyView ? "-daily" : "-weekly"),
      title: isDailyView ? item.title : "",
      itemProps: {
        style: {
          background: "#F9FAFB",
          color: "#111827",
          borderRadius: "8px",
          border: "1px solid #F9FAFB",
        },
      },
    }));
  }, [timeRange]);

  //debugging
  useEffect(() => {
    console.log("timeRange changed:", timeRange);
    console.log(
      "items:",
      items.map((i) => i.title)
    );
  }, [timeRange, items]);

  return (
    <div
      style={{
        backgroundColor: "#111827",
        padding: "20px",
        borderRadius: "12px",
      }}>
      <h2
        style={{
          color: "#F9FAFB",
          marginTop: "20px",
          marginBottom: "10px",
          fontSize: "24px",
        }}>
        Project Timetable
      </h2>
      <div style={{ marginBottom: "10px" }}>
        <button
          className='mr-2 bg-[#F9FAFB] text-[#111827] w-25 rounded hover:bg-[#e3e3e3] cursor-pointer'
          onClick={setDailyViewToToday}>
          Daily view
        </button>
        <button
          className='mr-2 bg-[#F9FAFB] text-[#111827] w-25 rounded hover:bg-[#e3e3e3] cursor-pointer'
          onClick={setWeeklyViewToThisWeek}>
          Weekly view
        </button>
        <button
          className='mr-2 bg-[#F9FAFB] text-[#111827] w-25 rounded hover:bg-[#e3e3e3] cursor-pointer'
          onClick={setMonthlyViewToThisMonth}>
          Monthly view
        </button>
      </div>
      <Timeline
        groups={groups}
        items={items}
        visibleTimeStart={timeRange.start}
        visibleTimeEnd={timeRange.end}
        defaultTimeStart={timeRange.start}
        defaultTimeEnd={timeRange.end}
        onTimeChange={(start, end, updateScrollCanvas) => {
          setTimeRange({ start, end }); // shrani zoom/premik
          updateScrollCanvas(start, end);
        }}
        canMove={false}
        canResize={false}
        lineHeight={50}
        itemHeightRatio={0.75}
        sidebarWidth={150}
        sidebarContent={
          <div
            style={{
              backgroundColor: "#111827",
              color: "#F9FAFB",
              width: 150,
            }}>
            Developers
          </div>
        }
        timeSteps={{
          second: 0,
          minute: 0,
          hour: 1,
          day: 1,
          month: 1,
          year: 1,
        }}
        style={{ color: "#F9FAFB" }}
      />
    </div>
  );
}
