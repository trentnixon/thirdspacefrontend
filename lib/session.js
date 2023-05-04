import { createContext, useContext, useState } from "react";

export const SessionDetails = createContext({ session: { brand: null, campaign: null } });

export const useSessionDetails = () => useContext(SessionDetails);

export const SessionDetailsProvider = ({ children }) => {
  const [session, setSession] = useState({ brand: null, campaign: null });

  const updateSession = (update) => {
    setSession({ ...session, ...update });
  };

  return (
    <SessionDetails.Provider value={{ session, updateSession }}>
      {children}
    </SessionDetails.Provider>
  );
};
