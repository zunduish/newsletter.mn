export const getEnv = (name: string, defaultValue?: any) => {
  let env;

  if (typeof window === "undefined") {
    env = process.env;
  } else {
    env = (window as any).env || {};
  }

  if (defaultValue) {
    return defaultValue;
  }

  return env[name];
};

export const ErxesImageUrl =
  "https://speakup-admin.apu.mn/gateway/read-file?key=";
