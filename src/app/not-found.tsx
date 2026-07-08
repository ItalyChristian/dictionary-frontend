import { Metadata } from "next";
import { NotFoundComponent } from "@/templates/404";

export const metadata: Metadata = {
  title: "Page Not Found | Your App Name",
  description:
    "The page you're looking for doesn't exist. Let us help you find your way back.",
  robots: "noindex, follow",
};

export default function NotFound() {
  return <NotFoundComponent />;
}
