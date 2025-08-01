
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="w-full max-w-md p-4 bg-white shadow-md rounded">
        {children}
      </main>
    </div>
  );
}