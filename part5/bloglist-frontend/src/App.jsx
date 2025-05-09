import { useState } from "react";
import { Login } from "./components/Login";
import { BlogsList } from "./components/BlogsList";
import { useEffect } from "react";
import { UserActions } from "./components/UserActions";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Blog List</h1>
      <UserActions user={user} setUser={setUser} />
      {user ? <BlogsList user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
