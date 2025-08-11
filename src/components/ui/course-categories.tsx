import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Scale, 
  TrendingUp 
} from "lucide-react";

import mbaIcon from "@/assets/icons/mba-icon.png";
import techIcon from "@/assets/icons/tech-icon.png";
import bbaIcon from "@/assets/icons/bba-icon.png";
import financeIcon from "@/assets/icons/finance-icon.png";
import healthcareIcon from "@/assets/icons/healthcare-icon.png";

interface CourseCategory {
  id: string;
  title: string;
  icon: string | React.ReactNode;
  programs: number;
  popularCourses: string[];
  trending?: boolean;
}

const categories: CourseCategory[] = [
  {
    id: "mba",
    title: "MBA & Management",
    icon: mbaIcon,
    programs: 45,
    popularCourses: ["MBA", "PGDM", "Executive MBA"],
    trending: true,
  },
  {
    id: "btech",
    title: "Engineering & Technology", 
    icon: techIcon,
    programs: 38,
    popularCourses: ["B.Tech", "M.Tech", "BCA", "MCA"],
    trending: true,
  },
  {
    id: "bba",
    title: "BBA",
    icon: bbaIcon,
    programs: 22,
    popularCourses: ["BBA", "BBA Hons"],
    trending: false,
  },
  {
    id: "bcom",
    title: "Commerce & Finance",
    icon: financeIcon,
    programs: 32,
    popularCourses: ["B.Com", "M.Com", "BCOM", "MCOM"],
    trending: true,
  },
  {
    id: "healthcare",
    title: "Healthcare & Medicine",
    icon: healthcareIcon,
    programs: 25,
    popularCourses: ["B.Sc Nursing", "BPT", "Health Admin"],
    trending: false,
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    icon: <Scale className="h-8 w-8" />,
    programs: 18,
    popularCourses: ["LLB", "LLM", "BA LLB"],
    trending: false,
  },
  {
    id: "ba",
    title: "Arts & Humanities",
    icon: <Palette className="h-8 w-8" />,
    programs: 42,
    popularCourses: ["BA", "MA", "B.Ed"],
    trending: false,
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    icon: <TrendingUp className="h-8 w-8" />,
    programs: 22,
    popularCourses: ["Data Science", "AI/ML", "Analytics"],
    trending: true,
  },
];

const CategoryCard = ({ category }: { category: CourseCategory }) => {
  // Conditional classes for larger icons
  const isLargeIcon = ["mba", "btech", "bba"].includes(category.id);
  const iconSizeClasses = isLargeIcon 
    ? "w-16 h-16 sm:w-24 sm:h-24" // ~1.5x larger
    : "w-12 h-12 sm:w-16 sm:h-16";

  // Client-side navigation route map (avoid full page reloads)
  const routeMap: { [key: string]: string } = {
    mba: "/courses/mba",
    btech: "/courses/engineering",
    bba: "/courses/bba",
    bcom: "/courses/commerce",
    ba: "/courses/arts",
  };
  const route = routeMap[category.id];

  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative">
      {category.trending && (
        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white z-10">
          Trending
        </Badge>
      )}

      <CardContent className="p-3 sm:p-4 lg:p-6 text-center space-y-2 sm:space-y-3">
        <div className={`rounded-full bg-primary-light mx-auto flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${iconSizeClasses}`}>
          {typeof category.icon === "string" ? (
            <img src={category.icon} alt={category.title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-blue-600 w-10 h-10 sm:w-10 sm:h-10">{category.icon}</div>
          )}
        </div>

        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-bold text-sm sm:text-base lg:text-lg">{category.title}</h3>
          <p className="text-[#0052CC] font-bold text-xs sm:text-sm">{category.programs}+ Programs</p>
        </div>

        <div className="space-y-1 sm:space-y-2">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground">Popular Courses:</p>
          <div className="flex flex-wrap gap-1 justify-center">
            {category.popularCourses.map((course) => (
              <Badge key={course} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          size="sm"
          className="w-full text-xs sm:text-sm py-1.5 sm:py-2"
          asChild
        >
          <Link to={route ?? "#"}>Explore Programs</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const CourseCategories = ({ titleOverrides }: { titleOverrides?: Record<string, string> }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
      {categories.map((category) => {
        const displayCategory = titleOverrides && titleOverrides[category.id]
          ? { ...category, title: titleOverrides[category.id]! }
          : category;
        return <CategoryCard key={category.id} category={displayCategory} />
      })}
    </div>
  );
};

export default CourseCategories;
