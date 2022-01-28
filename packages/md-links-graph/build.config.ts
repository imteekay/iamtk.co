export default {
  entries: ['./src/index'],
  declaration: true,
  clean: true,
  rollup: {
    esbuild: {},
    emitCJS: true
  }
};
