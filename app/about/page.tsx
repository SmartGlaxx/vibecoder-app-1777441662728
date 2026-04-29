export default function About() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">We are a small team passionate about creating simple yet powerful digital experiences. Founded in 2020, we&apos;ve helped over 100 clients establish their online presence with minimal fuss and maximum impact.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">To make the web accessible and beautiful for everyone, regardless of technical skill.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">A world where every business has a stunning, functional website without complexity.</p>
        </div>
      </div>
    </section>
  );
}