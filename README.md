# openssl-smime

Node.js wrapper for OpenSSL S/MIME utility.

[Documentation in Russian](langs/README-RU.md)

Full documentation on the S / MIME function and its parameters can be found at [link](https://www.openssl.org/docs/man1.0.2/man1/openssl-smime.html).

## Requirements

- The system must have the OpenSSL Toolkit installed.

## Installation

`npm i openssl-smime`

## Examples of using

```
const smime = require( 'openssl-smime' );

( async () => {

  const data = 'some text';

  const pkcs7 = await smime( 'sign', {
    nointern: true,
    nodetach: true,
    nocerts: true,
    nochain: true,
    outform: 'PEM',
    signer: 'path/to/cert/cert.pem',
    inkey: 'path/to/key/key.pem',
  }, data );

  const verified = await smime( 'verify', {
    noverify: true,
    inform: 'PEM',
    nointern: true,
    certfile: 'path/to/cert/cert.pem',
    CAfile: 'path/to/cert/cert.pem'
  }, pkcs7 );

} )();
```

## Arguments

### smime( method, options, content )

| Argument | Type | Description |
| --- | --- | --- |
| method | sting | One of the S/MIME function operations: sign / resign / encrypt / decrypt / verify / pk7out |
| options | object | An object with parameters for the operation. The list can be found in the OpenSSL documentation. |
| content | string/Buffer | If the `options.in` parameter is omitted, the` content` parameter will be passed to the OpenSSL operation for encoding or decoding. |

