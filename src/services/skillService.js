const skills = [
  {
    title: "Languages",
    description: "Programming languages I am proficient in.",
    skills: [
      { name: "Python", logo: "python", proficiency: "proficient" },
      { name: "C++", logo: "cpp", proficiency: "proficient" },
      { name: "SQL", logo: "sql", proficiency: "proficient" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Libraries and frameworks I use for AI/ML and Dev.",
    skills: [
      { name: "TensorFlow", logo: "tensorflow", proficiency: "proficient" },
      { name: "Scikit-learn", logo: "sklearn", proficiency: "proficient" },
      { name: "Flask", logo: "flask", proficiency: "proficient" },
      { name: "Matplotlib", logo: "matplotlib", proficiency: "proficient" },
      { name: "PySpark", logo: "pyspark", proficiency: "intermediate" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use for development, visualization, and deployment.",
    skills: [
      { name: "AWS", logo: "aws", proficiency: "intermediate" },
      { name: "GCP", logo: "gcp", proficiency: "beginner" },
      { name: "Azure", logo: "azure", proficiency: "beginner" },
      { name: "Linux", logo: "linux", proficiency: "proficient" },
      { name: "Tableau", logo: "tableau", proficiency: "proficient" },
      { name: "Power BI", logo: "powerbi", proficiency: "proficient" },
      { name: "MongoDB", logo: "mongodb", proficiency: "intermediate" },
    ],
  },
];

export const fetchSkills = async () => {
  return skills;
};
