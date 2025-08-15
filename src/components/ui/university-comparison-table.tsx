import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, Star } from "lucide-react";

interface UniversityData {
  name: string;
  logo: string;
  courseFee: string;
  semesterFee: string;
  emiOption: string;
  registrationFee: string;
  rating: number;
  coursePagePath: string;
}

interface UniversityComparisonTableProps {
  courseName: string;
  universities: UniversityData[];
}

const UniversityComparisonTable = ({ courseName, universities }: UniversityComparisonTableProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Universities of {courseName} offered
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fee's Comparison Between top Universities
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold text-[#0052CC]">
              {courseName} Fee Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0052CC]/10">
                    <TableHead className="font-bold text-[#0052CC] min-w-[250px]">University</TableHead>
                    <TableHead className="font-bold text-[#0052CC] text-center">Course Fees</TableHead>
                    <TableHead className="font-bold text-[#0052CC] text-center">Details Fee Structure</TableHead>
                    <TableHead className="font-bold text-[#0052CC] text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {universities.map((university, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={university.logo} 
                            alt={university.name}
                            className="h-12 w-12 object-contain rounded"
                          />
                          <div>
                            <Link 
                              to={university.coursePagePath}
                              className="font-semibold text-[#0052CC] hover:underline"
                            >
                              {university.name}
                            </Link>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-gray-600">{university.rating}</span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="font-semibold text-[#0052CC]">
                          {university.courseFee}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-sm">
                          <div>• <span className="font-medium">Semester-wise fee:</span> {university.semesterFee}</div>
                          <div>• <span className="font-medium">EMI Option:</span> {university.emiOption}</div>
                          <div>• <span className="font-medium">Registration fee:</span> {university.registrationFee}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Link to={university.coursePagePath}>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white"
                          >
                            View Details
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UniversityComparisonTable;