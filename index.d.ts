export type InOutFormType = 'SMIME' | 'PEM' | 'DER';

export type KeyFormat = 'PEM' | 'ENGINE';

export type SMIMEMethods = 'encrypt' | 'decrypt' | 'sign' | 'verify' | 'resign' | 'pk7out';

export interface SMIMEOptions {
  in?: string,
  inform?: InOutFormType,
  out?: string,
  outform?: InOutFormType,
  stream?: boolean,
  indef?: boolean,
  noindef?: boolean,
  text?: boolean,
  md?: string,
  cipher?: string,
  nointern?: boolean,
  noverify?: boolean,
  nochain?: boolean,
  nosigs?: boolean,
  nocerts?: boolean,
  noattr?: boolean,
  binary?: boolean,
  nodetach?: boolean,
  certfile?: string,
  recip?: string,
  inkey?: string,
  passin?: string,
  rand?: string,
  to?: string,
  from?: string,
  subject?: string,
  content?: string,
  CAfile?: string,
  CApath?: string,
  purpose?: string,
  ignore_critical?: boolean,
  crl_check?: boolean,
  crl_check_all?: boolean,
  policy_check?: boolean,
  extended_crl?: boolean,
  x509_strict?: boolean,
  policy?: string,
  check_ss_sig?: boolean,
  signer?: string
}

export function smime( method: SMIMEMethods, options: SMIMEOptions, content: string | Buffer ): Promise< string >;
