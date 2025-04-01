
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import CommandsPage from "@/pages/CommandsPage";
import HomePage from "@/pages/HomePage";
import InfoPage from "@/pages/InfoPage";
import RulesPage from "@/pages/RulesPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/comandos" component={CommandsPage} />
      <Route path="/info" component={InfoPage} />
      <Route path="/reglas" component={RulesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
