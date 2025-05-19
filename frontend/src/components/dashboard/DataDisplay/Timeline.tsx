type TimelineEvent = {
    id: number;
    date: string;
    title: string;
    description: string;
  };
  
  const testTimelineEvents: TimelineEvent[] = [
    { id: 1, date: "2023-11-01", title: "Start of project", description: "project started" },
    { id: 2, date: "2023-11-15", title: "First release", description: "first release of the application" },
    { id: 3, date: "2023-12-01", title: "Testing", description: "testing of the application" },
  ];
  
  export function Timeline() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Timeline</h3>
        <div className="space-y-4">
          {testTimelineEvents.map(event => (
            <div key={event.id} className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#111827] rounded-full"></div>
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="pb-4">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-600 mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }