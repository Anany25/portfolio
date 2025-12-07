// Static Project Data for Anany Singh
const projects = [
  {
    projectTitle: "Text-to-SQL LoRA with Llama-3",
    projectSubTitle: "NLP | LLM Fine-tuning",
    projectTimeline: "2025",
    projectLink: "text-to-sql-lora",
    projectTagline: "Fine-tuning Llama-3-8B on SQL generation tasks using Unsloth and LoRA.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/text-to-sql.png`],
    likesCount: 20,
    featured: true,
    description: "Fine-tuned Llama-3-8B on the `sql-create-context` dataset using Unsloth for efficient LoRA training. Achieved 87.9% accuracy on the test set, a significant improvement over the base model. Features custom data loading, modular structure, and WSL2 optimization.",
    githubLink: "https://github.com/Anany25/text-to-sql-lora"
  },
  {
    projectTitle: "Advanced Colorization GAN",
    projectSubTitle: "Deep Learning | GANs",
    projectTimeline: "2025",
    projectLink: "advanced-colorization-gan",
    projectTagline: "Colorizing black and white images using Generative Adversarial Networks.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/advanced-colorization.png`],
    likesCount: 15,
    featured: true,
    description: "Implemented a GAN-based architecture to automatically colorize grayscale images with high fidelity. Utilized deep convolutional neural networks for feature extraction and image reconstruction.",
    githubLink: "https://github.com/Anany25/Advanced-Colorization-GAN"
  },
  {
    projectTitle: "FAISS Optimized IR",
    projectSubTitle: "Information Retrieval | Vector Search",
    projectTimeline: "2024",
    projectLink: "faiss-optimized-ir",
    projectTagline: "High-performance similarity search and clustering for dense vectors.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/faiss-ir.png`],
    likesCount: 12,
    featured: true,
    description: "Leveraged Facebook AI Similarity Search (FAISS) library to build an efficient information retrieval system capable of handling large-scale vector datasets with low latency.",
    githubLink: "https://github.com/Gautam-Galada/FAISS-Optimized-IR"
  },
  {
    projectTitle: "Photo to Van Gogh GAN",
    projectSubTitle: "Style Transfer | CycleGAN",
    projectTimeline: "2025",
    projectLink: "photo-to-vangogh",
    projectTagline: "Transforming photos into Van Gogh style paintings.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/vangogh-gan.png`],
    likesCount: 25,
    featured: true,
    description: "Implemented a CycleGAN architecture to perform unpaired image-to-image translation, successfully converting real-world photographs into the artistic style of Vincent van Gogh.",
    githubLink: "https://github.com/Anany25/Photo-to-VanGogh-GAN"
  },
  {
    projectTitle: "Gene Expression Classifier",
    projectSubTitle: "Bioinformatics | ML",
    projectTimeline: "2025",
    projectLink: "gene-expression-classifier",
    projectTagline: "Classifying cancer types based on gene expression data.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/gene-expression.png`],
    likesCount: 8,
    featured: false,
    description: "Analyzed high-dimensional gene expression datasets to classify various cancer types using machine learning algorithms, identifying key biomarkers.",
    githubLink: "https://github.com/Anany25/gene-expression-cancer-classifier"
  },
  {
    projectTitle: "Image Super Resolution",
    projectSubTitle: "Computer Vision | SRCNN",
    projectTimeline: "2025",
    projectLink: "image-super-resolution",
    projectTagline: "Enhancing image resolution using SRCNN with Attention mechanisms.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/super-resolution.png`],
    likesCount: 10,
    featured: false,
    description: "Developed a Super-Resolution Convolutional Neural Network (SRCNN) integrated with attention modules to upscale low-resolution images while preserving fine details and textures.",
    githubLink: "https://github.com/Anany25/Image-Super-Resolution-SRCNN_Attention"
  },
  {
    projectTitle: "Alzheimer Detection",
    projectSubTitle: "Medical AI | Classification",
    projectTimeline: "2023",
    projectLink: "alzheimer-detection",
    projectTagline: "Early detection of Alzheimer's disease using MRI scan classification.",
    projectImages: [`${process.env.PUBLIC_URL}/project-images/alzheimer-detection.png`],
    likesCount: 20,
    featured: true,
    description: "Built a deep learning model to classify MRI scans into different stages of Alzheimer's disease, aiding in early diagnosis and treatment planning.",
    githubLink: "https://github.com/Anany25/Alzheimer-Detection-and-Classification"
  }
];

// Fetch all projects (simulated async)
export const fetchProjects = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 100); // Simulate network delay
  });
};

// Fetch a specific project by projectLink
export const fetchProjectByLink = async (projectLink) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const project = projects.find((p) => p.projectLink === projectLink);
      if (project) {
        resolve(project);
      } else {
        reject(new Error("Project not found"));
      }
    }, 100);
  });
};
