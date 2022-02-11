import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../components/querys/userQuery";

export function  useUser() {
  const { data } = useQuery(USER_QUERY);

  return data?.authenticatedItem;
}
