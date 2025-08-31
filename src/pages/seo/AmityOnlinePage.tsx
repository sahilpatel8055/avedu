import { Navigate } from 'react-router-dom';

const AmityOnlinePage = () => {
  // Redirect to main Amity university page for SEO
  return <Navigate to="/university/amity" replace />;
};

export default AmityOnlinePage;