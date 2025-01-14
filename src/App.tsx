import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get("../public/data.json")
    .then((res) => {
      setUsers(res.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [])

  return (
    <div>
      {users.map(user => (
        <ListItem 
          id={user.id} 
          name={user.name} 
          age={user.age} 
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default App;
