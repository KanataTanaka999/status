```sh
# next.js
docker-compose run front npx create-next-app@latest .
# npm install --save-dev concurrently
docker-compose run front npm install --save-dev concurrently
```json
# package.json
"scripts": {
  "dev": "concurrently \"next dev\" \"tsc -w\"",
  ...
}
```
# chakra-ui
# docker-compose run front npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
# framer motion
docker-compose run front npm i framer-motion
# redux
docker-compose run front npm install @reduxjs/toolkit react-redux redux-persist redux-logger
```

```sh
# create next app (choose all default)
What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use src/ directory? No
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? No
```


## 本番ビルド時
```
docker-compose -f docker-compose.stg.yml run front npm install
docker-compose run front npm run build
```
