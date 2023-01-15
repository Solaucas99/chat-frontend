import React from 'react';
import AOS from 'aos';

// import Sidebar from './Components/Layout/Sidebar';
import { AppRoutes } from './Routes';
import { GlobalDiv } from './Styles/GlobalDiv';

import 'aos/dist/aos.css';
import UserContextProvider from './Providers/UserContextProvider';
import FocusedConversationContextProvider from './Providers/FocusedConversationContextProvider';

function App() {
  AOS.init();

  return (
    <GlobalDiv>
      <UserContextProvider>
        <FocusedConversationContextProvider>
          <AppRoutes />
        </FocusedConversationContextProvider>
      </UserContextProvider>
    </GlobalDiv>
  );
}

export default App;
