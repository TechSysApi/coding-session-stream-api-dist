var variables={
  "name": "@ch-post-logistics/coding-session-stream-api",
  "version": "1.0.0-feature-version-v1.1",
  "description": "Coding Session Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "erkennen.codieren.pakete@post.ch",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "^0.11.2",
    "apikana-defaults": "0.0.100",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "erkennen.codieren.pakete@post.ch",
    "namespace": "logistics.coding.session",
    "shortName": "coding-session",
    "projectName": "coding-session-stream-api",
    "title": "Coding Session Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.Logistics.Coding.Session.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Coding.Session.StreamApi",
    "mqs": "Kafka",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}