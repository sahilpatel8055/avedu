import { Navigate } from 'react-router-dom';

const VGUOnlinePage = () => {
  // Redirect to main VGU university page for SEO
  return <Navigate to="/university/vgu" replace />;
};

export default VGUOnlinePage;