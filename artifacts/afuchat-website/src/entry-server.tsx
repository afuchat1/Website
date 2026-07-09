import ReactDOMServer from 'react-dom/server';
import { Router as WouterRouter, Route, Switch } from 'wouter';
import type { BaseLocationHook } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import type { FilledContext } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import ProductPage from '@/pages/ProductPage';
import Developers from '@/pages/Developers';
import GenericPage from '@/pages/GenericPage';
import Signup from '@/pages/Signup';
import NotFound from '@/pages/not-found';
import Partners from '@/pages/Partners';

/**
 * A dead-simple static location hook for SSR.
 * Returns the given path synchronously — no useSyncExternalStore, no browser APIs,
 * no "Missing getServerSnapshot" warnings.
 */
function makeStaticHook(path: string): BaseLocationHook {
  const hook: BaseLocationHook = () => [path, () => {}];
  return hook;
}

export function render(url: string): { html: string; head: string } {
  const helmetContext: Partial<FilledContext> = {};
  const queryClient = new QueryClient();

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <WouterRouter hook={makeStaticHook(url)} base="">
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/partners" component={Partners} />
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
              <Route path="/legal/privacy" component={() => <GenericPage title="Privacy Policy" type="privacy" />} />
              <Route path="/legal/terms" component={() => <GenericPage title="Terms of Service" type="terms" />} />
              <Route path="/legal/cookies" component={() => <GenericPage title="Cookie Policy" type="cookies" />} />
              <Route path="/sitemap" component={() => <GenericPage title="Sitemap" type="sitemap" />} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={() => null} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as FilledContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ')
    : '';

  return { html, head };
}
