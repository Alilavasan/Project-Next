import Head from 'next/head';
import LayoutApp from '../components/Layout';
import Imagepic from '../components/Imagepic';
import Estelam from '../components/Estelam';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
  <Imagepic>
   <LayoutApp>
     <Head>
      <title>سیتتو || بازارگاه تخصصی عرضه و تقاضای پرواز</title>
    </Head>
    </LayoutApp> 
   </Imagepic>
   <Estelam></Estelam>
   <Footer></Footer>
    
    </>
  )
}
