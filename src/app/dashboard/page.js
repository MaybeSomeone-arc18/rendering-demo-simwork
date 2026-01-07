export const dynamic = "force-dynamic";

export default async function Dashboard() {
  console.log("Dashboard rendered on each request");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <main>
      <h1>Dashboard (Dynamic Rendering)</h1>
      <p>Fetched at request time:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
