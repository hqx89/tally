const root = process.cwd()

module.exports = {
  root,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  sourcemap: false,
  port: 8080,
  esbuildTarget: 'es2020',
}