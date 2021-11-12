const { Readable } = require( 'stream' );

const NO_FLAG_OPTIONS = [ 'cipher' ];

const getContentStream = ( content ) => {
  if ( !( content instanceof Buffer ) ) {
    return Readable.from( Buffer.from( content ) );
  } else {
    return Readable.from( content );
  }
};

const stringFromBuffers = ( buffers ) => Buffer.concat( buffers ).toString( 'utf-8' );

const optionsToArgs = ( options ) => {
  const args = [];

  for ( const option in options ) {
    const value = options[ option ];
    if ( value ) {
      switch ( typeof value ) {
      case 'boolean': args.push( `-${ option }` );
        break;
      case 'string' :
        NO_FLAG_OPTIONS.includes( option ) ? args.push( `-${ value }` ) : args.push( `-${ option }`, value );
        break;
      default: throw new TypeError( `Unexpected command option type ${ typeof value }!` );
      }
    }
  }

  return args;
};

module.exports = {
  getContentStream,
  stringFromBuffers,
  optionsToArgs
};
