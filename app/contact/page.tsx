export default function Contact() {
  return (
    <section className="py-12 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">Send Message</button>
      </form>
    </section>
  );
}