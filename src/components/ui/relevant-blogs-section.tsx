import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, BookOpen, TrendingUp, Users, Star } from "lucide-react";

// Blog images
import mbaCareerGuideImg from "@/assets/blog/mba-career-guide.jpg";
import universityComparisonImg from "@/assets/blog/university-comparison.jpg";
import onlineLearningGuideImg from "@/assets/blog/online-learning-guide.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  slug: string;
  tags: string[];
  relevantFor: string[]; // Which pages this blog is relevant for
}

const blogPosts: BlogPost[] = [
  {
    id: "mba-career-guide-2025",
    title: "MBA Career Guide 2025: Complete Roadmap to Success",
    excerpt: "Discover the most in-demand MBA specializations, salary trends, and career opportunities in 2025. Your complete guide to choosing the right MBA program.",
    category: "Career Guidance",
    readTime: "8 min read",
    publishDate: "Dec 15, 2024",
    image: mbaCareerGuideImg,
    slug: "/blog/mba-career-guide-2025",
    tags: ["MBA", "Career", "Salary", "Specializations"],
    relevantFor: ["mba", "business", "management"]
  },
  {
    id: "university-comparison-guide",
    title: "How to Choose the Right University: Complete Comparison Guide",
    excerpt: "Compare top universities based on accreditation, fees, placement records, and course quality. Make an informed decision for your higher education.",
    category: "University Selection", 
    readTime: "10 min read",
    publishDate: "Dec 12, 2024",
    image: universityComparisonImg,
    slug: "/blog/university-comparison-guide",
    tags: ["University", "Comparison", "Fees", "Placement"],
    relevantFor: ["manipal", "uttaranchal", "vgu", "amity", "ignou", "lpu"]
  },
  {
    id: "online-learning-success-tips",
    title: "10 Proven Tips for Online Learning Success in 2025",
    excerpt: "Master online education with these expert tips. Learn time management, study techniques, and technology tools for successful distance learning.",
    category: "Study Tips",
    readTime: "6 min read", 
    publishDate: "Dec 10, 2024",
    image: onlineLearningGuideImg,
    slug: "/blog/online-learning-success-tips",
    tags: ["Online Learning", "Study Tips", "Time Management"],
    relevantFor: ["general", "bca", "mca", "ba", "bcom", "bba"]
  },
  {
    id: "bca-vs-btech-comparison",
    title: "BCA vs B.Tech: Which is Better for Your Tech Career?",
    excerpt: "Complete comparison of BCA and B.Tech programs including curriculum, career prospects, salary packages, and industry demand in 2025.",
    category: "Course Comparison",
    readTime: "7 min read",
    publishDate: "Dec 8, 2024", 
    image: onlineLearningGuideImg,
    slug: "/blog/bca-vs-btech-comparison",
    tags: ["BCA", "B.Tech", "Technology", "Career"],
    relevantFor: ["bca", "engineering", "technology"]
  },
  {
    id: "mca-placement-opportunities",
    title: "MCA Placement Opportunities: Top Companies and Salary Trends",
    excerpt: "Explore MCA placement statistics, top recruiting companies, salary packages, and skills in demand for computer application graduates.",
    category: "Placements",
    readTime: "9 min read",
    publishDate: "Dec 5, 2024",
    image: mbaCareerGuideImg,
    slug: "/blog/mca-placement-opportunities", 
    tags: ["MCA", "Placements", "Technology", "Salary"],
    relevantFor: ["mca", "technology", "engineering"]
  },
  {
    id: "distance-learning-advantages",
    title: "5 Key Advantages of Distance Learning for Working Professionals",
    excerpt: "Discover why distance learning is perfect for working professionals. Flexible schedules, cost-effectiveness, and career advancement opportunities.",
    category: "Distance Learning",
    readTime: "5 min read",
    publishDate: "Dec 3, 2024",
    image: universityComparisonImg,
    slug: "/blog/distance-learning-advantages",
    tags: ["Distance Learning", "Working Professionals", "Flexibility"],
    relevantFor: ["general", "working-professionals"]
  }
];

interface RelevantBlogsSectionProps {
  pageType: string; // e.g., "mba", "university", "bca", etc.
  maxBlogs?: number;
  title?: string;
  showCTA?: boolean;
}

const RelevantBlogsSection: React.FC<RelevantBlogsSectionProps> = ({
  pageType,
  maxBlogs = 3,
  title = "Related Articles",
  showCTA = true
}) => {
  // Filter blogs based on page type
  const relevantBlogs = blogPosts
    .filter(blog => 
      blog.relevantFor.includes(pageType) || 
      blog.relevantFor.includes("general")
    )
    .slice(0, maxBlogs);

  if (relevantBlogs.length === 0) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Career Guidance":
        return <TrendingUp className="w-4 h-4" />;
      case "University Selection":
        return <Users className="w-4 h-4" />;
      case "Study Tips":
        return <BookOpen className="w-4 h-4" />;
      case "Course Comparison":
        return <Star className="w-4 h-4" />;
      case "Placements":
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights and guidance to help you make informed decisions about your education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {relevantBlogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground flex items-center gap-1">
                    {getCategoryIcon(blog.category)}
                    {blog.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {blog.excerpt}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {blog.publishDate}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {blog.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link to={blog.slug}>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read Article <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {showCTA && (
          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" className="bg-gradient-primary">
                <BookOpen className="w-4 h-4 mr-2" />
                Explore All Articles
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelevantBlogsSection;