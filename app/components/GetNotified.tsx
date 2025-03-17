import { ExternalLink } from "lucide-react";

export default function GetNotified() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold">Get Notified! 📩</h2>
      <p className="mt-2 text-lg text-gray-300">
        Stay updated with the latest from Fruit Club. Enter your email to receive updates!
      </p>

      {/* Email Signup Form */}
      <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-lg text-black w-72"
          required
        />
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r-lg">
          Notify Me!
        </button>
      </form>

      {/* Follow Us on X */}
      <div className="mt-8 flex text-center justify-center items-center gap-4">
        <p className="text-lg text-gray-300">Follow us on X for updates!</p>
        <a
          href="https://x.com/fruitclubalgo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 mt-4 text-white bg-primary rounded-lg shadow-lg hover:bg-secondary transition-all"
        >
          <ExternalLink className="w-5 h-5" />
          Follow @fruitclubalgo
        </a>
      </div>
    </section>
  );
}
