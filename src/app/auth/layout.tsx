
export default function EcommerceLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className={`bg-red-500 main`}>
      {children}
    </main>
  );
}