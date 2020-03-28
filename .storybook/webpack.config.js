const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "./tsconfig.json"
        }
      },
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          shouldExtractLiteralValuesFromEnum: true,
          skipPropsWithoutDoc: true,
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
        }
      }
    ]
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
