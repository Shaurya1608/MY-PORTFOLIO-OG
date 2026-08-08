import Header from '@/components/Header';
import Preloader from '@/components/Preloader';
import Offcanvas from '@/components/Offcanvas';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <>
      <Preloader />
      <Offcanvas />
      <Header />
      <MainContent />
    </>
  );
}