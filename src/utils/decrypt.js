var CryptoJS = require("crypto-js");

export default function decrypting(url) {
	var result = CryptoJS.AES.decrypt(url, "ZGrl5Vwgp3k9zDmd2qoNOLuStPRv0asc");
	var string = result.toString(CryptoJS.enc.Utf8);
	return string;
}
