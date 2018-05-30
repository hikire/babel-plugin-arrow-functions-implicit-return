# Arrow functions implicit return

This plugin allows you to use arrow functions like [do expressions](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch5.md#statement-completion-values).

## Examples

```js
const shows = ["Death Note", "Steins;Gate", "Maho shojo XD"];
const nextShow = prevShow => {
    const prevIndex = shows.findIndex(show => show === prevShow) || 0;
    shows[(prevIndex + 1) % shows.length];
};
```

### With JSX

```js
const getUserNav = () => {
    <UserConsumer>
        {
            (user) => {
                if(user){
                    <span>Hello {user.name}!<span>;
                } else {
                    <a onClick={showLogin}>Login</a>;
                }
            }
        }
    </UserConsumer>
};
```

## Installation

```sh
npm install --save-dev babel-plugin-arrow-functions-implicit-return
```

## Usage

### Via `.babelrc` (Recommended)

#### .babelrc

```js
{
    "plugins": ["arrow-functions-implicit-return"]
}
```

### Via CLI

```sh
babel --plugins arrow-functions-implicit-return script.js
```

### Via Node API

```js
require("babel-core").transform("code", {
    plugins: ["arrow-functions-implicit-return"]
});
```
