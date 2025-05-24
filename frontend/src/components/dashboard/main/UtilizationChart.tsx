import React from "react";
import type { UtilizationData } from "../../../types/types";

interface UtilizationChartProps {
  data: UtilizationData[];
}

const UtilizationChart: React.FC<UtilizationChartProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("sl-SI", {
      day: "numeric",
      month: "short",
    }).format(date);
  };

  const chartHeight = 200;
  const barWidth = `calc(100% / ${data.length})`;
  const barMargin = 1;

  const chartData = data.slice(0, 7);

  return (
    <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-5'>
      <div className='mb-5'>
        <h2 className='text-lg font-medium text-gray-900'>Zasedenost virov</h2>
        <p className='text-sm text-gray-500'>
          Pregled zasedenosti v zadnjem tednu
        </p>
      </div>

      <div className='mt-4'>
        <div className='relative h-[200px]'>
          {/* Y-axis labels */}
          <div className='absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-1'>
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>

          {/* Chart area */}
          <div className='ml-8 h-full flex items-end'>
            {chartData.map((item, index) => (
              <div
                key={index}
                className='relative flex flex-col justify-end h-full'
                style={{ width: barWidth, marginRight: `${barMargin}px` }}>
                {/* Overallocated */}
                {item.overallocated > 0 && (
                  <div
                    className='w-full bg-red-500'
                    style={{
                      height: `${(item.overallocated / 100) * chartHeight}px`,
                      transition: "height 0.3s ease",
                    }}
                    title={`Overallocated: ${item.overallocated.toFixed(
                      1
                    )}%`}></div>
                )}

                {/* Utilized */}
                <div
                  className='w-full bg-blue-500'
                  style={{
                    height: `${(item.utilized / 100) * chartHeight}px`,
                    transition: "height 0.3s ease",
                  }}
                  title={`Utilized: ${item.utilized.toFixed(1)}%`}></div>

                {/* Available */}
                <div
                  className='w-full bg-green-400'
                  style={{
                    height: `${(item.available / 100) * chartHeight}px`,
                    transition: "height 0.3s ease",
                  }}
                  title={`Available: ${item.available.toFixed(1)}%`}></div>

                {/* X-axis label */}
                <div className='absolute -bottom-6 w-full text-center text-xs text-gray-500'>
                  {formatDate(item.date)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className='flex items-center justify-center mt-10 space-x-4 text-sm'>
          <div className='flex items-center'>
            <div className='w-3 h-3 bg-red-500 mr-1'></div>
            <span className='text-gray-600'>Preobremenjeno</span>
          </div>
          <div className='flex items-center'>
            <div className='w-3 h-3 bg-blue-500 mr-1'></div>
            <span className='text-gray-600'>Zasedeno</span>
          </div>
          <div className='flex items-center'>
            <div className='w-3 h-3 bg-green-400 mr-1'></div>
            <span className='text-gray-600'>Na voljo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilizationChart;
