import { QueryClient, QueryClientProvider } from 'react-query';
import BlogPostList from './components/BlogPostList';
import { createContext } from 'react';
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

const QueryClientContext = createContext<QueryClient | null>(null);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <div className="my-6 App">
        <QueryClientContext.Provider value={queryClient}>
          <BlogPostList />
        </QueryClientContext.Provider>
      </div>
      <Footer></Footer>
    </QueryClientProvider>
  );
};

export default App;