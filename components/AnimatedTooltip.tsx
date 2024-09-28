"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Chicken Karahi",
    designation: "Lunch",
    image:
    "https://cdn.dummyjson.com/recipe-images/11.webp",
  },
  {
    id: 2,
    name: "Chapli Kebabs",
    designation: "Dinner",
    "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
  },
  {
    id: 3,
    name: "Greek Moussaka",
    designation: "Dinner",
    "image": "https://cdn.dummyjson.com/recipe-images/19.webp",
  },
  {
    id: 4,
    "name": "Butter Chicken (Murgh Makhani)",
    designation: "Dinner",
    "image": "https://cdn.dummyjson.com/recipe-images/20.webp",
  },
  {
    id: 5,
    "name": "Russian Borscht",
    designation: "Breakfast",
    "image": "https://cdn.dummyjson.com/recipe-images/27.webp",
  },
  {
    id: 6,
    "name": "Brazilian Caipirinha",
    designation: "Beverage",
    "image": "https://cdn.dummyjson.com/recipe-images/30.webp",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center max-sm:items-end justify-start  w-fit">
     <AnimatedTooltip items={people} /> 
    </div>
  );
}
