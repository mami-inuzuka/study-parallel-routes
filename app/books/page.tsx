import Link from 'next/link';

export default function BooksPage() {
  return (
    <main>
      <h1>Books</h1>
      <Link href="/books/author">Go to Author</Link>
    </main>
  );
}
