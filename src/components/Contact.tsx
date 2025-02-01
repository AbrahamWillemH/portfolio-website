export default function Contact() {
  return (
    <section id="contact" className="p-4">
      <h2 className="text-xl font-bold">Contact</h2>
      <form className="mt-2">
        <div className="mb-2">
          <label className="block">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-2">
          <label className="block">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-2">
          <label className="block">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
}
