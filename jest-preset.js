module.exports = {
    setupFilesAfterEnv: ["@testing-library/react-native/dont-cleanup-after-each"],
    transformIgnorePatterns: [
      "node_modules/(?!react-native|@react-native|react-navigation|@react-navigation)",
    ],
  };
  