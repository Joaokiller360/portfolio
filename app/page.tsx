'use client';

import { useState, useEffect } from 'react';
import { Hero, About, Skill, Projects, Footer } from '@/app/components';
import FullScreenLoader from '@/app/utils/loading';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null); // Replace 'any' with your data type

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 4000)); // 2-second delay
        
        // Once data is "fetched", update the state
        setData({ message: 'Data loaded successfully!' }); // Example data
        
        // Add a small delay before hiding the loader for better UX
        setTimeout(() => {
          setLoading(false);
        }, 800);

      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false); // Also hide loader on error
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FullScreenLoader loading={loading} />
      {!loading && (
        <>
          <Hero />
          <main className="container grid justify-center items-center mx-auto px-5">
            <About />
            <Skill />
            <Projects />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}
