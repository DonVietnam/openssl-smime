const OPENSSL_ERRORS = {
  1: 'An error occurred parsing the command options!',
  2: 'One of the input files could not be read!',
  3: 'An error occurred creating the PKCS#7 file or when reading the MIME message!',
  4: 'An error occurred decrypting or verifying the message!',
  5: 'The message was verified correctly but an error occurred writing out the signers certificates!'
};

class OpensslSMIMEError extends Error {
  constructor( message, code, ...args ) {
    if ( OPENSSL_ERRORS[ code ] ) {
      super( `${ OPENSSL_ERRORS[ code ] }\n${ message }`, ...args );
    } else {
      super( message, ...args );
    }
  }
}

module.exports = {
  OPENSSL_ERRORS,
  OpensslSMIMEError
};
