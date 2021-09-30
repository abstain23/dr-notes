interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}
type PromiseType<T extends any> = T extends Promise<infer U> ? U : T

type ParamType<T> = T extends (...args: infer P) => any ? P: T

// 修改 Connect 的类型，让 connected 的类型变成预期的类型
// type a = typeof EffectModule
// const A:a = {
  
// }
type Connect = (module: EffectModule) => ({
  delay(input: PromiseType<ParamType<typeof module.delay>[0]>): Action<string>
  setMessage(action: Required<ParamType<typeof module.setMessage>[0]['payload']>): Action<number>
});         

const connect: Connect = m => ({
  delay: (input: number) => ({
    type: 'delay',
    payload: `hello 2`
  }),
  setMessage: (input: Date) => ({
    type: "set-message",
    payload: input.getMilliseconds()
  })
});

type Connected = {
  delay(input: number): Action<string>;
  setMessage(action: Date): Action<number>;
};

export const connected: Connected = connect(new EffectModule());
