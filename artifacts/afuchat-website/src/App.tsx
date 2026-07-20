import { Route, Switch } from 'wouter';
import Navbar from '@/components/layout/Navbar';
import CookieConsent from '@/components/layout/CookieConsent';
import Home from '@/views/Home';
import Products from '@/views/Products';
import ProductPage from '@/views/ProductPage';
import AfuAIPage from '@/views/AfuAIPage';
import Developers from '@/views/Developers';
import Partners from '@/views/Partners';
import Reviews from '@/views/Reviews';
import GenericPage from '@/views/GenericPage';
import NotFoundPage from '@/views/not-found';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Switch>
          <Route path="/" component={Home} />

          {/* Products */}
          <Route path="/products" component={Products} />
          <Route path="/products/afuai" component={AfuAIPage} />
          <Route path="/products/:id">
            {(params) => <ProductPage id={params.id} />}
          </Route>

          {/* Specific views */}
          <Route path="/developers" component={Developers} />
          <Route path="/partners" component={Partners} />
          <Route path="/reviews" component={Reviews} />

          {/* About sub-pages */}
          <Route path="/about">
            {() => <GenericPage title="About" type="about" />}
          </Route>
          <Route path="/about/leadership">
            {() => <GenericPage title="Leadership" type="leadership" />}
          </Route>
          <Route path="/about/careers">
            {() => <GenericPage title="Careers" type="careers" />}
          </Route>
          <Route path="/about/press">
            {() => <GenericPage title="Press" type="press" />}
          </Route>
          <Route path="/about/brand">
            {() => <GenericPage title="Brand" type="brand" />}
          </Route>

          {/* Other pages */}
          <Route path="/contact">
            {() => <GenericPage title="Contact" type="contact" />}
          </Route>
          <Route path="/enterprise">
            {() => <GenericPage title="Enterprise" type="enterprise" />}
          </Route>
          <Route path="/security">
            {() => <GenericPage title="Security" type="security" />}
          </Route>
          <Route path="/help">
            {() => <GenericPage title="Help" type="help" />}
          </Route>
          <Route path="/sitemap">
            {() => <GenericPage title="Sitemap" type="sitemap" />}
          </Route>

          {/* Legal */}
          <Route path="/legal/privacy">
            {() => <GenericPage title="Privacy Policy" type="privacy" />}
          </Route>
          <Route path="/legal/terms">
            {() => <GenericPage title="Terms of Service" type="terms" />}
          </Route>
          <Route path="/legal/cookies">
            {() => <GenericPage title="Cookie Policy" type="cookies" />}
          </Route>

          {/* 404 */}
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <CookieConsent />
    </>
  );
}
