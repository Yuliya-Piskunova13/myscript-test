require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-test"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/Yuliya-Piskunova13/react-native-test.git", :tag => "#{s.version}" }

  s.header_dir = 'IInkUIReferenceImplementation'

  s.source_files = ['IInkUIReferenceImplementation/Classes/**/*',
    'ios/**/*.{h,m,mm,swift}',
  'IInkUIReferenceImplementation/Classes/**']
  s.preserve_paths = 'IInkUIReferenceImplementation/Classes/**'

  s.dependency 'MyScriptInteractiveInk-Runtime', '1.4.1'

  s.dependency "React-Core"

end
