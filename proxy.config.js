const proxy = [
    {
      target: 'https://app.sysfinan.com/api/auth',
      secure: false,
      logLevel: "debug",
      changeOrigin: true
    }
  ];
  module.exports = proxy;