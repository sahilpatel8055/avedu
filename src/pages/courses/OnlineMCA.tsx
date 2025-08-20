import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import WhyOnlineProgramsSection from "@/components/ui/why-online-programs-section";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import SectionNavigation from "@/components/ui/section-navigation";
import UniversityComparisonTable from "@/components/ui/university-comparison-table";
import {
  GraduationCap,
  Clock,
  Users,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  TrendingUp,
  Building,
  Briefcase,
  Layers,
  Code,
  Laptop,
  Database,
  Terminal,
  Cloud,
} from "lucide-react";
import mcaIcon from "@/assets/icons/tech-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalyatanLogo from "@/assets/mangalyatan-logo.png";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";

const OnlineMCA = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  const [activeTab, setActiveTab] = useState("mca");

  const sections = [
    { id: "top", label: "Home" },
    { id: "stats", label: "Stats" },
    { id: "universities", label: "Universities" },
    { id: "specializations", label: "Specializations" },
    { id: "syllabus", label: "Syllabus" },
    { id: "fee-comparison", label: "Fee Comparison" },
    { id: "admission", label: "Admission" }, // ADDED "admission" SECTION
    { id: "skills", label: "Skills" },
    { id: "careers", label: "Careers" },
    { id: "faqs", label: "FAQs" },
  ];

  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹75,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹50,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹45,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, AIU",
    },
    {
      name: "Lovely Professional University",
      logo: lpuLogo,
      rating: 4.2,
      fees: "₹60,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
    {
      name: "MIT World Peace University",
      logo: mitLogo,
      rating: 4.7,
      fees: "₹80,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+",
    },
  ];

  const specializations = [
    "Artificial Intelligence",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
    "Full Stack Development",
    "Machine Learning",
    "Software Development",
    "IoT",
    "Mobile Computing",
  ];

  const keyFeatures = [
    "Advanced Curriculum",
    "Hands-on Projects",
    "Expert Faculty",
    "Flexible Online Learning",
    "Live Coding Sessions",
    "Industry-Standard Tools",
    "Project-Based Assignments",
    "Career Support",
  ];

  const faqs = [
    {
      question: "Is Online MCA degree valid and recognized?",
      answer:
        "Yes, an Online MCA from a UGC-recognized university is fully valid and equivalent to a regular MCA degree. It is widely accepted by top IT companies.",
    },
    {
      question: "What is the eligibility criteria for Online MCA?",
      answer:
        "Candidates must hold a Bachelor's degree (BCA, B.Sc. IT, B.Sc. Computer Science, or equivalent) with a minimum of 50% marks from a recognized university. Some universities may require a mathematics subject in 12th grade.",
    },
    {
      question: "Can I get a job in a big tech company after an Online MCA?",
      answer:
        "Yes, the validity of the degree is the same. The skills you acquire and your practical knowledge will be the key factors for getting a job in any tech company.",
    },
    {
      question: "What is the duration of the Online MCA program?",
      answer:
        "The standard duration for an Online MCA is 2 years, divided into 4 semesters. Some older programs might be 3 years.",
    },
    {
      question: "How is an Online MCA different from a regular MCA?",
      answer:
        "The curriculum is the same, but online MCA offers flexibility in terms of time and location. You can study from anywhere, which is ideal for working professionals.",
    },
  ];

  const mcaSyllabus = [
    {
      title: "Year 1",
      subjects: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (Java/Python)",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      title: "Year 2",
      subjects: [
        "Advanced Web Technologies",
        "Cloud Computing",
        "Cyber Security",
        "Machine Learning",
        "Mobile Application Development",
        "Project Work & Internship",
      ],
    },
  ];

  const skillsObtained = [
    {
      skill: "Full Stack Development",
      icon: "Code",
      description:
        "Proficiency in developing both front-end and back-end web applications.",
    },
    {
      skill: "Data Science & AI",
      icon: "PieChart",
      description:
        "Skills in data analysis, machine learning, and artificial intelligence for informed decision-making.",
    },
    {
      skill: "Cloud Computing",
      icon: "Cloud",
      description:
        "Expertise in cloud platforms like AWS, Azure, and Google Cloud for scalable solutions.",
    },
    {
      skill: "Cyber Security",
      icon: "ShieldCheck",
      description:
        "Knowledge of network security, ethical hacking, and data protection strategies.",
    },
    {
      skill: "Database Management",
      icon: "Database",
      description:
        "Ability to design, implement, and manage robust databases.",
    },
    {
      skill: "Problem Solving",
      icon: "ClipboardList",
      description:
        "Critical thinking to identify, analyze, and solve complex technical problems.",
    },
  ];

  const careerScope = {
    roles: [
      {
        role: "Software Developer",
        salary: "₹5 - 12 LPA",
      },
      {
        role: "Data Scientist",
        salary: "₹6 - 15 LPA",
      },
      {
        role: "Cloud Architect",
        salary: "₹8 - 18 LPA",
      },
      {
        role: "Cyber Security Analyst",
        salary: "₹5 - 10 LPA",
      },
      {
        role: "Web Developer",
        salary: "₹4 - 9 LPA",
      },
      {
        role: "IT Consultant",
        salary: "₹6 - 14 LPA",
      },
    ],
  };

  const topRecruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Cognizant",
    "Accenture",
    "Tech Mahindra",
    "Capgemini",
    "Google",
    "Microsoft",
    "Amazon",
    "Deloitte",
  ];

  const admissionSteps = [
    {
      step: "Step 1: Check Eligibility",
      description: "Ensure you meet the minimum academic qualifications for the program.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />
    },
    {
      step: "Step 2: Fill out the Application Form",
      description: "Complete the online application form on our website or the university's portal.",
      icon: <ClipboardList className="h-6 w-6 text-blue-500" />
    },
    {
      step: "Step 3: Submit Documents",
      description: "Upload necessary documents like mark sheets, ID proof, and photographs.",
      icon: <Layers className="h-6 w-6 text-yellow-500" />
    },
    {
      step: "Step 4: Pay Fees",
      description: "Make the payment for the registration and course fees via the provided payment gateway.",
      icon: <DollarSign className="h-6 w-6 text-purple-500" />
    },
    {
      step: "Step 5: Confirmation & Enrollment",
      description: "After verification, you will receive an enrollment confirmation and access to the learning portal.",
      icon: <Award className="h-6 w-6 text-orange-500" />
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Hero Section */}
      <section id="top" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img src={mcaIcon} alt="MCA" className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online MCA Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Advance your career in IT with an Online MCA from leading
              universities. Gain expertise in modern technologies with a flexible
              curriculum.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                UGC Approved
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Laptop className="h-4 w-4 mr-2" />
                Industry Ready
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Career Growth
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#0052CC] hover:bg-[#003d99]" onClick={openForm}>
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button size="lg" variant="outline" onClick={openForm}>
                <BookOpen className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="stats" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">30+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">20+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">
                2 Years
              </div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online MCA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              Online MCA programs
            </p>
          </div>
          <HorizontalUniversityScroll universities={topUniversities} courseType="MCA" />
        </div>
      </section>

      {/* Why Online Programs Section */}
      <WhyOnlineProgramsSection
        universityName="Top Universities"
        lmsImagePath="/assets/lms/common.png"
      />

      {/* Specializations */}
      <section id="specializations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular MCA Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of specializations to match your career
              interests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="p-3 md:p-4 hover:shadow-md transition-shadow border border-gray-200/60"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#0052CC] flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base leading-tight">{spec}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Syllabus */}
      <section id="syllabus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Online MCA Subjects/Syllabus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the comprehensive curriculum designed to build a strong
              foundation in computer applications.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <Tabs
              defaultValue="mca"
              onValueChange={setActiveTab}
              className="w-full md:w-3/4 lg:w-1/2"
            >
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="mca" className="text-lg">
                  MCA Subjects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mca" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mcaSyllabus.map((year, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="bg-gray-100 border-b">
                        <h3 className="font-bold text-lg">{year.title}</h3>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="list-none space-y-2">
                          {year.subjects.map((subject, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* University Comparison Table */}
      <UniversityComparisonTable
        courseName="MCA"
        universities={[
          {
            name: "Manipal University Online",
            logo: manipalLogo,
            courseFee: "₹1,50,000",
            semesterFee: "₹37,500",
            emiOption: "₹12,500/month",
            registrationFee: "₹5,000",
            rating: 4.6,
            coursePagePath: "/university/manipal/courses/online-mca"
          },
          {
            name: "Uttaranchal University",
            logo: uttaranchalLogo,
            courseFee: "₹1,00,000",
            semesterFee: "₹25,000",
            emiOption: "₹8,333/month",
            registrationFee: "₹3,000",
            rating: 4.5,
            coursePagePath: "/university/uttaranchal/online-mca"
          },
          {
            name: "Vivekananda Global University",
            logo: vguLogo,
            courseFee: "₹90,000",
            semesterFee: "₹22,500",
            emiOption: "₹7,500/month",
            registrationFee: "₹2,500",
            rating: 4.4,
            coursePagePath: "/university/vgu/online-mca"
          },
          {
            name: "Lovely Professional University",
            logo: lpuLogo,
            courseFee: "₹1,20,000",
            semesterFee: "₹30,000",
            emiOption: "₹10,000/month",
            registrationFee: "₹4,000",
            rating: 4.2,
            coursePagePath: "/university/lpu/online-mca"
          },
          {
            name: "MIT World Peace University",
            logo: mitLogo,
            courseFee: "₹1,60,000",
            semesterFee: "₹40,000",
            emiOption: "₹13,333/month",
            registrationFee: "₹5,000",
            rating: 4.7,
            coursePagePath: "/university/mit/online-mca"
          },
        ]}
      />

      {/* NEW SECTION: Admission Procedure */}
      <section id="admission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Online MCA Admission Procedure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to secure your spot in a top online MCA program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-gray-50 border border-gray-200/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.step}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Skills Obtained */}
      <section id="skills" className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills Obtained in Online MCA Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build a strong foundation and acquire in-demand skills for a
              successful tech career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsObtained.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60"
              >
                {item.icon === "Code" && (
                  <Code className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "PieChart" && (
                  <PieChart className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Cloud" && (
                  <Cloud className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "ShieldCheck" && (
                  <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "Database" && (
                  <Database className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                {item.icon === "ClipboardList" && (
                  <ClipboardList className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                )}
                <h3 className="font-bold mb-2">{item.skill}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Career Scope & Top Recruiters */}
      <section id="careers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope & Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore lucrative career opportunities and top companies hiring MCA
              graduates.
            </p>
          </div>
          <Card className="hover:shadow-lg transition-shadow border border-gray-200/60">
            <CardHeader>
              <h3 className="font-bold text-xl mb-2">
                <Briefcase className="h-6 w-6 inline-block mr-2 text-[#0052CC]" />
                Career Opportunities after MCA
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {careerScope.roles.map((career, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-md"
                  >
                    <h4 className="font-medium">{career.role}</h4>
                    <Badge variant="secondary" className="text-sm">
                      {career.salary}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <h3 className="font-bold text-2xl mb-4">Top Recruiters</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {topRecruiters.map((recruiter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-base px-4 py-2"
                >
                  {recruiter}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW SECTION: Our Students Are Working At */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Students Are Working At
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our graduates are employed by leading companies across the globe.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={hiringPartnersImg}
              alt="Our Hiring Partners"
              className="mx-auto w-full max-w-6xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Online MCA - Original Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online MCA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive computer education with modern learning
              methods
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow border border-gray-200/60"
              >
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online MCA programs
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200/60"
              >
                <CardHeader>
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Tech Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career in IT with Online
            MCA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0052CC] hover:bg-gray-100"
              onClick={openForm}
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Counselling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0052CC]"
              onClick={openForm}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <SectionNavigation sections={sections} />
      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default OnlineMCA;
