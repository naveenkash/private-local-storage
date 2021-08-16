import sha256 from "crypto-js/sha256";
import AES from "crypto-js/aes";
import encUTF8 from "crypto-js/enc-utf8";

export function PrivateLocalStorage({ privateKey }) {
  this.privateKey = privateKey;
  this.storage = window.localStorage;
}

PrivateLocalStorage.prototype.getItem = function (key) {
  const _ = this;
  let hashedKey = sha256(key);
  let value = _.storage.getItem(hashedKey);
  if (typeof value !== "string") {
    return value;
  }
  let bytes = AES.decrypt(value, _.privateKey);
  let decryptedValue = bytes.toString(encUTF8);
  try {
    return JSON.parse(decryptedValue);
  } catch (error) {
    return decryptedValue;
  }
};

PrivateLocalStorage.prototype.setItem = function (key, data) {
  const _ = this;
  if (!key) {
    throw new Error("Key is missing!");
  }
  let hashedKey = sha256(key);
  let value = JSON.stringify(data);
  let encryptedData = AES.encrypt(value, _.privateKey);
  _.storage.setItem(hashedKey, encryptedData);
};
