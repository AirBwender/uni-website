import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect('/signin');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="outline">Home</Button>
              </Link>
              <form action="/api/auth/signout" method="post">
                <Button type="submit" variant="destructive">
                  Sign Out
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Welcome, {session.user?.name}!
            </h2>
            <p className="text-blue-700">
              Email: {session.user?.email}
            </p>
            {session.user?.role && (
              <p className="text-blue-700">
                Role: {session.user.role}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Saved Colleges
              </h3>
              <p className="text-gray-600">Manage your saved colleges</p>
              <Button className="mt-4" variant="outline">
                View Saved
              </Button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choice List
              </h3>
              <p className="text-gray-600">Your college preference list</p>
              <Button className="mt-4" variant="outline">
                Manage List
              </Button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Profile Settings
              </h3>
              <p className="text-gray-600">Update your preferences</p>
              <Button className="mt-4" variant="outline">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
