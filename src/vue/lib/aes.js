"use strict";

/*
	AES helper util used for email address obfuscation
		- Tristan Gauci (2025)
 */

export default class Aes {
	constructor(keyText) {
		this.keyText = keyText;
		this.keyBits = 256;
		this.nonceBytes = 3;
		this.blockBytes = 16;
		this.bitsPerByte = 8;
	}

	async decrypt(encryptedText) {
		if (!("subtle" in window.crypto)) {
			throw Error("AES is not available in this browser or context. You must be connected via HTTPS to use AES.");
		}

		const keyBytes = this._base64Bytes(this.keyText);
		const options = { "name": "AES-CTR" };
		const key = await window.crypto.subtle.importKey("raw", keyBytes, options, false, ["decrypt"]);

		const inputBytes = this._base64Bytes(encryptedText);
		const nonceBytes = inputBytes.slice(0, this.nonceBytes);
		const codeBytes = inputBytes.slice(this.nonceBytes);

		const counterBytes = new Uint8Array(this.blockBytes);
		counterBytes.set(nonceBytes);

		const aesOptions = {
			"name": "AES-CTR",
			"counter": counterBytes,
			"length": (this.blockBytes - this.nonceBytes) * this.bitsPerByte
		};

		const plainBytes = await window.crypto.subtle.decrypt(aesOptions, key, codeBytes);
		const decoder = new TextDecoder();
		const plainText = decoder.decode(plainBytes);

		return plainText;
	}

	_base64Bytes(text) {
		const values = new Uint8Array(text.length);
		for (let i = 0; i < text.length; ++i) {
			const code = text.charCodeAt(i);
			values[i] = this._base64GetValue(code);
		}

		const length = Math.floor(3 * values.length / 4);
		const bytes = new Uint8Array(length);
		for (let i = 0, j = 0; i < values.length; ++i) {
			const r = 2 * (i % 4);
			if (r !== 0) bytes[j++] = ((values[i-1] << r) & 0xff) | (values[i] >> (6 - r));
		}

		return bytes;
	}

	_base64GetValue(code) {
		if (code === 45) return 63;
		if (code < 58) return code - 48;
		if (code < 91) return code - 29;
		if (code === 95) return 62;
		return code - 87;
	}
}