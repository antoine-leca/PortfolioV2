import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import { SITE_URL, AUTHOR_NAME, GITHUB_URL, LINKEDIN_URL } from '../config/seo';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": AUTHOR_NAME,
  "jobTitle": "Développeur Full Stack",
  "url": SITE_URL,
  "sameAs": [GITHUB_URL, LINKEDIN_URL],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marseille",
    "addressCountry": "FR"
  }
};

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen main-font-r">
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
