import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Star, 
  DollarSign, 
  Award, 
  MapPin, 
  Users, 
  Clock, 
  TrendingUp,
  Shield,
  BookOpen,
  CheckCircle,
  X,
  FileText,
  Eye,
  CreditCard
} from "lucide-react";
import { toast } from "sonner";

// University logos
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";

// Sample certificates
import manipalDegree from "@/assets/manipal-1stdegree.jpg";
import vguDegree from "@/assets/vgu-degree.jpg";
import uuDegree from "@/assets/uu-degree.jpg";
import ignouDegree from "@/assets/ignou-degree.png";

interface University {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  rating: number;
  location: string;
  yearEstablished: number;
  accreditation: string[];
  naacGrade: string;
  totalFees: {
    mba: string;
    bba: string;
    mca: string;
    bca: string;
    ba: string;
    bcom: string;
  };
  usp: string[];
  placementRate: string;
  avgPackage: string;
  topRecruiters: string[];
  coursesOffered: string[];
  admissionProcess: string;
  eligibility: {
    mba: string;
    bba: string;
    mca: string;
    bca: string;
  };
  educationMode: string;
  examinationMode: string;
  naacRating: string;
  emiFacility: string;
  sampleCertificate: string;
}

const universities: University[] = [
  {
    id: "manipal",
    name: "Manipal University Online",
    shortName: "Manipal",
    logo: manipalLogo,
    rating: 4.6,
    location: "Karnataka",
    yearEstablished: 1953,
    accreditation: ["UGC", "AICTE", "NAAC", "WES"],
    naacGrade: "A++",
    totalFees: {
      mba: "₹3,00,000",
      bba: "₹2,40,000", 
      mca: "₹2,50,000",
      bca: "₹1,80,000",
      ba: "₹1,50,000",
      bcom: "₹1,50,000"
    },
    usp: [
      "Industry-Integrated Curriculum",
      "Global Recognition",
      "Strong Alumni Network",
      "Research Excellence"
    ],
    placementRate: "95%",
    avgPackage: "₹8-15 LPA",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture", "Microsoft"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "Online Application + Entrance Test",
    eligibility: {
      mba: "Bachelor's degree with 50% marks",
      bba: "12th with 50% marks from recognized board",
      mca: "Bachelor's degree with Mathematics/Statistics",
      bca: "12th with Mathematics/Computer Science"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A++",
    emiFacility: "Yes",
    sampleCertificate: manipalDegree
  },
  {
    id: "uttaranchal",
    name: "Uttaranchal University",
    shortName: "Uttaranchal",
    logo: uttaranchalLogo,
    rating: 4.5,
    location: "Uttarakhand",
    yearEstablished: 2013,
    accreditation: ["UGC", "AICTE", "NAAC", "BCI"],
    naacGrade: "A+",
    totalFees: {
      mba: "₹2,10,000",
      bba: "₹1,50,000",
      mca: "₹1,80,000", 
      bca: "₹1,05,000",
      ba: "₹90,000",
      bcom: "₹90,000"
    },
    usp: [
      "Affordable Quality Education",
      "Industry Expert Faculty",
      "Flexible Learning Options",
      "Strong Industry Connections"
    ],
    placementRate: "88%",
    avgPackage: "₹5-12 LPA",
    topRecruiters: ["TCS", "Wipro", "HCL", "Tech Mahindra", "Cognizant"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "Direct Admission + Merit Based",
    eligibility: {
      mba: "Bachelor's degree with 45% marks",
      bba: "12th with 45% marks from recognized board",
      mca: "Bachelor's degree with Mathematics",
      bca: "12th with any stream"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A+",
    emiFacility: "Yes",
    sampleCertificate: uuDegree
  },
  {
    id: "vgu",
    name: "Vivekananda Global University",
    shortName: "VGU",
    logo: vguLogo,
    rating: 4.4,
    location: "Rajasthan",
    yearEstablished: 2012,
    accreditation: ["UGC", "AICTE", "AIU"],
    naacGrade: "A",
    totalFees: {
      mba: "₹1,80,000",
      bba: "₹1,20,000",
      mca: "₹1,50,000",
      bca: "₹90,000",
      ba: "₹75,000",
      bcom: "₹75,000"
    },
    usp: [
      "Budget-Friendly Programs",
      "Modern Infrastructure",
      "Industry Partnerships",
      "Student-Centric Approach"
    ],
    placementRate: "82%",
    avgPackage: "₹4-10 LPA",
    topRecruiters: ["Infosys", "TCS", "Wipro", "IBM", "Capgemini"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "Merit Based + Counseling",
    eligibility: {
      mba: "Bachelor's degree with 50% marks",
      bba: "12th with 50% marks",
      mca: "Bachelor's degree with Mathematics",
      bca: "12th pass with Mathematics"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A",
    emiFacility: "Yes",
    sampleCertificate: vguDegree
  },
  {
    id: "ignou",
    name: "Indira Gandhi National Open University",
    shortName: "IGNOU",
    logo: ignouLogo,
    rating: 4.8,
    location: "Delhi",
    yearEstablished: 1985,
    accreditation: ["UGC", "AICTE", "NAAC", "DEB"],
    naacGrade: "A++",
    totalFees: {
      mba: "₹1,20,000",
      bba: "₹75,000",
      mca: "₹95,000",
      bca: "₹45,000",
      ba: "₹30,000",
      bcom: "₹30,000"
    },
    usp: [
      "Most Affordable Education",
      "Government Institution",
      "Pan-India Recognition",
      "Flexible Study Pattern"
    ],
    placementRate: "75%",
    avgPackage: "₹3-8 LPA",
    topRecruiters: ["Government Sectors", "PSUs", "Private Companies"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "Direct Admission",
    eligibility: {
      mba: "Bachelor's degree with 50% marks",
      bba: "12th with 45% marks",
      mca: "Bachelor's degree with Mathematics",
      bca: "12th pass any stream"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A++",
    emiFacility: "No",
    sampleCertificate: ignouDegree
  },
  {
    id: "amity",
    name: "Amity University Online",
    shortName: "Amity",
    logo: amityLogo,
    rating: 4.3,
    location: "Uttar Pradesh",
    yearEstablished: 2005,
    accreditation: ["UGC", "AICTE", "NAAC"],
    naacGrade: "A+",
    totalFees: {
      mba: "₹3,50,000",
      bba: "₹2,70,000",
      mca: "₹2,80,000",
      bca: "₹2,25,000",
      ba: "₹1,80,000",
      bcom: "₹1,80,000"
    },
    usp: [
      "Premium Education Quality",
      "International Faculty",
      "Advanced Learning Platform",
      "Global Alumni Network"
    ],
    placementRate: "92%",
    avgPackage: "₹7-18 LPA",
    topRecruiters: ["Microsoft", "Google", "Amazon", "Deloitte", "EY"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "Entrance Test + Interview",
    eligibility: {
      mba: "Bachelor's degree with 50% marks",
      bba: "12th with 60% marks",
      mca: "Bachelor's degree with Mathematics",
      bca: "12th with Mathematics/Computer Science"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A+",
    emiFacility: "Yes",
    sampleCertificate: manipalDegree
  },
  {
    id: "lpu",
    name: "Lovely Professional University",
    shortName: "LPU",
    logo: lpuLogo,
    rating: 4.2,
    location: "Punjab",
    yearEstablished: 2005,
    accreditation: ["UGC", "AICTE", "NAAC"],
    naacGrade: "A+",
    totalFees: {
      mba: "₹2,40,000",
      bba: "₹1,80,000",
      mca: "₹2,00,000",
      bca: "₹1,20,000",
      ba: "₹1,00,000",
      bcom: "₹1,00,000"
    },
    usp: [
      "Industry-Academia Partnership",
      "State-of-the-Art Campus",
      "Diverse Student Community",
      "Innovation & Research Focus"
    ],
    placementRate: "85%",
    avgPackage: "₹5-14 LPA",
    topRecruiters: ["TCS", "Cognizant", "Wipro", "IBM", "Accenture"],
    coursesOffered: ["MBA", "BBA", "MCA", "BCA", "BA", "B.Com"],
    admissionProcess: "LPUNEST + Merit Based",
    eligibility: {
      mba: "Bachelor's degree with 50% marks",
      bba: "12th with 50% marks",
      mca: "Bachelor's degree with Mathematics",
      bca: "12th with Mathematics preferred"
    },
    educationMode: "Online",
    examinationMode: "Online",
    naacRating: "A+",
    emiFacility: "Yes",
    sampleCertificate: manipalDegree
  }
];

interface UniversityComparisonToolProps {
  courseType?: string;
}

const UniversityComparisonTool: React.FC<UniversityComparisonToolProps> = ({ courseType }) => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [expandedCertificate, setExpandedCertificate] = useState<string | null>(null);

  const handleUniversitySelect = (universityId: string) => {
    if (selectedUniversities.includes(universityId)) {
      setSelectedUniversities(selectedUniversities.filter(id => id !== universityId));
    } else if (selectedUniversities.length < 3) {
      setSelectedUniversities([...selectedUniversities, universityId]);
    } else {
      toast.error("You can compare maximum 3 universities at a time");
    }
  };

  const handleCompare = () => {
    if (selectedUniversities.length < 2) {
      toast.error("Please select at least 2 universities to compare");
      return;
    }
    setShowComparison(true);
    toast.success("University comparison ready!");
  };

  const resetComparison = () => {
    setSelectedUniversities([]);
    setShowComparison(false);
    setExpandedCertificate(null);
  };

  const selectedUniversityData = universities.filter(uni => 
    selectedUniversities.includes(uni.id)
  );

  const toggleCertificate = (universityId: string) => {
    setExpandedCertificate(expandedCertificate === universityId ? null : universityId);
  };

  if (showComparison) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">University Comparison</h2>
          <Button variant="outline" onClick={resetComparison}>
            <X className="w-4 h-4 mr-2" />
            Reset Comparison
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full bg-background rounded-lg border">
            {/* Mobile optimized grid - 3 columns on mobile/tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
              <div className="font-semibold text-muted-foreground hidden md:block">
                <div className="space-y-4">
                  <div className="h-16"></div>
                  <div>University Name</div>
                  <div>Establishment Year</div>
                  <div>NAAC Grade</div>
                  <div>Location</div>
                  <div>Rating</div>
                  <div>Sample Certificate</div>
                  <div>Eligibility</div>
                  <div>Education Mode</div>
                  <div>Examination Mode</div>
                  <div>NAAC Rating</div>
                  <div>EMI Facility</div>
                  <div>Accreditation</div>
                  {courseType && <div>{courseType.toUpperCase()} Fees</div>}
                  <div>Placement Rate</div>
                  <div>Avg Package</div>
                  <div>Key USPs</div>
                  <div>Top Recruiters</div>
                </div>
              </div>
              
              {selectedUniversityData.map((university) => (
                <div key={university.id} className="space-y-4 border rounded-lg p-4 md:border-none md:p-0">
                  {/* Mobile headers */}
                  <div className="flex flex-col items-center">
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">University</div>
                    <div className="font-semibold text-center">{university.shortName}</div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Established</div>
                    <div className="text-center">{university.yearEstablished}</div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">NAAC Grade</div>
                    <div className="text-center">
                      <Badge variant="secondary">{university.naacGrade}</Badge>
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Location</div>
                    <div className="text-center flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {university.location}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Rating</div>
                    <div className="text-center flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      {university.rating}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Sample Certificate</div>
                    <div className="text-center">
                      <button
                        onClick={() => toggleCertificate(university.id)}
                        className="flex items-center gap-1 text-primary hover:underline text-sm"
                      >
                        <FileText className="w-3 h-3" />
                        <Eye className="w-3 h-3" />
                        View Sample
                      </button>
                      {expandedCertificate === university.id && (
                        <div className="mt-2 border rounded p-2">
                          <img 
                            src={university.sampleCertificate} 
                            alt={`${university.name} Sample Certificate`}
                            className="w-full h-32 object-contain"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Eligibility (MBA)</div>
                    <div className="text-center text-xs">{university.eligibility.mba}</div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Education Mode</div>
                    <div className="text-center">
                      <Badge variant="outline">{university.educationMode}</Badge>
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Examination Mode</div>
                    <div className="text-center">
                      <Badge variant="outline">{university.examinationMode}</Badge>
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">NAAC Rating</div>
                    <div className="text-center">
                      <Badge variant="secondary">{university.naacRating}</Badge>
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">EMI Facility</div>
                    <div className="text-center flex items-center justify-center gap-1">
                      {university.emiFacility === "Yes" ? (
                        <><CreditCard className="w-3 h-3 text-green-500" />
                        <span className="text-green-500 font-semibold">Yes</span></>
                      ) : (
                        <><X className="w-3 h-3 text-red-500" />
                        <span className="text-red-500 font-semibold">No</span></>
                      )}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Accreditation</div>
                    <div className="text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {university.accreditation.slice(0, 2).map(acc => (
                          <Badge key={acc} variant="outline" className="text-xs">{acc}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    {courseType && (
                      <>
                        <div className="md:hidden font-semibold text-xs text-muted-foreground">{courseType.toUpperCase()} Fees</div>
                        <div className="text-center font-semibold text-primary">
                          {university.totalFees[courseType as keyof typeof university.totalFees]}
                        </div>
                      </>
                    )}
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Placement Rate</div>
                    <div className="text-center flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {university.placementRate}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Avg Package</div>
                    <div className="text-center flex items-center justify-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {university.avgPackage}
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Key USPs</div>
                    <div className="text-center">
                      <div className="space-y-1">
                        {university.usp.slice(0, 3).map(usp => (
                          <div key={usp} className="text-xs flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {usp}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:hidden font-semibold text-xs text-muted-foreground">Top Recruiters</div>
                    <div className="text-center">
                      <div className="text-xs">
                        {university.topRecruiters.slice(0, 3).join(", ")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary">
            <BookOpen className="w-4 h-4 mr-2" />
            Get Detailed Comparison Report
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Compare Universities
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Select 2-3 universities to compare their fees, placements, and features
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {universities.map((university) => (
            <div 
              key={university.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedUniversities.includes(university.id) 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleUniversitySelect(university.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={university.logo} 
                    alt={university.name}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">{university.shortName}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      {university.rating}
                    </div>
                  </div>
                </div>
                <Checkbox 
                  checked={selectedUniversities.includes(university.id)}
                  disabled
                />
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">NAAC Grade:</span>
                  <Badge variant="secondary" className="text-xs">{university.naacGrade}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Placement:</span>
                  <span className="font-semibold">{university.placementRate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">EMI Facility:</span>
                  <span className={`font-semibold ${university.emiFacility === 'Yes' ? 'text-green-500' : 'text-red-500'}`}>
                    {university.emiFacility}
                  </span>
                </div>
                {courseType && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{courseType.toUpperCase()} Fees:</span>
                    <span className="font-semibold text-primary">
                      {university.totalFees[courseType as keyof typeof university.totalFees]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {selectedUniversities.length}/3 universities selected
          </div>
          <Button 
            onClick={handleCompare}
            disabled={selectedUniversities.length < 2}
          >
            Compare Selected Universities
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UniversityComparisonTool;