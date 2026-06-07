import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen main-font-r">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;