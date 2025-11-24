export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4
                 focus:z-100 focus:rounded-lg focus:bg-sky-600 focus:px-3 focus:py-1.5"
    >
      Skip to content
    </a>
  );
}
