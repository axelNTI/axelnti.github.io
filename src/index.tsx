import { hydrate, prerender as ssr } from "preact-iso";
import { Route, Switch } from "wouter-preact";

import NotFound from "@/routes/404";
import Index from "@/routes/index";

const App = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={Index}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

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
