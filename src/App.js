import Form from "./Form";
import Navbar from "./Navbar";
import PageContent from './PageContent';
import ThemeProvider from './Contexts/ThemeContext';
import LanguageProvider from './Contexts/LanguageContext'

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
    <PageContent>
      <Navbar />
      <Form />
    </PageContent>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
