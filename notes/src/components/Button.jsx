export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 text-xs py-2 text-stone-400 md:text-base rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
