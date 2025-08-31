import { Navigate } from 'react-router-dom';

const UttaranchalOnlinePage = () => {
  // Redirect to main Uttaranchal university page for SEO
  return <Navigate to="/university/uttaranchal" replace />;
};

export default UttaranchalOnlinePage;