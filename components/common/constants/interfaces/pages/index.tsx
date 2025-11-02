// pages/index.tsx
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A simple Airbnb-style listing page built with Next.js and TailwindCSS" />
      </Head>

      <main className="min-h-screen p-6 bg-gray-50">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">ALX Listing App</h1>
          <p className="text-gray-600">A simple Airbnb-style listing page built with Next.js and TailwindCSS</p>
        </header>

        {/* Listing Section */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card */}
          <Card
            id="1"
            title="Cozy Apartment in City Center"
            description="A comfortable and modern apartment in the heart of the city."
            imageSrc="/assets/placeholder.jpg"
            price={120}
            onClick={() => alert('Card clicked!')}
          />

          <Card
            id="2"
            title="Modern Loft"
            description="Stylish loft with amazing views."
            imageSrc="/assets/placeholder.jpg"
            price={200}
          />

          <Card
            id="3"
            title="Beachside Bungalow"
            description="Relaxing bungalow near the beach."
            imageSrc="/assets/placeholder.jpg"
            price={180}
          />
        </section>

        {/* Buttons Section */}
        <section className="max-w-4xl mx-auto mt-8 flex gap-4 justify-center">
          <Button onClick={() => alert('Book Now clicked')}>Book Now</Button>
          <Button disabled>Disabled Button</Button>
        </section>
      </main>
    </>
  );
}
