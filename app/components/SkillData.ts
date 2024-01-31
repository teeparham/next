export interface Item {
  level: number;
  name: string;
  tags: string[];
  years: number;
}

// Levels
// ["Proficient", "Advanced", "Expert"];

// name, tags, years, level
const _skills: Array<[string, string[], number, number]> = [
  ["Python", ["backend"], 4, 2],
  ["Ruby", ["backend"], 11, 2],
  ["JavaScript", ["frontend"], 10, 2],
  ["TypeScript", ["frontend"], 3, 1],
  ["React", ["frontend"], 4, 2],
  ["Rails", ["backend", "frontend"], 11, 2],
  ["Django", ["backend", "frontend"], 4, 2],
  ["C++", ["backend"], 2, 0],
  ["C#", ["backend"], 4, 2],
  ["Java", ["backend"], 1, 0],
  ["GraphQL", ["frontend", "backend"], 3, 1],
  ["REST", ["frontend", "backend"], 10, 1],
  ["Flow", ["frontend"], 1, 0],
  ["SASS", ["frontend", "CSS"], 4, 1],
  ["LESS", ["frontend", "CSS"], 1, 0],
  ["CSS modules", ["frontend", "CSS"], 2, 0],
  ["Bootstrap", ["frontend", "CSS"], 2, 0],
  ["Material UI", ["frontend", "CSS"], 1, 0],
  ["Tachyons", ["frontend", "CSS"], 3, 0],
  ["Tailwind", ["frontend", "CSS"], 0, 0],
  ["SQL", ["data", "backend"], 20, 2],
  ["Postgres", ["data"], 10, 2],
  ["PostGIS", ["data"], 10, 2],
  ["MySql", ["data"], 2, 1],
  ["SqlServer", ["data"], 6, 1],
  ["SSIS", ["data"], 4, 1],
  ["Redis", ["NoSQL"], 4, 2],
  ["Memcached", ["NoSQL"], 4, 2],
  ["Apache Hive", ["data"], 1, 0],
  ["Apache Spark", ["data"], 1, 0],
  ["Looker", ["data"], 3, 0],
  ["Databricks", ["data"], 2, 0],
  ["Elastic Search", ["NoSQL", "AWS"], 2, 0],
  ["Datadog", ["data"], 4, 1],
  ["AWS SQS", ["AWS"], 4, 1],
  ["AWS SES", ["AWS", "email"], 2, 0],
  ["GCP Sentiment Analysis", ["GCP"], 1, 0],
  ["AWS CloudFront", ["AWS"], 4, 0],
  ["AWS S3", ["AWS"], 4, 2],
  ["Heroku", ["infra"], 4, 1],
  ["AWS Route 53", ["AWS", "DNS"], 1, 0],
  ["Docker", ["infra"], 1, 0],
  ["CircleCI", ["CI"], 8, 1],
  ["Jenkins", ["CI"], 1, 0],
  ["Terraform", ["AWS", "infra"], 1, 0],
  ["Communication", ["management"], 12, 2],
  ["Estimation", ["management"], 12, 2],
  ["Project Management", ["management"], 4, 2],
  ["People Management", ["management"], 10, 2],
  ["Debugging", ["frontend", "backend", "management"], 12, 2],
  ["Prioritization", ["management"], 12, 2],
  ["Hiring", ["management"], 8, 2],
  ["Interviewing", ["management"], 8, 1],
  ["Calibration", ["management"], 2, 1],
  ["Mentorship", ["management"], 2, 1],
  ["1:1s", ["management"], 4, 1],
  ["Testing", ["frontend", "backend"], 12, 2],
  ["Refactoring", ["frontend", "backend"], 12, 2],
  ["Runbooks", ["management"], 12, 12],
];

export const skills: Item[] = _skills.map((item) => {
  return {
    name: item[0],
    tags: item[1],
    level: item[3],
    years: item[2],
  };
});
