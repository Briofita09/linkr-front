import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import Pages from "./pages";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}
