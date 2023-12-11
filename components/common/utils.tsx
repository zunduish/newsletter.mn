// import { getEnv } from "@/utils";

// export const readFile = (value: string, width?: number): string => {
//   if (
//     !value ||
//     isValidURL(value) ||
//     (typeof value === "string" && value.includes("http")) ||
//     (typeof value === "string" && value.startsWith("/"))
//   ) {
//     return value;
//   }

//   const { REACT_APP_API_URL } = "getEnv()";

//   let url = `${REACT_APP_API_URL}/read-file?key=${value}`;

//   if (width) {
//     url += `&width=${width}`;
//   }

//   return url;
// };

// export const isValidURL = (url: string) => {
//   try {
//     return Boolean(new URL(url));
//   } catch (e) {
//     return false;
//   }
// };
