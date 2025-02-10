"use client";
export default function FilterError({ error }) {
  return (
    <div id="error" style={{ color: "red" }}>
      <h2>An error ocurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
