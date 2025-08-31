import { Navigate } from 'react-router-dom';

const IGNOUPage = () => {
  // Redirect to main IGNOU university page for SEO
  return <Navigate to="/university/ignou" replace />;
};

export default IGNOUPage;