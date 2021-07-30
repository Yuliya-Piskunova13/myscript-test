import Foundation


@objc(MyScriptView)
class MyScriptView: RCTViewManager {
  
  override func view() -> UIView! {
    return HomeViewController().view
  }
  
//  override static func requiresMainQueueSetup() -> Bool {
//    return true
//  }
}
