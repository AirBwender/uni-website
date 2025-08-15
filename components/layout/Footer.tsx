import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2">Uni-Website</h3>
          <p className="text-sm text-gray-600">Your comprehensive guide to college admissions and cutoffs.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><a href="#" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} Uni-Website. All rights reserved.</div>
    </footer>
  );
}


