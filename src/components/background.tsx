export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] animate-blob-1" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[120px] animate-blob-2" />
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[120px] animate-blob-3" />
      <div className="absolute top-2/3 left-1/4 h-[400px] w-[400px] rounded-full bg-pink-500/8 blur-[120px] animate-blob-4" />
    </div>
  );
}
