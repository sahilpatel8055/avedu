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
    id: "mca",
    title: "Online MCA", 
    icon: techIcon,
    programs: 38,
    popularCourses: ["MCA", "MSc IT", "M.Tech CS"],
    trending: true,
  },
  {
    id: "mcom",
    title: "Online MCOM",
    icon: financeIcon,
    programs: 32,
    popularCourses: ["M.Com", "MCom Finance", "MCom Accounting"],
    trending: true,
  },
  {
    id: "ma",
    title: "Online MA",
    icon: <Palette className="h-8 w-8" />,
    programs: 42,
    popularCourses: ["MA", "MA English", "MA Psychology"],
    trending: false,
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
    id: "bca",
    title: "BCA",
    icon: techIcon,
    programs: 38,
    popularCourses: ["BCA", "BSc IT", "BSc CS"],
    trending: false,
  },
  {
    id: "bcom",
    title: "BCOM",
    icon: financeIcon,
    programs: 32,
    popularCourses: ["B.Com", "BCom Hons", "BCom Finance"],
    trending: false,
  },
  {
    id: "ba",
    title: "BA",
    icon: <Palette className="h-8 w-8" />,
    programs: 42,
    popularCourses: ["BA", "BA English", "BA Psychology"],
    trending: false,
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
    mca: "/courses/mca",
    mcom: "/courses/mcom", 
    ma: "/courses/ma",
    bba: "/courses/bba",
    bca: "/courses/bca",
    bcom: "/courses/bcom",
    ba: "/courses/ba",
  };
  const route = routeMap[category.id];

  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative">
      {category.trending && (
        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white z-10 border-2 border-white shadow-lg">
          <span className="font-medium">Trending</span>
        </Badge>
      )}

      <CardContent className="p-3 sm:p-4 lg:p-6 text-center space-y-2 sm:space-y-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-light mx-auto flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
          {typeof category.icon === "string" ? (
            <img src={category.icon} alt={category.title} className="w-16 h-16 sm:w-18 sm:h-18 object-cover" loading="lazy" />
          ) : (
            <div className="text-blue-600 w-8 h-8 sm:w-9 sm:h-9">{category.icon}</div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-base lg:text-lg">{category.title}</h3>
          <p className="text-[#0052CC] font-bold text-sm">{category.programs}+ Programs</p>
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
