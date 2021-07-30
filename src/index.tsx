import React from 'react';
import { NativeModules, requireNativeComponent } from 'react-native';

const { MyscriptIntegration } = NativeModules;
const MyObjcClass = NativeModules.MyObjcClass;
console.log(NativeModules);

const Switch = requireNativeComponent('MyScriptView');
console.log(Switch);

console.log(MyObjcClass);
console.log(MyscriptIntegration);

//const Myscript = requireNativeComponent('MyscriptIntegration', DrawerView)

export default class DrawerView extends React.Component {
  render() {
    return <Switch />;
  }
}
