import * as React from "react";

const Gauge: React.SFC<any, any> = ({
  title,
  value,
  stroke = 5,
  animate = false
}) => {
  const viewBox = 150;
  const center = viewBox / 2;
  const radius = (viewBox - stroke) / 2;
  const arc = 2 * Math.PI * radius;
  const offset = arc - (arc * value) / 100;

  return (
    <div className="gauge-container">
      <div className="title">{title}</div>
      <svg className="gauge" viewBox="0 0 150 150">
        <circle
          strokeWidth={stroke}
          className="rail"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className={animate ? "progress animated" : "progress"}
          strokeWidth={stroke}
          r={radius}
          cx={center}
          cy={center}
          strokeDasharray={`${arc} ${arc}`}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
        />
        <text
          className="value"
          alignmentBaseline="middle"
          textAnchor="middle"
          x={center}
          y={center}
        >
          {value ? value : "-"} %
        </text>
      </svg>
    </div>
  );
};

export { Gauge };
