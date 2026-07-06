import { Sidebar } from "@/components/Sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
