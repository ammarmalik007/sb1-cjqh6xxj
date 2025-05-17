import { Course } from '../types';

export const allCourses: Course[] = [
  {
    id: "web-development-101",
    title: "Web Development Fundamentals",
    description: "Learn the core concepts of modern web development including HTML, CSS, and JavaScript.",
    fullDescription: "This comprehensive course will take you from a complete beginner to a confident web developer. You'll master the fundamentals of web development, starting with HTML structure, CSS styling, and JavaScript programming.\n\nYou'll build real-world projects that reinforce your learning and demonstrate your skills to potential employers. By the end of this course, you'll have a strong foundation in web development principles and be ready to advance to more specialized areas or frameworks.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web Development",
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviewCount: 1245,
    studentsCount: 12500,
    duration: "10 weeks",
    level: "Beginner",
    lectures: 84,
    lastUpdated: "October 2023",
    isFeatured: true,
    instructor: {
      id: "john-smith",
      name: "John Smith",
      title: "Senior Web Developer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "John has over 10 years of experience in web development and has worked with companies like Google and Facebook. He specializes in front-end development and is passionate about teaching the next generation of developers.",
      rating: 4.9,
      reviewCount: 3200,
      studentsCount: 45000,
      coursesCount: 12
    },
    whatYouWillLearn: [
      "Build web pages using HTML5 and CSS3",
      "Create interactive websites with JavaScript",
      "Implement responsive design for mobile and desktop",
      "Use developer tools for debugging and optimization",
      "Deploy websites to production environments",
      "Optimize website performance"
    ],
    requirements: [
      "No prior programming experience required",
      "Basic computer skills",
      "A computer with internet access",
      "Eagerness to learn and practice"
    ],
    targetAudience: [
      "Beginners interested in learning web development",
      "Students looking to expand their technical skills",
      "Professionals transitioning to a tech career",
      "Hobbyists wanting to build their own websites"
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        duration: "1 week",
        lessons: [
          { title: "Course Overview", duration: "10 min" },
          { title: "Web Development Landscape", duration: "20 min" },
          { title: "Setting Up Your Development Environment", duration: "30 min" },
          { title: "Introduction to the Internet and How It Works", duration: "25 min" }
        ]
      },
      {
        title: "HTML Fundamentals",
        duration: "2 weeks",
        lessons: [
          { title: "HTML Document Structure", duration: "30 min" },
          { title: "Working with Text Elements", duration: "45 min" },
          { title: "Creating Lists and Tables", duration: "40 min" },
          { title: "HTML Forms and Input Elements", duration: "50 min" },
          { title: "Semantic HTML and Accessibility", duration: "35 min" }
        ]
      },
      {
        title: "CSS Styling",
        duration: "3 weeks",
        lessons: [
          { title: "CSS Syntax and Selectors", duration: "40 min" },
          { title: "Box Model and Layout", duration: "45 min" },
          { title: "Colors, Backgrounds, and Gradients", duration: "35 min" },
          { title: "Flexbox and Grid Layout", duration: "60 min" },
          { title: "Responsive Design and Media Queries", duration: "55 min" },
          { title: "CSS Animations and Transitions", duration: "50 min" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Alex Johnson",
        userAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "October 15, 2023",
        comment: "This course was exactly what I needed to kickstart my web development journey. The instructor explains concepts clearly and the projects were engaging and practical."
      },
      {
        userName: "Sarah Williams",
        userAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "September 28, 2023",
        comment: "Great content and well-structured. I would have liked more advanced exercises, but overall it's an excellent introduction to web development."
      }
    ]
  },
  {
    id: "data-science-fundamentals",
    title: "Data Science and Analytics",
    description: "Master the skills needed to analyze data and extract meaningful insights for business decisions.",
    fullDescription: "This comprehensive data science course will equip you with the skills needed to analyze complex datasets and derive actionable insights. You'll learn statistical analysis, data visualization, and predictive modeling techniques used by professionals in the field.\n\nThrough hands-on projects using real-world datasets, you'll gain practical experience applying data science concepts to solve business problems. By the end of this course, you'll have a portfolio of projects demonstrating your ability to work with data effectively.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Data Science",
    price: 59.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 980,
    studentsCount: 8400,
    duration: "12 weeks",
    level: "Intermediate",
    lectures: 92,
    lastUpdated: "November 2023",
    isFeatured: true,
    instructor: {
      id: "emily-chen",
      name: "Emily Chen",
      title: "Data Scientist",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Emily is a data scientist with experience at Amazon and Netflix. She holds a Ph.D. in Statistics and specializes in machine learning and predictive analytics. She's passionate about making complex data concepts accessible to everyone.",
      rating: 4.8,
      reviewCount: 2100,
      studentsCount: 25000,
      coursesCount: 8
    },
    whatYouWillLearn: [
      "Data collection, cleaning, and preprocessing techniques",
      "Statistical analysis and hypothesis testing",
      "Data visualization using Python libraries",
      "Machine learning algorithms for prediction",
      "Big data processing techniques",
      "Communicating insights through data storytelling"
    ],
    requirements: [
      "Basic understanding of mathematics and statistics",
      "Some programming experience (preferably Python)",
      "A computer with internet access",
      "Analytical thinking skills"
    ],
    targetAudience: [
      "Business analysts looking to upgrade their skills",
      "Professionals interested in data-driven decision making",
      "Students pursuing careers in data science",
      "Researchers needing to analyze and interpret data"
    ],
    curriculum: [
      {
        title: "Introduction to Data Science",
        duration: "1 week",
        lessons: [
          { title: "What is Data Science?", duration: "20 min" },
          { title: "The Data Science Process", duration: "25 min" },
          { title: "Setting Up Your Analytics Environment", duration: "35 min" },
          { title: "Introduction to Python for Data Analysis", duration: "45 min" }
        ]
      },
      {
        title: "Data Manipulation and Analysis",
        duration: "3 weeks",
        lessons: [
          { title: "Data Collection and Import", duration: "40 min" },
          { title: "Data Cleaning and Preprocessing", duration: "55 min" },
          { title: "Exploratory Data Analysis", duration: "50 min" },
          { title: "Statistical Analysis Fundamentals", duration: "60 min" },
          { title: "Hypothesis Testing", duration: "45 min" }
        ]
      },
      {
        title: "Data Visualization",
        duration: "2 weeks",
        lessons: [
          { title: "Principles of Data Visualization", duration: "30 min" },
          { title: "Creating Charts and Graphs with Matplotlib", duration: "45 min" },
          { title: "Interactive Visualizations with Plotly", duration: "50 min" },
          { title: "Building Dashboards", duration: "60 min" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Michael Torres",
        userAvatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "November 10, 2023",
        comment: "Emily is an outstanding instructor! She breaks down complex concepts into understandable parts and the projects helped solidify my understanding of data analysis techniques."
      },
      {
        userName: "Jennifer Lee",
        userAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "October 25, 2023",
        comment: "This course provided me with practical skills I could immediately apply in my job. The content is up-to-date and relevant to current industry practices."
      }
    ]
  },
  {
    id: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    description: "Learn to create beautiful, user-friendly interfaces that enhance the user experience.",
    fullDescription: "This masterclass will teach you everything you need to know about UI/UX design, from fundamental principles to advanced techniques used by industry professionals. You'll learn how to create visually appealing interfaces that provide exceptional user experiences.\n\nThe course covers the entire design process, from user research and wireframing to creating high-fidelity prototypes and conducting usability testing. You'll work on realistic projects that build your portfolio and demonstrate your design skills to potential employers.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Design",
    price: 69.99,
    originalPrice: 129.99,
    rating: 4.9,
    reviewCount: 875,
    studentsCount: 6300,
    duration: "8 weeks",
    level: "All Levels",
    lectures: 68,
    lastUpdated: "December 2023",
    isFeatured: true,
    instructor: {
      id: "david-kim",
      name: "David Kim",
      title: "UX Design Lead",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "David has worked as a UX designer for over 12 years, leading design teams at companies like Airbnb and Dropbox. He specializes in creating intuitive user experiences and has a passion for teaching design principles and methodologies.",
      rating: 4.9,
      reviewCount: 1850,
      studentsCount: 18000,
      coursesCount: 6
    },
    whatYouWillLearn: [
      "UI/UX design principles and best practices",
      "User research and creating personas",
      "Wireframing and prototyping techniques",
      "Visual design fundamentals (color, typography, layout)",
      "Usability testing methods",
      "Designing responsive interfaces for multiple devices"
    ],
    requirements: [
      "No prior design experience needed",
      "Access to design software (free options will be suggested)",
      "A computer with internet access",
      "Interest in creating user-centered designs"
    ],
    targetAudience: [
      "Aspiring UI/UX designers",
      "Web developers wanting to improve their design skills",
      "Product managers working with design teams",
      "Entrepreneurs building digital products",
      "Graphic designers transitioning to digital design"
    ],
    curriculum: [
      {
        title: "Introduction to UI/UX Design",
        duration: "1 week",
        lessons: [
          { title: "What is UI/UX Design?", duration: "25 min" },
          { title: "The Design Process Overview", duration: "30 min" },
          { title: "Tools of the Trade", duration: "40 min" },
          { title: "Design Thinking Framework", duration: "35 min" }
        ]
      },
      {
        title: "User Research and Strategy",
        duration: "2 weeks",
        lessons: [
          { title: "User Research Methods", duration: "45 min" },
          { title: "Creating User Personas", duration: "50 min" },
          { title: "Journey Mapping", duration: "40 min" },
          { title: "Information Architecture", duration: "55 min" }
        ]
      },
      {
        title: "Visual Design Fundamentals",
        duration: "2 weeks",
        lessons: [
          { title: "Color Theory for Digital Design", duration: "40 min" },
          { title: "Typography Principles", duration: "35 min" },
          { title: "Layout and Composition", duration: "50 min" },
          { title: "Visual Hierarchy", duration: "45 min" },
          { title: "Design Systems", duration: "60 min" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Rachel Garcia",
        userAvatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "December 5, 2023",
        comment: "This course changed my perspective on design! David is an amazing instructor who provides valuable feedback and insights from his industry experience."
      },
      {
        userName: "Thomas Wilson",
        userAvatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "November 20, 2023",
        comment: "The projects in this course helped me build a portfolio that ultimately landed me my first design job. Highly recommended for anyone serious about UI/UX design."
      }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native framework.",
    fullDescription: "This comprehensive course will teach you how to build native mobile applications for both iOS and Android using React Native. You'll learn how to leverage your JavaScript and React skills to create truly native apps with a single codebase.\n\nYou'll master core concepts like component-based architecture, state management, and navigation. Through practical projects, you'll gain hands-on experience integrating with device features like cameras, location services, and push notifications.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mobile Development",
    price: 79.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviewCount: 720,
    studentsCount: 5100,
    duration: "10 weeks",
    level: "Intermediate",
    lectures: 76,
    lastUpdated: "January 2024",
    isFeatured: false,
    instructor: {
      id: "sophia-rodriguez",
      name: "Sophia Rodriguez",
      title: "Mobile Developer",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Sophia is a mobile app developer with expertise in React Native, Flutter, and native iOS/Android development. She has created over 30 published apps and loves teaching mobile development concepts to aspiring developers.",
      rating: 4.7,
      reviewCount: 1500,
      studentsCount: 12000,
      coursesCount: 5
    },
    whatYouWillLearn: [
      "Building cross-platform mobile apps with React Native",
      "Creating reusable components for mobile interfaces",
      "Managing state and data flow in mobile applications",
      "Implementing navigation and routing",
      "Accessing device features (camera, location, etc.)",
      "Publishing apps to the App Store and Google Play"
    ],
    requirements: [
      "Intermediate JavaScript knowledge",
      "Basic understanding of React",
      "Familiarity with npm and modern development workflows",
      "Computer with macOS, Windows, or Linux"
    ],
    targetAudience: [
      "Web developers looking to transition to mobile development",
      "React developers wanting to build native mobile apps",
      "Mobile developers seeking to learn React Native",
      "Entrepreneurs wanting to build their own mobile apps"
    ],
    curriculum: [
      {
        title: "Getting Started with React Native",
        duration: "1 week",
        lessons: [
          { title: "Introduction to React Native", duration: "30 min" },
          { title: "Setting Up Your Development Environment", duration: "45 min" },
          { title: "Creating Your First React Native App", duration: "50 min" },
          { title: "Understanding React Native Components", duration: "40 min" }
        ]
      },
      {
        title: "Building User Interfaces",
        duration: "2 weeks",
        lessons: [
          { title: "Core Components and APIs", duration: "55 min" },
          { title: "Styling in React Native", duration: "50 min" },
          { title: "Responsive Design for Mobile", duration: "45 min" },
          { title: "Lists and Data Presentation", duration: "60 min" },
          { title: "Forms and User Input", duration: "55 min" }
        ]
      },
      {
        title: "Navigation and Routing",
        duration: "2 weeks",
        lessons: [
          { title: "Introduction to React Navigation", duration: "40 min" },
          { title: "Stack Navigation", duration: "45 min" },
          { title: "Tab and Drawer Navigation", duration: "50 min" },
          { title: "Nested Navigators", duration: "55 min" },
          { title: "Authentication Flows", duration: "60 min" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Ryan Miller",
        userAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "January 15, 2024",
        comment: "Sophia's teaching style made complex concepts easy to understand. The course projects were practical and helped me understand how to build real-world applications."
      },
      {
        userName: "Ava Patel",
        userAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "December 28, 2023",
        comment: "Great introduction to React Native! I was able to build my first app within weeks of starting the course. Would recommend having a solid React foundation before starting."
      }
    ]
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence Fundamentals",
    description: "Learn the foundations of AI, machine learning, and neural networks.",
    fullDescription: "This course provides a comprehensive introduction to artificial intelligence and its core components. You'll learn the fundamental concepts, algorithms, and applications of AI in today's world.\n\nStarting with the basics of machine learning, you'll progress to deep learning neural networks and understand how AI systems are built and trained. Through practical exercises and projects, you'll implement algorithms that solve real-world problems using Python and popular AI libraries.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "AI/ML",
    price: 89.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviewCount: 650,
    studentsCount: 4800,
    duration: "14 weeks",
    level: "Advanced",
    lectures: 98,
    lastUpdated: "February 2024",
    isFeatured: false,
    instructor: {
      id: "michael-zhang",
      name: "Michael Zhang",
      title: "AI Researcher",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Michael is an AI researcher with a PhD in Computer Science specializing in machine learning. He has published papers in top AI conferences and worked at Google AI and DeepMind. He enjoys making complex AI concepts accessible to students of all backgrounds.",
      rating: 4.9,
      reviewCount: 1200,
      studentsCount: 15000,
      coursesCount: 4
    },
    whatYouWillLearn: [
      "Fundamental AI concepts and terminology",
      "Machine learning algorithms and approaches",
      "Deep learning and neural network architectures",
      "Natural language processing techniques",
      "Computer vision applications",
      "Ethical considerations in AI development"
    ],
    requirements: [
      "Intermediate Python programming skills",
      "Basic understanding of linear algebra and calculus",
      "Some knowledge of statistics and probability",
      "Computer with at least 8GB RAM"
    ],
    targetAudience: [
      "Software developers interested in AI",
      "Data scientists wanting to expand their skill set",
      "Researchers from other fields looking to apply AI",
      "Students pursuing careers in AI and machine learning",
      "Professionals in industries being transformed by AI"
    ],
    curriculum: [
      {
        title: "Introduction to AI",
        duration: "2 weeks",
        lessons: [
          { title: "What is Artificial Intelligence?", duration: "35 min" },
          { title: "History and Evolution of AI", duration: "40 min" },
          { title: "Types of AI Systems", duration: "45 min" },
          { title: "AI Ethics and Responsible Development", duration: "50 min" },
          { title: "Setting Up Your AI Development Environment", duration: "55 min" }
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        duration: "3 weeks",
        lessons: [
          { title: "Introduction to Machine Learning", duration: "45 min" },
          { title: "Supervised Learning", duration: "60 min" },
          { title: "Unsupervised Learning", duration: "55 min" },
          { title: "Reinforcement Learning", duration: "65 min" },
          { title: "Evaluation Metrics and Model Selection", duration: "50 min" }
        ]
      },
      {
        title: "Deep Learning",
        duration: "4 weeks",
        lessons: [
          { title: "Neural Networks Basics", duration: "60 min" },
          { title: "Activation Functions and Backpropagation", duration: "65 min" },
          { title: "Convolutional Neural Networks", duration: "70 min" },
          { title: "Recurrent Neural Networks", duration: "65 min" },
          { title: "Transformers and Attention Mechanisms", duration: "75 min" },
          { title: "Generative Adversarial Networks", duration: "70 min" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Daniel Clark",
        userAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 10, 2024",
        comment: "Incredible depth of content while still being approachable. Michael explains complex AI concepts in a way that makes them intuitive and applicable."
      },
      {
        userName: "Olivia Wang",
        userAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "January 25, 2024",
        comment: "This course provided me with a solid foundation in AI principles and practical implementation skills. The projects were challenging but rewarding."
      }
    ]
  }
];

export const featuredCourses = allCourses.filter(course => course.isFeatured);