import InitialPage from 'pages/InitialPage';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getCurrentSession, setCurrentSession } from 'storage/data/session';
import { Session } from 'types/session';
import NavigationBar from './components/NavigationBar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';


function App() {


  //const [sessao, setSessao] = useState<Session>({ logado : true, usuario : {nome: "Matheus Baltazar"}});
  const [sessao, setSessao] = useState<Session>(getCurrentSession());

  console.log("App.tsx : currentSession", sessao);

  useEffect(() => {
    console.log("App.tsx : useEffect([Session]) |", sessao);
    setCurrentSession(sessao);
  }, [sessao]);

  const handleSessionChange = (session: Session) => {
    console.log("App.tsx : handleSessionChange(Session) |", session);
    setSessao(session);
  }

  return (
    <BrowserRouter>
      <NavigationBar session={sessao} onChangeSession={handleSessionChange} />
      <Routes>
        <Route path="/" element={<InitialPage session={sessao} onChangeSession={handleSessionChange} />} />
        <Route path="/login" element={<LogIn session={sessao} onChangeSession={handleSessionChange} />} />
        <Route path="/signup" element={<SignUp session={sessao} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
