import { ExternalLink } from "lucide-react";

export default function GetNotified() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold">Get Notified! 📩</h2>
      <p className="mt-2 text-lg text-gray-300">
        Stay updated with the latest from Fruit Club. Follow us on X for the latest news!
      </p>

     

      {/* Follow Us on X */}
      <div className="mt-8 flex text-center justify-center items-center gap-4">
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
