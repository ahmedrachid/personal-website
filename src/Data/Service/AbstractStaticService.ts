import { injectable } from "inversify";



@injectable()
export default abstract class AbstractStaticService {

  protected get delayInSeconds(): number {
    return 1;
  }

  protected async fakeLoad<T>(value: T): Promise<T> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, this.delayInSeconds * 1000);
    });
  }

}