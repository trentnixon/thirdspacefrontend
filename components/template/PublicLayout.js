// Components
import Meta from "./Meta";
//import Navbar from "./NavbarTwo";
//import Footer from "./FooterDark";
import { useRouter } from "next/router";
/* import { useFetchUser, UserProvider } from "../../lib/authContext";
import { AccountDetailsProvider } from "../../lib/userContext"; */
import MembersShell from './MembersShell'
import {Public} from './PublicShell';
import { getFakeToken } from '../../lib/auth';

const Layout = ({ children }) => {
  //const { user, loading } = useFetchUser();

  return (
    <>

      {
        getFakeToken() ? <MembersShell>{children}</MembersShell>:<Public>{children}</Public>
      }
   
    </>
  );
};

export default Layout;




/*
<Navbar navBarClass={className} />
 <Footer />
*/
{
  /* <UserProvider value={{ user, loading }}>
      <AccountDetailsProvider>  </AccountDetailsProvider>
    </UserProvider> */
}
