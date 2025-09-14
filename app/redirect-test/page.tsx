'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectTest() {
  const router = useRouter();
  useEffect(() => {
    router.push('/profiles');
    setTimeout(() => {
      if (window.location.pathname !== '/profiles') {
        window.location.href = '/profiles';
      }
    }, 1000);
  }, [router]);

  return (
    <div style={{ color: 'white', padding: 32 }}>
      <h1>Redirecting to /profiles...</h1>
    </div>
  );
}
