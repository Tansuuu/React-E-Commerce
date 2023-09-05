export class Resource<T> {
  constructor(
    public status: Status,
    public message: String | undefined,
    public data: T | undefined
  ) {}

  static Success<T>(data: T, message: String | undefined) {
    return new Resource<T>(Status.SUCCESS, message, data);
  }

  static Error<T>(message: String) {
    return new Resource<T>(Status.ERROR, message, undefined);
  }

  static Loading<T>() {
    return new Resource<T>(Status.LOADING, undefined, undefined);
  }
}

export enum Status {
  SUCCESS,
  LOADING,
  ERROR,
}
