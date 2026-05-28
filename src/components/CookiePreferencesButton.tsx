"use client";

export default function CookiePreferencesButton({
  className = "",
}: {
  className?: string;
}) {
  const openPreferences = () => {
    window.Cookiebot?.renew();
  };

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
    >
      Gestisci cookie
    </button>
  );
}
