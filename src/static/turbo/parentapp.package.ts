export const parentAppPackage = {
  name: "my-turborepo",
  private: true,
  scripts: {
    build: "turbo build",
    dev: "turbo dev",
    lint: "turbo lint",
    format: 'prettier --write "**/*.{ts,tsx,md}"',
  },
  devDependencies: {
    prettier: "^3.2.5",
    turbo: "^2.3.3",
    typescript: "5.5.4",
  },
  engines: {
    node: ">=18",
  },
  packageManager: "yarn@1.22.17",
  workspaces: ["apps/*"],
  volta: {
    node: "20.0.0",
    yarn: "1.22.17",
  },
};
