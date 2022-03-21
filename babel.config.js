module.exports = {
  "babelrc": true,
  "babelrcRoots": [],
  "parserOpts": {
    "sourceType": "unambiguous"
  },
  "presets": [
    [
      "@oriflame/babel-preset",
      {
        "modules": false,
        "react": true,
        "library": true,
        "graphql": false,
        "removePropTypes": false,
        "srcFolder": "src",
        "env": {
          "targets": {
            "browsers": [
              "last 3 versions",
              "not ie > 0"
            ]
          }
        }
      }
    ]
  ]
};