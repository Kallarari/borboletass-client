
const withPWA = require('next-pwa')({
  dest: "public",
});

const nexConfig = {
  reactStrictMode:true,
}
module.exports = withPWA(nexConfig);


/* 

export default withPWA({
    reactStrictMode:true,
    disable: process.env.NODE_ENV === "development",
    dest:"public",
    register: true,
    skipWaiting: true,
    compiler:{
      ssr:true,
      displayName:true,
      
    }
}) */