export default function BooksLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div id="foods-layout">
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
}
