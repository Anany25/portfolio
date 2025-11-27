const experiences = [
  {
    experienceTitle: "AI Software Engineer",
    experienceSubTitle: "UGenome AI",
    experienceTimeline: "Oct 2025 - Present",
    experienceTagline:
      "Developing a conversational AI platform and scalable genomics pipelines for personalized genomics.",
    experienceParagraphs: [
      "Developing a conversational AI platform for personalized genomics, enabling users to interpret and explore genomic data through an LLM-powered chatbot. Implementing a Retrieval-Augmented Generation (RAG) pipeline leveraging Knowledge Graphs and vector databases to deliver precise, context-aware insights. Deploying the production-scale system on Microsoft Azure using PyTorch, LangChain, and Azure AI Foundry.",
      "Architecting and deploying scalable genomics workflows using AWS HealthOmics and Batch, automating the processing of large-scale biological data stored in S3. Designing and hosting robust web applications on EC2, while leveraging API Gateway and Lambda for serverless microservices. Managing containerized bioinformatics tools and application images using ECR to ensure consistent and reproducible deployments.",
    ],
    experienceImages: [
      `${process.env.PUBLIC_URL}/experience-images/ugenome.png?v=${new Date().getTime()}`,
    ],
    experienceURLs: {
      "UGenome AI": "https://ugenome.ai",
    },
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
