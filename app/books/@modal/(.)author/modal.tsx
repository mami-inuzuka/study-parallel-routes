'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '80%',
          height: '80%',
        }}
      >
        <button onClick={() => router.back()}>Close modal</button>
        <br />
        <Link href="/books/author/1">Go to 1</Link>
        <br />
        {children}
      </div>
    </div>
  );
}
