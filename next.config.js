/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// MINI-CSS-EXTRACT-PLUGIN
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Use mini-css-extract-plugin on the client-side only
      config.plugins.push(new MiniCssExtractPlugin({
        filename: 'static/css/[contenthash].css',
        chunkFilename: 'static/css/[contenthash].css',
        ignoreOrder: true,
      }));
      config.module.rules.push({
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      });
    }
    return config;
  },
};