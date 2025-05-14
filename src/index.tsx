import { hydrate, prerender as ssr } from "preact-iso";

export function App() {
  return <></>;
}

if (typeof window !== "undefined") {
  const app = document.getElementById("app");

  if (!app) {
    throw new Error("No app element found");
  }

  hydrate(<App />, app);
}

export async function prerender(data: Record<string, unknown>) {
  return await ssr(<App {...data} />);
}
