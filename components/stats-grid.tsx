"use client";

import { AnimatedCounter } from "./animated-counter";
import { stats } from "./site-data";

export function StatsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {stats.map((stat) => (
        <AnimatedCounter
          key={stat.label}
          label={stat.label}
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
