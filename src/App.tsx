import { useState } from "react";
import { Login } from "@/app/Login";
import { Home } from "@/app/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <Home />;
  }

  return <Login onSuccess={() => setIsAuthenticated(true)} />;
}

export default App;
