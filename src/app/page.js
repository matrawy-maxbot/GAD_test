import Head from 'next/head';
import Image from 'next/image';
import styles from "./page.module.css";
import Nav from '@/app/components/nav';
import FirstSection from './components/firstSection';
import SecondSection from './components/secondSection';
import ThirdSection from './components/thirdSection';
import FourthSection from './components/fourthSection';
import FifthSection from './components/fifthSection';
import LastSection from './components/lastSections';
import SectionWindow from './components/sectionWindow';
import FormWindow from './components/formWindow';
import Faq from './components/faq';
import ClientScriptLoader from './components/ClientScriptLoader';

export default function Home() {
  return (
    <>
      <Head>
        <title>GAD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="./images/first_section/lines.png&w=3840&q=75" as="image" />
      </Head>
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <LastSection />
      <SectionWindow />
      <FormWindow />
      <Faq />
      <ClientScriptLoader />
    </>
  );
}
