const { spawn } = require( 'child_process' );
const { getContentStream, stringFromBuffers, optionsToArgs } = require( './helpers' );
const { OpensslSMIMEError } = require( './errors' );

const smime = ( method, options, content = '' ) => new Promise( ( resolve, reject ) => {
  const args = optionsToArgs( options );
  const smime = spawn( 'openssl', [ 'smime', `-${ method }`, ...args ] );
  const successData = [];
  const errorData = [];

  if ( !options.in ) {
    getContentStream( content ).pipe( smime.stdin );
  }

  smime.stdout.on( 'data', ( data ) => {
    successData.push( data );
  } );

  smime.stderr.on( 'data', ( data ) => {
    errorData.push( data );
  } );

  smime.on( 'close', ( code ) => {
    if ( code === 0 ) {
      resolve( stringFromBuffers( successData ) );
    } else {
      reject( new OpensslSMIMEError( stringFromBuffers( errorData ), code ) );
    }
  } );
} );

module.exports = smime;
