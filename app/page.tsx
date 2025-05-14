import Image from "next/image";

import { Header } from './components/layout/Header';
import {
  Hero,
  About,
  Statistics,
  Symptoms,
  SelfCheck,
  Articles,
  Testimonials,
  EmergencyHelp,
  Contact,
  Footer
} from './components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Symptoms />
        <SelfCheck />
        <Articles />
        <Testimonials />
        <EmergencyHelp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
