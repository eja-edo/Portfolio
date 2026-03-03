import { LoadingSpinner, LoadingSkeleton, ProjectCardSkeleton, PageLoader } from '@/components/Loading';
import { Button } from '@/components/Button';

export default function LoadingDemoPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Loading Components Demo</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Tất cả các loading states và animations
          </p>
        </div>

        {/* Loading Spinners */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Loading Spinners</h2>
          <div className="flex items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <LoadingSpinner size="sm" />
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Small</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="md" />
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Medium</p>
            </div>
            <div className="text-center">
              <LoadingSpinner size="lg" />
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Large</p>
            </div>
          </div>
        </section>

        {/* Loading Skeleton */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Loading Skeleton</h2>
          <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <LoadingSkeleton />
          </div>
        </section>

        {/* Project Card Skeleton */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Card Skeleton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        </section>

        {/* Button with Loading */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons with Loading State</h2>
          <div className="flex flex-wrap gap-4 p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Button isLoading variant="primary">
              Primary Loading
            </Button>
            <Button isLoading variant="secondary">
              Secondary Loading
            </Button>
            <Button isLoading variant="outline">
              Outline Loading
            </Button>
            <Button isLoading size="sm">
              Small Loading
            </Button>
            <Button isLoading size="lg">
              Large Loading
            </Button>
          </div>
        </section>

        {/* Animation Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">CSS Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4">Fade In</h3>
              <div className="h-20 bg-primary-500 rounded-lg animate-fade-in" />
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4">Pulse</h3>
              <div className="h-20 bg-accent-500 rounded-lg animate-pulse" />
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4">Spin</h3>
              <div className="flex justify-center">
                <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-4">Shimmer</h3>
              <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="h-full w-full animate-shimmer" />
              </div>
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            💡 Sử dụng Loading Components
          </h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">LoadingSpinner</code> - Spinner animations</li>
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">LoadingSkeleton</code> - Text skeleton</li>
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">ProjectCardSkeleton</code> - Project card placeholder</li>
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">PageLoader</code> - Full page loader</li>
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">Button isLoading</code> - Button với loading state</li>
            <li>• <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">PageTransitionLoader</code> - Top progress bar</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
