# aethon

__Aethon.js__ is a fast JavaScript library for building web apps.


# Code Example

```js
import Aethon, {Component} from 'aethon'
import AethonDOM from 'aethon-dom'

class App extends Component {
    render() {
        return (
            <div>
                <a href=''>Click here</a>
            </div>
        )
    }
}
AethonDOM.render(<App />,document.getElementById('root'))
```

# Getting started

```sh
npm install aethon aethon-dom -S
```