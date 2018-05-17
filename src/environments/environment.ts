export const environment = {
    production: false,

    region: 'eu-west-1',

    // // custom: eu-west-1:7c427f43-026b-4ac9-909c-841f8fd5f66b  | us-east-1:fbe0340f-9ffc-4449-a935-bb6a6661fd53
    identityPoolId: 'eu-west-1:7c427f43-026b-4ac9-909c-841f8fd5f66b',
    userPoolId: 'eu-west-1_D7Kci90np',   // custom: eu-west-1_D7Kci90np | us-east-1_PGSbCVZ7S
    clientId: '6ir63qvd53tj5ekcj69pepan3g', // custom: 6ir63qvd53tj5ekcj69pepan3g | hh5ibv67so0qukt55c5ulaltk

    rekognitionBucket: 'rekognition-pics',
    albumName: 'usercontent',
    bucketRegion: 'eu-west-1', // custom: eu-west-1 | us-east-1

    ddbTableName: 'LoginTrail',

    cognito_idp_endpoint: '',
    cognito_identity_endpoint: '',
    sts_endpoint: '',
    dynamodb_endpoint: '',
    s3_endpoint: ''

};

