import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Data Engineering specialist with 6+ years of experience fueling enterprise data infrastructure and assets to deliver impactful solutions that drive business growth. Skilled in cloud-native analytics, building AI agents with LLMs to automate workflows & accelerate decision-making.`;

export const ABOUT_TEXT = [
  'Data Engineering specialist with 6+ years of experience delivering scalable pipelines, cloud-native architectures, and AI-driven analytics.',
  'Skilled in Python, SQL, and R for data modeling, ML integration, and predictive analytics across enterprise systems.',
  'Certified Snowflake/Azure Data Engineer and Power BI Analyst, experienced in building secure, governed ETL workflows on cloud platforms.',
  'Hands-on with Databricks, Snowflake, SSIS, and Azure Synapse for orchestrating batch and real-time data solutions.',
  'Designed and deployed Power BI and Tableau dashboards enabling business stakeholders to make insight-driven decisions.',
  'Building AI agents using LLMs to automate workflows, power personalization, and accelerate enterprise intelligence.',
  'Graduate Teaching Assistant with strong foundations in statistics, probability, and ML, mentoring students in applied analytics.',
  'Mentor and leader at Data Science Society, driving community learning through workshops on Python, SQL, Power BI, and AI.'
];





export const CAREER_TIMELINE = [
  {
    title: "AI & Data Science Intern",
    subtitle: "Stanford Department of Medicine",
    date: "Jan 2024 - Aug 2025",
    type: "work",
    skills: ["LLMs", "OpenAI APIs", "Python", "Statistical Analysis"]
  },
  {
    title: "MS in Statistical Data Science",
    subtitle: "San Francisco State University, GPA 3.96",
    date: "Aug 2023 - May 2025",
    type: "education",
    skills: ["Statistical Modeling", "Machine Learning", "Cloud Data Engineering", "Deep Learning"]
  },
  {
    title: "Cloud Data Engineering Specialist",
    subtitle: "Accenture (Client: AT&T)",
    date: "Jun 2021 - Aug 2023",
    type: "work",
    skills: ["Databricks", "Snowflake", "Apache Airflow", "dbt", "Power BI", "ML Pipelines", "MLOps"]
  },
  {
    title: "Data Engineer – HR & Sales Analytics",
    subtitle: "Infosys Limited",
    date: "Jun 2018 - Jun 2021",
    type: "work",
    skills: ["SSIS", "Azure Synapse", "SQL Server", "Data Modeling"]
  },
  {
    title: "Bachelor's in Mechanical Engineering",
    subtitle: "Vellore Institute of Technology, GPA 3.99",
    date: "May 2018",
    type: "education",
    skills: ["Mathematics", "Data Structures & Algorithms", "C++"]
  }
];



export const CERTIFICATIONS = [
  'Snowflake SnowPro Core Certification',
  'Azure Data Engineer Associate (DP-203)',
  'Power BI Data Analyst Associate (PL-300)',
  'Azure Data Fundamentals (DP-900)',
  'Azure Fundamentals (AZ-900)',
  'Leadership Certification - President’s Leadership Fellows Program (SFSU)',
];



export const EXPERIENCES = [
  {
    year: "Jan 2025 - Aug 2025",
    role: "AI & Data Science Intern",
    company: "Stanford Department of Medicine",
    description: `Developing AI-driven solutions for clinical trial matching and patient engagement.`,
    technologies: ["Python", "OpenAI APIs", "Perplexity AI APIs", "Statistical Analysis"],
    details: [
      "Built AI tools leveraging OpenAI APIs and NLP for clinical trial recommendations.",
      "Developed interactive dashboards in Power BI for tracking clinical outcomes.",
      "Conducted statistical analysis and model evaluations to ensure AI accuracy."
    ]
  },
  {
    year: "Jun 2021 - Aug 2023",
    role: "Cloud Data Engineering Specialist",
    company: "Accenture",
    description: `Led BI and data engineering projects to enhance business reporting and insights.`,
    technologies: ["Databricks", "Snowflake", "Power BI", "Azure Synapse", "SQL"],
    projects: [
      {
        title: "Integrated Cognitive and Analytical Processing (Client: AT&T)",
        details: [
          "Designed and implemented end-to-end BI reporting solutions using SSIS, Snowflake, Power BI, and Tableau for executive decision-making.",
          "Built scalable Databricks ELT pipelines processing 150M+ daily clickstream records, transforming JSON data into structured formats for near real-time insights.",
          "Automated content recommendation alerts, saving ~200 hours annually and improving reporting efficiency by 30-40% through dynamic ETL workflows.",
          "Conducted RCA using advanced SQL techniques to debug and resolve data inconsistencies, ensuring data accuracy in reports.",
          "Developed centralized Power BI datasets with Row-Level Security (RLS) and Object-Level Security (OLS), ensuring secure data governance.",
          "Created interactive Power BI dashboards with KPIs for ML model performance, customer engagement, sales conversion, and churn metrics.",
          "Led proof-of-concept (POC) initiatives comparing Azure Synapse, Databricks, and Snowflake, selecting Databricks as the optimal solution."
        ]
      },
      {
        title: "Unified Sales Self-Service (Client: ServiceNow)",
        details: [
          "Migrated reporting from Tableau to Power BI, ensuring performance optimization, compatibility, and seamless data refreshes.",
          "Designed optimized data models and developed aggregated tables to enhance reporting speed and efficiency, reducing refresh times by 20%.",
          "Implemented RLS and OLS in Power BI, ensuring secure data access and compliance with data governance standards.",
          "Established Power BI governance best practices, including centralized dataset management and report templates to drive self-service BI adoption."
        ]
      }
    ]
  },
  {
    year: "Jul 2020 - Jun 2021",
    role: "Data Engineer",
    company: "Infosys Limited",
    description: `Led BI solution development and reporting automation to streamline business processes and enhance data reliability.`,
    technologies: ["SSIS", "SSAS Tabular Cubes", "Power BI", "SQL"],
    details: [
      "Developed and automated end-to-end BI reporting pipelines using SSIS and SSAS Tabular Cubes, achieving 60% reduction in manual processes.",
      "Built dynamic ETL workflows processing structured and unstructured data, applying transformations like conditional splits and lookups.",
      "Optimized SQL queries and developed complex stored procedures and CTEs, significantly improving reporting efficiency and data accuracy.",
      "Created secure Power BI dashboards with integrated RLS and OLS for global HR and immigration analytics.",
      "Automated error detection and proactive RCA processes, enhancing data reliability and ensuring consistent report accuracy."
    ]
  }
];

export const PROJECTS = [
  {
    title: "Bay Area Traffic Prediction",
    image: "project-1.jpg",
    description:
      "Developed regression models to predict traffic flow in the Bay Area using historical data and real-time inputs.",
    technologies: ["R", "Power BI", "Regression Analysis", "EDA"],
    github: "https://github.com/thanojkrishna/Bay_Area_Traffic_Prediction"
  },
  {
    title: "Income Classification",
    image: "project-2.jpg",
    description:
      "Built classification models to categorize individuals based on income levels, employing various ML techniques and addressing data imbalance.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "SMOTE"],
    github: "https://github.com/thanojkrishna/IncomeClassification"
  },
  {
    title: "Movie Recommendation System",
    image: "project-3.jpg",
    description:
      "Designed a hybrid recommendation system combining content-based and collaborative filtering approaches for personalized movie suggestions.",
    technologies: ["Python", "Surprise", "NLP", "Collaborative Filtering"],
    github: "https://github.com/thanojkrishna/MovieRecommendations"
  },
  {
    title: "IPL Prediction and Statistical Insights",
    image: "project-4.jpg",
    description:
      "Analyzed IPL data to predict match outcomes and derived statistical insights for strategic decision-making.",
    technologies: ["Python", "Power BI", "Classification Models", "Statistical Analysis"],
    github: "https://github.com/thanojkrishna/IndianPremierLeaguePredictionAndStatisticalInsights"
  },
];

export const ADDITIONAL_EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Graduate Teaching Assistant – Department of Mathematics",
    company: "San Francisco State University",
    description: `Instructed Elementary Statistics courses, conducted labs for Calculus 1 & 2, and provided tailored support to enhance academic outcomes.`,
    technologies: ["Probability", "Hypothesis Testing", "Regression Analysis", "Problem Solving"],
  },
  {
    year: "Jan 2024 - Present",
    role: "Math Tutor – Tutoring & Academic Support Center",
    company: "San Francisco State University",
    description: `Tutored students in Algebra, Calculus, and Statistics, provided programming support in Python and R, and enhanced data analysis skills using Excel.`,
    technologies: ["Python", "R", "Excel", "Mathematical Modeling"],
  },
  {
    year: "Jan 2024 - Present",
    role: "Mentor & Treasurer – Data Science Society (DSS)",
    company: "San Francisco State University",
    description: `Co-founded and mentored members, organized workshops on Python, SQL, and Tableau, and managed budgeting to support events and learning initiatives.`,
    technologies: ["Python", "SQL", "Tableau", "Data Analysis", "Mentorship"],
  },
];

export const CONTACT = {
  address: "San Francisco, California - 94132 ",
  phoneNo: "+1 6506085947",
  email: "thanojkrishna.muddana@outlook.com",
};
