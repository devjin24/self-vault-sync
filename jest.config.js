module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>"],
	testMatch: [
		"**/__tests__/**/*.[jt]s?(x)",
		"**/?(*.)+(spec|test).[tj]s?(x)",
	],
	moduleNameMapper: {
		"^src/(.*)$": "<rootDir>/src/$1", // src/ 경로 매핑
	},
	modulePaths: ["<rootDir>"],
	moduleDirectories: ["node_modules", "<rootDir>"],
};
