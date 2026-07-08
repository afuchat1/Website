import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Ecosystem from '@/pages/Ecosystem';
import Products from '@/pages/Products';
import ProductPage from '@/pages/ProductPage';
import Developers from '@/pages/Developers';
import GenericPage from '@/pages/GenericPage';
import Signup from '@/pages/Signup';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ecosystem" component={Ecosystem} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/developers" component={Developers} />
        <Route path="/about" component={() => <GenericPage title="About" type="about" />} />
        <Route path="/about/leadership" component={() => <GenericPage title="Leadership" type="leadership" />} />
        <Route path="/about/careers" component={() => <GenericPage title="Careers" type="careers" />} />
        <Route path="/about/press" component={() => <GenericPage title="Press" type="press" />} />
        <Route path="/about/brand" component={() => <GenericPage title="Brand" type="brand" />} />
        <Route path="/enterprise" component={() => <GenericPage title="Enterprise" type="enterprise" />} />
        <Route path="/security" component={() => <GenericPage title="Security" type="security" />} />
        <Route path="/contact" component={() => <GenericPage title="Contact" type="contact" />} />
        <Route path="/help" component={() => <GenericPage title="Help Center" type="help" />} />
        <Route path="/legal/privacy" component={() => <GenericPage title="Privacy Policy" type="legal" />} />
        <Route path="/legal/terms" component={() => <GenericPage title="Terms of Service" type="legal" />} />
        <Route path="/legal/cookies" component={() => <GenericPage title="Cookie Policy" type="legal" />} />
        <Route path="/sitemap" component={() => <GenericPage title="Sitemap" type="sitemap" />} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={() => <GenericPage title="Log In" type="login" />} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;