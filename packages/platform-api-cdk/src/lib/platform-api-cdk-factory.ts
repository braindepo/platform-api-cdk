export class PlatformApiCdkFactory {
  constructor(private readonly apiUrl: string ) {}

  hello(): string {
    return 'platform-api-cdk-3';
  }
}
