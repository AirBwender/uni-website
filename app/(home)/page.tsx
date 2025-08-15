import { Button } from '@/components/ui/button';
import { Search, Building2, BookOpen, TrendingUp, User } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Uni-Website
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your comprehensive guide to college admissions and cutoffs
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Find Colleges
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              View Cutoffs
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Exam Info
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trends
            </Button>
            <Link href="/signin">
              <Button variant="outline" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">College Finder</h3>
            <p className="text-gray-600">
              Search and filter colleges based on your preferences and requirements.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Cutoff Analysis</h3>
            <p className="text-gray-600">
              View historical cutoffs and trends to make informed decisions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Exam Updates</h3>
            <p className="text-gray-600">
              Stay updated with the latest exam notifications and schedules.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


