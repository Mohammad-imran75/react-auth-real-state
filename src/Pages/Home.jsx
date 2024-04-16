import {useLoaderData} from 'react-router-dom'
import Resturant from './Resturant';
import Banner from './Banner';
import {Helmet} from 'react-helmet';
const Home = () => {
  const resturants = useLoaderData();
  // console.log(resturants);
  return (
    
   <div>
    <Helmet>
        <title>Home page</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Banner></Banner>
    <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center mt-7 font-bold text-5xl'><span className='text-orange-400'>Resturant</span> Real  <span className='text-orange-500'>Estate</span><br /> Section</h1>
     <div data-aos="fade-left" data-aos-delay="1000" className='grid lg:grid-cols-3 gap-6 mt-10'>
      
      {
        resturants.map(resturant => <Resturant key={resturant.id} resturant={resturant}></Resturant>)
      }
    </div>
   </div>
  );
};

export default Home;