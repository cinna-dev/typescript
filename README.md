# TypeScript

## Installation

```bash
npm i typescript
```

or global

```bash
npm i -g typescript
```


## Usage

```bash
tsc
```

## Configuration

create a `tsconfig.json` in **root**

```json
{
  "compilerOptions": {
    "target": "esnext",
    "watch": true,
    "moduleResolution": "node",
    "lib": ["dom", "es2020"] // adds external libraries like Classes from  the DOM
    "outDir": "dist",
    "rootDir": "src",
    //"strict": true
  }
}
```

## File Watch

`tsconfig.json`

```json
{
  "compilerOptions": {
    "watch": true
  }
}
```

just run

```bash
tsc
```

### Terminology

explicit types : assign a type to a variable/constant
type interference : typescript evaluates the type automatically

'declare' is used to tell the compiler 'this thing (usually a variable) exists already, and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript"
