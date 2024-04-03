export default function FoodsLayout({
  children,
  apple,
  banana,
  tomato,
}: Readonly<{
  children: React.ReactNode;
  apple: React.ReactNode;
  banana: React.ReactNode;
  tomato: React.ReactNode;
}>) {
  return (
    <div id="foods-layout">
      {children}
      {apple}
      {banana}
      {tomato}
    </div>
  );
}
