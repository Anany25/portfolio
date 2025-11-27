const certificates = [
    // 1. Deep Learning Specialization
    {
        title: "DeepLearning.AI TensorFlow Developer Specialization",
        fileName: "Coursera DeepLearning.AI TensorFlow Developer Specialization.pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera DeepLearning.AI TensorFlow Developer Specialization.pdf`,
        type: "Specialization",
    },
    // 2. Google Cloud Specialization
    {
        title: "Machine Learning on Google Cloud Specialization",
        fileName: "Coursera Machine Learning on Google Cloud Specialization.pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Machine Learning on Google Cloud Specialization.pdf`,
        type: "Specialization",
    },
    // 3. Mathematics for Machine Learning Specialization
    {
        title: "Mathematics for Machine Learning Specialization",
        fileName: "Coursera Mathematics for Machine Learning Specialization (Imperial College London).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Mathematics for Machine Learning Specialization (Imperial College London).pdf`,
        type: "Specialization",
    },

    // 4. Deep Learning Courses
    {
        title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        fileName: "Coursera Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning (DeepLearning.AI).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning (DeepLearning.AI).pdf`,
        type: "Certificate",
    },
    {
        title: "Convolutional Neural Networks in TensorFlow",
        fileName: "Coursera Convolutional Neural Networks in TensorFlow (DeepLearning.AI).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Convolutional Neural Networks in TensorFlow (DeepLearning.AI).pdf`,
        type: "Certificate",
    },
    {
        title: "Natural Language Processing in TensorFlow",
        fileName: "Coursera Natural Language Processing in TensorFlow (DeepLearning.AI).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Natural Language Processing in TensorFlow (DeepLearning.AI).pdf`,
        type: "Certificate",
    },
    {
        title: "Sequences, Time Series and Prediction",
        fileName: "Coursera Sequences, Time Series and Prediction (DeepLearning.AI).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Sequences, Time Series and Prediction (DeepLearning.AI).pdf`,
        type: "Certificate",
    },

    // 5. Google Cloud Courses
    {
        title: "How Google does Machine Learning",
        fileName: "Coursera How Google does Machine Learning (Google Cloud).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera How Google does Machine Learning (Google Cloud).pdf`,
        type: "Certificate",
    },
    {
        title: "Launching into Machine Learning",
        fileName: "Coursera Launching into Machine Learning (Google Cloud).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Launching into Machine Learning (Google Cloud).pdf`,
        type: "Certificate",
    },
    {
        title: "Feature Engineering",
        fileName: "Coursera Feature Engineering (Google Cloud).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Feature Engineering (Google Cloud).pdf`,
        type: "Certificate",
    },
    {
        title: "Machine Learning in the Enterprise",
        fileName: "Coursera Machine Learning in the Enterprise (Google Cloud).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Machine Learning in the Enterprise (Google Cloud).pdf`,
        type: "Certificate",
    },
    {
        title: "Build, Train and Deploy ML Models with Keras on Google Cloud",
        fileName: "Coursera Build, Train and Deploy ML Models with Keras on Google Cloud (Google Cloud).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Build, Train and Deploy ML Models with Keras on Google Cloud (Google Cloud).pdf`,
        type: "Certificate",
    },

    // 6. Mathematics Courses
    {
        title: "Mathematics for Machine Learning: Linear Algebra",
        fileName: "Coursera Mathematics for Machine Learning Linear Algebra (Imperail College London).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Mathematics for Machine Learning Linear Algebra (Imperail College London).pdf`,
        type: "Certificate",
    },
    {
        title: "Mathematics for Machine Learning: Multivariate Calculus",
        fileName: "Coursera Mathematics for Machine Learning Multivariate Calculus (Imperial College London).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Mathematics for Machine Learning Multivariate Calculus (Imperial College London).pdf`,
        type: "Certificate",
    },
    {
        title: "Mathematics for Machine Learning: PCA",
        fileName: "Coursera Mathematics for Machine Learning PCA (Imperial College London).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Mathematics for Machine Learning PCA (Imperial College London).pdf`,
        type: "Certificate",
    },

    // 7. Other
    {
        title: "Teamwork Skills: Communicating Effectively in Groups",
        fileName: "Coursera Teamwork Skills Communicating Effectively in Groups (University of Colorado Boulder).pdf",
        pdfUrl: `${process.env.PUBLIC_URL}/certificates/Coursera Teamwork Skills Communicating Effectively in Groups (University of Colorado Boulder).pdf`,
        type: "Certificate",
    },
];

export const fetchCertificates = async () => {
    return certificates;
};
