import Image from 'next/image'; // Corrected import statement
import Hero from '../../components/Hero';
import { CarCard, CustormFilter, SearchBar } from '../../components'; // Corrected typo in import
import { fetchCars } from '../../utils';

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty = ! Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 px-6 py-10 max-w-[1440px] mx-auto" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters mt-8">
          <SearchBar />
          <div className="home__filter-container mt-4">
            <CustormFilter title="Fuel" /> {/* Corrected component name */}
            <CustormFilter title="Year" /> {/* Corrected component name */}
          </div>
        </div>
        {!isDataEmpty ?(
          <section>
           <div className='home__cars-wrapper'>

          {allCars?.map((car) =>(<CarCard car={car}/>))}
           </div>
          </section>
        ):
      (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no result</h2>
          <p>{allCars?.message}</p>
        </div>
      )
      }

      </div>
    </main>
  );
}
