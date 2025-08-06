/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{ts,tsx,}': ['eslint --fix'],
  '*.{ts,tsx,css,json,md,yml,yaml}': ['prettier --write'],
};
