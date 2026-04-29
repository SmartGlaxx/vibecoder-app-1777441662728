export default function Home() {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to SimpleSite</h1>
        <p className="text-xl text-gray-600 mb-8">Your one-stop solution for simple, elegant web presence.</p>
        <a href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition inline-block">Get in Touch</a>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <FeatureCard icon="🚀" title="Fast" description="Lightning fast performance optimized for your business." />
        <FeatureCard icon="🔒" title="Secure" description="Top-notch security to protect your data and privacy." />
        <FeatureCard icon="💡" title="Simple" description="Clean, intuitive design that anyone can use." />
      </section>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}