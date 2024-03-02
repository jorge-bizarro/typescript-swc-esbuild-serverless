- for UNIX
  nvm install `cat .nvmrc`
  nvm use `cat .nvmrc`

- for Windows (powershell)

```bash
nvm install $(Get-Content .\.nvmrc)
```

```bash
nvm use $(Get-Content .\.nvmrc)
```

```bash
npm install
```

Build

- esbuild

```bash
  npx esbuild --bundle --minify --sourcemap --outdir=dist --platform=node --target=es2022 src/\**/*.ts --analyze
```

- SWC

_Using .swcrc file_

```bash
  npx swc src -d dist
```
