import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-dvh flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
