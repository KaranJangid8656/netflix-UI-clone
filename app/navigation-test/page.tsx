'use client';
import { useRouter } from 'next/navigation';

export default function NavigationTest() {
  const router = useRouter();
  
  return (
    <div className="p-12">
      <h1 className="text-2xl mb-4">Navigation Test</h1>
      <button 
        onClick={() => {
          console.log('Attempting to navigate to /profiles');
          router.push('/profiles');
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Test Redirect
      </button>
      <p className="mt-4">Check browser console after clicking</p>
    </div>
  );
}
