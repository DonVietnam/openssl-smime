# openssl-smime

Node.js обёртка над функцией OpenSSL S/MIME.

Полную документацию по функции S/MIME и её параметрам можно найти по [ссылке](https://www.openssl.org/docs/man1.0.2/man1/openssl-smime.html).

## Требования

- В системе должен быть установлен OpenSSL Toolkit.

## Установка

`npm i openssl-smime`

## Примеры использования

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

## Параметры

### smime( method, options, content )

| Параметр | Тип | Описание |
| --- | --- | --- |
| method | sting | Один из методов фунции S/MIME: sign/resign/encrypt/decrypt/verify/pk7out |
| options | object | Объект с параметрами для метода. Список можно найти в документации OpenSSL. |
| content | string/Buffer | Если опущен параметр `options.in`, в метод OpenSSL будет передан параметр `content` для кодирование или декодирования. |
