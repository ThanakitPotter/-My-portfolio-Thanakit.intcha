import { toast } from "react-hot-toast";

export default function CopyText({ text, className = "", children }) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied!");
    } catch {
      toast.error("Copy failed");
    }
  };
  return (
    <button
      onClick={onCopy}
      className={`rounded-lg bg-white/10 hover:bg-white/15 px-3 py-1.5 text-xs ${className}`}
      title={text}
    >
      {children ?? "Copy"}
    </button>
  );
}
