import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Technologies from '../components/Technologies';

function Home() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Stats />
      <Technologies />
    </div>
  );
}

export default Home;