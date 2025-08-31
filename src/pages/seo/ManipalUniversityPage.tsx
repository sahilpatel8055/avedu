import { Navigate } from 'react-router-dom';

const ManipalUniversityPage = () => {
  // Redirect to main Manipal university page for SEO
  return <Navigate to="/university/manipal" replace />;
};

export default ManipalUniversityPage;