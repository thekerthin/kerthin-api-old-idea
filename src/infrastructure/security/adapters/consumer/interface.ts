export interface RegisterOAuth2ConsumerParams {
  consumerId: string;
  applicationName?: string;
  redirectUrl?: string;
}

export interface RegisterBasicAuthConsumerParams {
  consumerId: string;
  username: string;
  password: string;
}
