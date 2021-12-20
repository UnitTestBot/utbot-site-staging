"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[783],{95573:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return k}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),r=n(23017),l=n(78603),s=(n(92586),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/usage/vscode-extension-settings.md"}});var u={_frontmatter:p},d=r.Z;function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vs-code-extension-settings"},"VS Code Extension Settings"),(0,o.kt)("p",null,"UnitTestBot extension for VSCode provides flexibility in its configuration.\nExtension settings might be accessed as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},"File > Preferences > Settings  (or Ctrl + ,)"),", then navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Extensions > UnitTestBot"),"."),(0,o.kt)("p",null,"In case you are looking for some specific setting(s), search bar might be used."),(0,o.kt)("img",{src:l.Z,className:"usageGif"}),(0,o.kt)("p",null,"For convenience, all the settings are divided into the following groups: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment"),(0,o.kt)("li",{parentName:"ul"},"Paths"),(0,o.kt)("li",{parentName:"ul"},"Generation"),(0,o.kt)("li",{parentName:"ul"},"Stubs"),(0,o.kt)("li",{parentName:"ul"},"Visual"),(0,o.kt)("li",{parentName:"ul"},"Advanced")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("h4",{id:"utbot-host"},"UTBot Host"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string, that represents host address"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.deployment.utbotHost"),"."),(0,o.kt)("h4",{id:"utbot-port"},"UTBot Port"),(0,o.kt)("p",null,"Address of the host UTBot Server is running on. Learn more about UTBot Server installation. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number, that represents a port"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"2121"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.deployment.utbotPort"),"."),(0,o.kt)("p",null,"The port used by the client to connect to UTBot Server via a gRPC channel.\nThis field should be filled accordingly to the UTBot Server Port parameter specified during the UTBot Server installation."),(0,o.kt)("h4",{id:"remote-path"},"Remote Path"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UNIX path"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"<empty string>"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.deployment.remotePath"),"."),(0,o.kt)("p",null,"Remote path configuration specifies the path to the project on a remote host."),(0,o.kt)("p",null,"When VSCode Remote Scenario is used, Remote Path matches the workspace path and it can be automatically determined by UnitTestBot extension.\nIn case you work via SFTP scenario (or any equivalent) Remote Path should be set manually and correspond to the location of the project on a remote host."),(0,o.kt)("h2",{id:"paths"},"Paths"),(0,o.kt)("h4",{id:"build-directory"},"Build Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UNIX path"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.paths.buildDirectory"),"."),(0,o.kt)("p",null,"Relative path to the build directory. File ",(0,o.kt)("inlineCode",{parentName:"p"},"compile_commands.json")," (as well as link_commands.json) should be located in the build folder. "),(0,o.kt)("h4",{id:"cmake-options"},"CMake options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string, that represents valid CMake flags"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-DCMAKE_EXPORT_COMPILE_COMMANDS=ON -DCMAKE_EXPORT_LINK_COMMANDS=ON"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.paths.cmakeOptions.description"),"."),(0,o.kt)("p",null,"Options passed to CMake command when auto build your project first time you open it."),(0,o.kt)("h4",{id:"source-directories"},"Source Directories"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UNIX paths, separated by commas"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"<empty>"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.paths.sourceDirectories"),"."),(0,o.kt)("p",null,"Relative paths to the directories, that are marked as source directories. UTBot looks for source file in specified directories."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"📝",(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",{parentName:"blockquote"},'Please, prefer using UTBot Explorer View instead of raw settings. UTBot Explorer View makes it possible to mark/unmark directories as "source directories".')),(0,o.kt)("h4",{id:"tests-directory"},"Tests Directory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"UNIX path"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.paths.testsDirectory"),"."),(0,o.kt)("p",null,"Relative path to the directory where generated tests will be placed."),(0,o.kt)("h2",{id:"tests-generation"},"Tests Generation"),(0,o.kt)("h4",{id:"generate-for-static-functions"},"Generate for Static Functions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.testsGeneration.generateForStaticFunctions"),"."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", UnitTestBot generates tests for C static functions, otherwise such functions won't be proceeded. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"📝",(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",{parentName:"blockquote"},"In C, a static function is not visible outside of its translation unit, which is the object file it is compiled into. In other words, making a function static limits its scope. Due to this, you can think of a static function as of  \"private\" function in other programming languages. It's commonly believed, that such functions shouldn't be tested, as they are not visible outside and can't be called elsewhere. However, as some projects (e.g. GNU Coreutils) tend to implement the main functionality inside static functions, UnitTestBot gives an opportunity to test them as well. ")),(0,o.kt)("h2",{id:"apply-huaweis-five-step-rule-standard"},"Apply Huawei's Five Step Rule Standard"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),":  ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.testsGeneration.applyHuawei'sFiveStepRuleStandard"),"."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," UnitTestBot generates tests in accordance with Huawei's Five Step Rule Standard (verbose formatting), otherwise the tests are generated in a simpler form and take less space (lines of code)."),(0,o.kt)("h2",{id:"stubs"},"Stubs"),(0,o.kt)("h4",{id:"implicitly-generate-stubs"},"Implicitly Generate Stubs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),":  ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.stubs.implicitlyGenerateStubs"),"."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", UTBot will generate stubs for the functions from external modules automatically."),(0,o.kt)("p",null,"The function is a part of external module with respect to function (or file) the tests are generated for if it's a part of different linking unit. UTBot detects linking units via link_commands.json."),(0,o.kt)("h4",{id:"use-stubs"},"Use Stubs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.stubs.useStubs"),"."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", UTBot will use generated stubs from ",(0,o.kt)("inlineCode",{parentName:"p"},"<testsDir>/stubs")," folder instead of real files."),(0,o.kt)("h2",{id:"visual"},"Visual"),(0,o.kt)("h4",{id:"show-test-results"},"Show Test Results"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.visual.showTestResults"),"."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", the results of the run tests are displayed on the left side of the test headers."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"✔️ ",(0,o.kt)("strong",{parentName:"p"},"Recommendation")),(0,o.kt)("p",{parentName:"blockquote"},"It's recommended to set given preference to ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," in case you use a separate test runner extension for Visual Studio Code.")),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("h4",{id:"enable-developer-mode"},"Enable Developer Mode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),":  ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.advanced.enableDeveloperMode"),"."),(0,o.kt)("p",null,"Enables hidden developer commands useful for debug."),(0,o.kt)("h4",{id:"use-deterministic-searcher"},"Use Deterministic Searcher"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean (checkbox)"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),":  ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.advanced.useDeterministicSearcher"),"."),(0,o.kt)("p",null,"Use deterministic searcher to traverse bitcode in the same way every time. It may significantly slow down tests generation."),(0,o.kt)("h4",{id:"timeout-per-function"},"Timeout Per Function"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number, that represents seconds"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"30"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.advanced.timeoutPerFunction"),"."),(0,o.kt)("p",null,"Maximum time (in seconds) is allowed for generation tests per function.\nSet to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable it."),(0,o.kt)("h4",{id:"timeout-per-test"},"Timeout Per Test"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Expected value format"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number, that represents seconds"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON identifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"unittestbot.advanced.timeoutPerTest"),"."),(0,o.kt)("p",null,"Maximum time (in seconds) allowed for a single test being run. After that, the test is automatically cancelled.\nThe option can be used if some of the generated tests force the user code to hang; in such a case, ",(0,o.kt)("a",{parentName:"p",href:"/docs/cpp/usage/run-generated-tests"},"Run All Tests and Show Coverage")," option will also hang. However, if the timeout for test is specified, hanging tests will be cancelled silently and the coverage will be shown.\nSet to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable it."))}k&&k===Object(k)&&Object.isExtensible(k)&&!k.hasOwnProperty("__filemeta")&&Object.defineProperty(k,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/usage/vscode-extension-settings.md"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-usage-vscode-extension-settings-md-56ffefb96139246b7cdf.js.map