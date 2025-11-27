const skills = [
  {
    title: "Languages",
    description: "Programming languages I am proficient in.",
    skills: [
      { name: "Python", logo: "python", proficiency: "proficient" },
      { name: "C++", logo: "cpp", proficiency: "intermediate" },
      { name: "SQL", logo: "sql", proficiency: "beginner" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Libraries and frameworks I use for AI/ML and Dev.",
    skills: [
      { name: "PyTorch", logo: "pytorch", proficiency: "proficient" },
      { name: "TensorFlow", logo: "tensorflow", proficiency: "proficient" },
      { name: "Scikit-learn", logo: "sklearn", proficiency: "proficient" },
      { name: "Matplotlib", logo: "matplotlib", proficiency: "proficient" },
      { name: "Flask", logo: "flask", proficiency: "beginner" },
      { name: "PySpark", logo: "pyspark", proficiency: "beginner" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use for development, visualization, and deployment.",
    skills: [
      { name: "AWS", logo: "aws", proficiency: "intermediate" },
      { name: "GCP", logo: "gcp", proficiency: "intermediate" },
      { name: "Azure", logo: "azure", proficiency: "beginner" },
      { name: "Linux", logo: "linux", proficiency: "intermediate" },
      { name: "Tableau", logo: "tableau", proficiency: "beginner" },
      { name: "Power BI", logo: "powerbi", proficiency: "beginner" },
      { name: "MongoDB", logo: "mongodb", proficiency: "beginner" },
    ],
  },
];

export const fetchSkills = async () => {
  return skills;
};
