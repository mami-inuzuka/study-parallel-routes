export default function AnimalsLayout({
  children,
  dog,
  cat,
}: Readonly<{
  children: React.ReactNode;
  dog: React.ReactNode;
  cat: React.ReactNode;
}>) {
  return (
    <div id="animals-layout">
      {children}
      {dog}
      {cat}
    </div>
  );
}
