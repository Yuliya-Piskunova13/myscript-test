import { NativeModules } from 'react-native';

type TestType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Test } = NativeModules;

export default Test as TestType;
