export const revalidate = false;

export default function About() {
  console.log("Static page built at build time");

  return (
    <main>
      <h1>About Page (Static Rendering)</h1>
      <p>This page is generated at build time.</p>
    </main>
  );
}
