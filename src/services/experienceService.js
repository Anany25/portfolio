const experiences = [
  {
    experienceTitle: "AI Software Engineer",
    experienceSubTitle: "UGenome AI",
    experienceTimeline: "Oct 2025 - Present",
    experienceTagline:
      "Developing a conversational AI platform for personalized genomics.",
    experienceDescription:
      "Developing a conversational AI platform for personalized genomics, enabling users to interpret and explore genomic data through an LLM-powered chatbot. Implementing a Retrieval-Augmented Generation (RAG) pipeline leveraging Knowledge Graphs and vector databases to deliver precise, context-aware insights. Building an automated extraction and structuring workflow for bioinformatics datasets to populate a reasoning-ready Knowledge Graph. Deploying the production-scale system on Microsoft Azure using PyTorch, LangChain, and Azure AI Foundry, ensuring reliability and scalability.",
    experienceImages: [`${process.env.PUBLIC_URL}/experience-images/ugenome.png?v=${new Date().getTime()}`],
    experienceLink: "ugenome-ai",
    likesCount: 0,
  },
];

export const fetchExperiences = async () => {
  return experiences;
};

export const fetchExperienceByLink = async (experienceLink) => {
  return experiences.find((exp) => exp.experienceLink === experienceLink);
};
