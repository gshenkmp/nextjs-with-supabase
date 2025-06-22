"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function Dashboard() {
  const router = useRouter();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          // User is authenticated, redirect to protected dashboard
          router.replace('/protected/dashboard');
        } else {
          // User is not authenticated, redirect to your existing auth login
          router.replace('/auth/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        // On error, redirect to login
        router.replace('/auth/login');
      }
    };

    checkAuth();
  }, [router]);

  // Loading state while checking authentication
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto"></div>
        <p className="mt-4 text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}
