// types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

// utils.ts
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map(part => part[0].toUpperCase())
    .join("");
};

// api.ts
import type { User } from "./types";

export const fetchUserById = async (id: string): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Dummy data
  return {
    id,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    isActive: true,
  };
};

// usage.ts
import { fetchUserById } from "./api";
import { getInitials } from "./utils";

(async () => {
  const user = await fetchUserById("123");
  console.log(`User: ${user.name} (${getInitials(user.name)})`);
})();
