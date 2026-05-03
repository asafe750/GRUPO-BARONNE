"use client";

import { services } from "./site-data";
import { ServiceCard } from "./service-card";

export function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}
