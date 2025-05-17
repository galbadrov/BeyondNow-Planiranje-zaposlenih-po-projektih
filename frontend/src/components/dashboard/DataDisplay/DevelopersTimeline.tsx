import Timeline from "react-calendar-timeline";
import moment from "moment";
import "react-calendar-timeline/dist/style.css";
import { useEffect, useRef } from "react";

export function DevelopersTimeline() {
  // popravljen izpis v headerju --> samo ure (tudi dinamicno ko premikam urnik)
  const updateHeaders = () => {
    const headers = document.querySelectorAll(".rct-dateHeader span");
    headers.forEach((el) => {
      const text = el.textContent || "";
      const match = text.match(/\d{1,2}:\d{2}/);
      if (match) {
        el.textContent = match[0];
      }
    });
  };

  // Lahko uporabljaš ref, da ne definiraš funkcije znotraj renderja
  const updateHeadersRef = useRef(updateHeaders);
  updateHeadersRef.current = updateHeaders;

  // Na začetku (prvi render)
  useEffect(() => {
    updateHeadersRef.current();
  }, []);

  const groups = [
    { id: 1, title: "Ana" },
    { id: 2, title: "Marko" },
    { id: 3, title: "Petra" },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: "Projekt A",
      start_time: moment("2023-05-16T09:00").valueOf(),
      end_time: moment("2023-05-16T11:00").valueOf(),
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
      start_time: moment("2023-05-16T13:00").valueOf(),
      end_time: moment("2023-05-16T14:30").valueOf(),
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
      start_time: moment("2023-05-16T10:00").valueOf(),
      end_time: moment("2023-05-16T12:00").valueOf(),
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
      start_time: moment("2023-05-16T11:00").valueOf(),
      end_time: moment("2023-05-16T13:00").valueOf(),
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
      start_time: moment("2023-05-16T14:00").valueOf(),
      end_time: moment("2023-05-16T16:00").valueOf(),
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

  return (
    <div
      style={{
        backgroundColor: "#111827",
        padding: "20px",
        borderRadius: "12px",
      }}>
      <h2 style={{ color: "#F9FAFB", marginBottom: "20px" }}>
        Project Timetable
      </h2>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment("2023-05-16T08:00").valueOf()}
        defaultTimeEnd={moment("2023-05-16T18:00").valueOf()}
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
