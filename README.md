# Private Local storage

Store data in local storage securily

## Usage/Examples

```javascript
import { PrivateLocalStorage } from "private-local-storage";

let SecureStorage = new PrivateLocalStorage({
  privateKey: "abcd1234#$",
});

function App() {
  handleSetItemClick = () => {
    SecureStorage.setItem("somekey", 'someValue)
  }

  return<button onClick={this.handleSetItemClick}>Set Item</button>
}
```

## Available Methods

#### Get item

```http
SecureStorage.getItem()
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `key`     | `string` | **Required**. Your local storage item key |

#### .getItem(key)

#### Set item

```http
SecureStorage.setItem()
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `key`     | `string` | **Required**. Your local storage item key   |
| `value`   | `any`    | **Required**. Your local storage item value |

#### .setItem(key, value)

#### Delete item

```http
SecureStorage.deleteItem()
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `key`     | `string` | **Required**. Your local storage item key |

#### .deleteItem(key, value)
