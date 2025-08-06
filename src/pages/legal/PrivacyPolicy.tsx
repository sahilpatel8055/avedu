import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            How we collect, use, and protect your personal information
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="bg-primary-light p-4 rounded-lg">
              <p className="text-foreground leading-relaxed">
                Avadu.in is an independent online counseling and information platform. We are not officially 
                affiliated with, endorsed by, or partnered with any of the universities, educational institutions, 
                or their brands mentioned on this website.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Your privacy is paramount to us at Avadu.in. This Privacy Policy details how we collect, use, and 
                protect your personal information in connection with our website and services. By using our website 
                and services, you consent to the collection and use of your information as described in this policy.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p className="text-foreground leading-relaxed mb-3">
                We collect information from you to provide and improve our services. The types of data we collect include:
              </p>
              
              <div className="space-y-4 ml-4">
                <div>
                  <h3 className="font-semibold text-foreground">Personal Information:</h3>
                  <p className="text-foreground leading-relaxed">
                    This is information that can be used to identify you. We collect this when you voluntarily 
                    provide it to us by filling out forms on our website, such as our counseling form. This may 
                    include your name, email address, mobile number, and other information related to your 
                    educational and career interests.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Usage and Log Data:</h3>
                  <p className="text-foreground leading-relaxed">
                    We automatically collect certain information when you visit our website. This data is 
                    non-personal and includes your IP address, browser type, operating system, pages visited, 
                    the time and date of your visit, and the resources you access. This helps us analyze user 
                    behavior and improve our site's functionality.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground">Cookies:</h3>
                  <p className="text-foreground leading-relaxed">
                    Our website uses cookies to enhance your experience. These are small files stored on your 
                    device that help us remember your preferences, recognize you on repeat visits, and track your 
                    usage patterns. You can manage your cookie preferences through your browser settings.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              
              <ul className="space-y-2 ml-4 list-disc text-foreground">
                <li><strong>To Provide Counseling Services:</strong> Your contact details are used to reach out to you via calls, messages, and emails to offer our free, neutral counseling services, tailored to your specific academic and career preferences.</li>
                <li><strong>To Improve Our Services:</strong> We use collected data to analyze website traffic, identify user trends, and make improvements to our content and services.</li>
                <li><strong>For Communication and Marketing:</strong> We may use your contact information to send you updates, promotional material, or information about other services we feel may be of interest to you. You can opt out of these communications at any time.</li>
                <li><strong>To Ensure Compliance:</strong> Your information may be used to enforce our Terms & Conditions and to comply with legal obligations.</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Sharing and Disclosure of Information</h2>
              <p className="text-foreground leading-relaxed">
                We are committed to protecting your privacy. We want to be clear that we do not sell, rent, or 
                share your personal information with any third parties. The only exception is when we are required 
                to disclose your information to comply with a valid legal obligation, such as a court order or law 
                enforcement request.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p className="text-foreground leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. While we strive to use commercially acceptable 
                means to protect your data, no method of transmission over the Internet or method of electronic 
                storage is 100% secure.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Links</h2>
              <p className="text-foreground leading-relaxed">
                Our website may contain links to third-party websites, including university portals. We are not 
                responsible for the privacy practices or the content of these external sites. We encourage you to 
                review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights and Choices</h2>
              <p className="text-foreground leading-relaxed">
                You have the right to access and control your personal information. If you wish to unsubscribe 
                from our communications or have your data removed from our systems, you can contact us directly 
                at privacy@avadu.in.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Grievance Officer</h2>
              <p className="text-foreground leading-relaxed">
                In accordance with Indian law, if you have any questions or concerns regarding this Privacy Policy 
                or our data handling practices, you may contact our Grievance Officer at grievance@avadu.in.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to this Policy</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this 
                page, and the "Last Updated" date will be revised. We encourage you to review this policy periodically 
                to stay informed about how we are protecting your information.
              </p>
            </section>

            <div className="bg-primary-light p-4 rounded-lg mt-6">
              <p className="text-sm text-foreground">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-foreground mt-2">
                For any questions regarding this Privacy Policy, please contact us at privacy@avadu.in
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;