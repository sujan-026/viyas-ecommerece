
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export const RequireAuth = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error("Please sign in to access this page");
      navigate("/auth", { state: { from: location } });
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  // If still loading, you might want to show a loading indicator
  if (isLoading) {
    return <div className="container py-12 text-center">Loading...</div>;
  }

  // If authenticated, render the child routes
  return isAuthenticated ? <Outlet /> : null;
};
