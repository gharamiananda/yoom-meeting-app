
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main >
      navbar
     {children}
     footer
    </main>
  );
}
