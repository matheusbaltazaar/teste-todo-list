import Listing from "pages/Listing";
import LogIn from "pages/LogIn";
import { Session } from "types/session";


type Props = {
  session: Session;
  onChangeSession: Function;
}
function InitialPage({ session, onChangeSession }: Props) {
  if (session.logado) {
    return (<Listing usuario={session.usuario!} />);
  } else {
    return (<LogIn session={session} onChangeSession={onChangeSession} />);
  }
}

export default InitialPage;