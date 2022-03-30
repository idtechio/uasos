import React, { useEffect } from "react";
import { useRouter } from "next/router";
type Props = {
  path: string;
};

export default function Redirect({ path }: Props) {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("redirecting to" + path);
    router.push(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
