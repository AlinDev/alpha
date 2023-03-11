import {NavMain} from "./src/mainNav/NavMain"
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export default () => (
  <QueryClientProvider client={queryClient}>
    <NavMain />
  </QueryClientProvider>
)
