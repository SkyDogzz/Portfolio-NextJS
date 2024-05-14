import Header from "@/app/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header/>
    {children}
    </>
  );
}
