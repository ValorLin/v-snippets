# v-snippets README

My personal snippets for `javascript` and `typescript`.

## Features
### Console Snippets

`cl` → console.log()

```javascript
console.log($1$TM_SELECTED_TEXT);
$2
```

`cl-` → console.log('-----------------------------')

```javascript
console.log('---------------- Log -----------------');
console.log($1)
console.log('-------------- Log End ---------------');
```

`cw` → console.warn()

```javascript
console.warn($1);
$2
```

`ce` → console.error()

```javascript
console.error($1);
$2
```

`cd` → console.debug()

```javascript
console.debug($1);
$2
```

`ci` → console.info()

```javascript
console.info($1);
$2
```

`ct` → console.time()

```javascript
console.time('$1');
console.timeEnd('$1');
```

### Function Snippets

`f` → function() {}

```javascript
function() {
  $1
}
```

`f,` → function() {},

```javascript
function() {
  $1
},
```

`fn` → function name() {}

```javascript
function ${1:name}(){
  $2
}
```

`fc` → (function () {})()

```javascript
(function (){
  $2
})()
```

`>` → () => $1

```javascript
($1) => $2
```

`>{` → () => {$1}

```javascript
($1) => {
  $2
}
```

### Language Keyword Snippets

`a` → async

```javascript
async 
```

`d` → debugger;

```javascript
debugger; // eslint-disable-line
```

`r` → return

```javascript
return $1
```

`r;` → return $1;

```javascript
return $1;
```

`t` → this

```javascript
this
```

`imp` → import Module from 'module'

```javascript
import $2 from '$1'
```

### 1.0.0

Initial release

---
