import { useEffect } from "react";
import { useRouter } from "solito/router";

type Props = {
  path: string;
};

export default function Redirect({ path }: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push(path);
  }, []);

  return null;
}
