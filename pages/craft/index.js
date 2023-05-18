// File: pages/craft/index.js

import { useRouter } from 'next/router';
// Assume LoginForm is your component containing form elements
//import LoginForm from '../components/LoginForm';

const CraftIndex = () => {
  const router = useRouter();

/*   const handleLogin = (brandid) => {
    // After successful login, navigate to brand page
    router.push(`/craft/${brandid}`);
  }; */

  return (<>login form</>);
};

export default CraftIndex;

//<LoginForm onLogin={handleLogin} /> 