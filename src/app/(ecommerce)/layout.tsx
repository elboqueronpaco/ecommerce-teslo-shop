
export default function EcommerceLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className={`bg-blue-500 main`}>
      {children}
    </main>
  );
}