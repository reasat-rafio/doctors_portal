import { useRouter } from "next/router";

export const ListFn = (text: string, icon: any, path: string) => {
   const router = useRouter();
   return {
      text,
      icon,
      onClick: () => router.push(`/${path}`),
   };
};
