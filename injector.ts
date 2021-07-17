import {CLASS_CONSTRUCTOR_REGEX, FUNCTION_SIGNATURE_REGEX} from './constants';
import {Consturctor, Func, InjectorParams} from './contracts';

export class Injector {
  constructor(private params: InjectorParams) {
  }

  private getArguments(cb: Function): any[] {
    const cbString: string = cb.toString();
    let parsedSignature: RegExpExecArray;
    if (cbString.startsWith('class')) {
      parsedSignature = CLASS_CONSTRUCTOR_REGEX.exec(cbString);
    } else {
      const signature = cbString.split('\n')[0];
      parsedSignature = FUNCTION_SIGNATURE_REGEX.exec(signature);
    }

    if (!parsedSignature) {
      return [];
    }
    const cbArgs = parsedSignature[1]
      .split(",")
      .map(argument => this.params[argument.trim()]);
    
    return cbArgs;
  }

  public inject<T>(cb: Func<T>, thisArg: any = null): T {
    return cb.apply(thisArg, this.getArguments(cb));
  }

  public construct<T>(ctor: Consturctor<T>): T {
    const ctorArgs = [null].concat(this.getArguments(ctor));
    return new (Function.prototype.bind.apply(ctor, ctorArgs));
  }

  public set(key: string, value: any) {
    this.params[key] = value;
  }
  public remove (key: string) {
    delete this.params[key];
  }
}