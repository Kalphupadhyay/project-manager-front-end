import { useNavigate } from "react-router";
import { authService } from "../services/auth.service";
import { useEffect, useState } from "react";
import type { IUser } from "../interface/local/user.interface";

export const SideBarAuth = () => {
  const navigate = useNavigate();
  const { logoutUser, getCurrentUser } = authService();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    // Implement logout functionality here
    await logoutUser();
    navigate("/login");
  };

  const fetchCurrentUser = async () => {
    const response = await getCurrentUser();
    setUser(response.data);
  };

  return (
    <div className="flex items-center gap-3 border-t border-slate-800 p-4">
      <img
        alt="User Avatar"
        className="h-10 w-10 rounded-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZqiA9ch_7JtVXDgNCPi6XtOA7wDgskV6DAsUgX6re7uNO1p00dp-OvSMQlMgjDWQOlTBImplWzxDjOnVLXsV7acGleuwdogVMWSC5d2XIw829ToQLe7HnTb7fczWLmMga0YwFH_FvD_Pa4ngmZAoxG8hJekD6KvLddlp7DB9ESS1ylGU34IIeVQhobkZtEpE9ZHR0l5Gp9mxAV6lT8Lsnxc2fbhoHqzPXq6hFXsn4pfTlbKODuhvlY892PpJ0pr3knM066vc_Ww"
      />
      <div>
        <p className="text-sm font-semibold">{user?.username}</p>
        <p className="text-xs text-[var(--text-secondary)]">
          {user?.email || "Loading..."}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="ml-auto text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer "
      >
        <span className="material-symbols-outlined">logout</span>
      </button>
    </div>
  );
};
