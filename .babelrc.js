const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  "presets": [
    "next/babel", 
    ["@babel/preset-env", {"modules": isTest ? 'commonjs' : false}]
  ],
  "plugins": [
    ["module-resolver", {
    "root": ["./dist"]/*,
    "alias": {
        "utilities": "./utilities",
        "services": "./services",
        "contexts": "./contexts",
        "components": "./components",
        "containers": "./containers"
    }*/
    }],
    /*[
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]*/
]
}
