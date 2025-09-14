import { useState, useRef, useEffect } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { User2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function UserMenu() {
  const { user } = useUser();
  const { signOut, redirectToSignIn } = useClerk();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-md hover:bg-accent p-1"
        aria-label="User menu"
      >
        {user.imageUrl ? (
  <img
    src={user.imageUrl}
    alt={user.fullName ?? "User Avatar"}
    className="h-8 w-8 rounded-full object-cover"
  />
) : (
  <User2 className="h-8 w-8 rounded-full bg-muted p-1 text-muted-foreground" />
)}

        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-card shadow-lg z-50">
          <ul className="py-1 text-sm text-foreground">
            <li>
              <a
                href="https://dashboard.clerk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-accent cursor-pointer"
              >
                Manage Account
              </a>
            </li>

            <li>
              <Link
                to="/profile/socials"
                className="block px-4 py-2 hover:bg-accent cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Your Socials
              </Link>
            </li>

            <li>
              <button
                onClick={async () => {
                  await signOut();
                  redirectToSignIn();
                }}
                className="w-full text-left px-4 py-2 hover:bg-accent cursor-pointer"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
