import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainGalleryPage from '../pages/MainGalleryPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppLayer() {

  return (
    <QueryClientProvider client={queryClient}>
      <MainGalleryPage />
    </QueryClientProvider>
  );
}

export default AppLayer;
