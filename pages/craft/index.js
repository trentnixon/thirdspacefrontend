// File: pages/craft/index.js
import { Container } from "@mantine/core";
import { CraftABriefLoginForm } from "../../components/Pages/Craft/login/Form";
import CraftShell from "../../components/template/CraftShell";
import { useRouter } from "next/router";
// Assume LoginForm is your component containing form elements
//import LoginForm from '../components/LoginForm';

const CraftIndex = () => {
  const router = useRouter();

  /*   const handleLogin = (brandid) => {
    // After successful login, navigate to brand page
    router.push(`/craft/${brandid}`);
  }; */

  return (
    <CraftShell>
      <CraftABriefLoginForm />
    </CraftShell>
  );
};

export default CraftIndex;

//<LoginForm onLogin={handleLogin} />
