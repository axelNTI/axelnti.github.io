import { hydrate, lazy, prerender as ssr } from "preact-iso";
import { Route, Switch } from "wouter-preact";

const App = () => {
  const IndexPage = lazy(() => import("./routes/index"));
  const NotFoundPage = lazy(() => import("./routes/404"));

  return (
    <Switch>
      <Route
        path="/"
        component={IndexPage}
      />
      <Route component={NotFoundPage} />
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
