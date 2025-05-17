export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  level: string;
  lectures: number;
  lastUpdated: string;
  isFeatured: boolean;
  instructor: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    bio?: string;
    rating?: number;
    reviewCount?: number;
    studentsCount?: number;
    coursesCount?: number;
  };
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  curriculum: {
    title: string;
    duration: string;
    lessons: {
      title: string;
      duration: string;
    }[];
  }[];
  reviews?: {
    userName: string;
    userAvatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  coursesCount: number;
  expertise: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  course: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  category: string;
  availableSeats: number;
  totalSeats: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}