"use client";
import { useState } from "react";
import { cx } from "../utils";
import { FilterButton } from "./FilterButton";
import { Item, skills } from "./SkillData";

interface SkillProps {
  item: Item;
}

export function Skill({ item }: SkillProps) {
  const textSize =
    item.level === 1 ? "text-sm" : item.level === 2 ? "" : "text-xs";
  return (
    <div
      className={cx(
        "inline-block py-1 px-3 m-1 border rounded-3xl",
        "border-neutral-700 dark:border-neutral-500",
        "bg-white dark:bg-neutral-900",
        textSize
      )}
    >
      {item.name}
    </div>
  );
}

const FILTER_MAP: { [key: string]: Set<string> } = {
  All: new Set([]),
  Frontend: new Set(["frontend", "CSS"]),
  Backend: new Set(["backend", "data"]),
  Data: new Set(["data", "NoSQL"]),
  Infrastructure: new Set(["AWS", "GCP", "CI", "infra"]),
  Leadership: new Set(["management"]),
};

function filterSkills(filter: string): Item[] {
  if (filter === "All") {
    return skills;
  }
  const tags = FILTER_MAP[filter];
  // use Set has to find intersection with item.tags Array
  return skills.filter((item) => item.tags.some((tag) => tags.has(tag)));
}

export function Skills() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <div className="my-4 text-sm font-medium">
        <FilterButton
          position="first"
          selected={filter === "All"}
          setFilter={setFilter}
          text="All"
        />
        <FilterButton
          selected={filter === "Frontend"}
          setFilter={setFilter}
          text="Frontend"
        />
        <FilterButton
          selected={filter === "Backend"}
          setFilter={setFilter}
          text="Backend"
        />
        <FilterButton
          selected={filter === "Data"}
          setFilter={setFilter}
          text="Data"
        />
        <FilterButton
          selected={filter === "Infrastructure"}
          setFilter={setFilter}
          text="Infrastructure"
        />
        <FilterButton
          position="last"
          selected={filter === "Leadership"}
          setFilter={setFilter}
          text="Leadership"
        />
      </div>
      {filterSkills(filter).map((item) => (
        <Skill item={item} key={item.name} />
      ))}
    </>
  );
}
