export default function Services() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard icon="🌐" title="Web Design" description="Custom, responsive designs that reflect your brand." />
        <ServiceCard icon="📱" title="Mobile Apps" description="Native and cross-platform apps for iOS and Android." />
        <ServiceCard icon="🔧" title="Maintenance" description="Ongoing support and updates to keep your site fresh." />
        <ServiceCard icon="📈" title="SEO" description="Optimize your site to rank higher in search engines." />
        <ServiceCard icon="✍️" title="Content Writing" description="Engaging copy that tells your story." />
        <ServiceCard icon="🎨" title="Branding" description="Complete brand identity packages." />
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}