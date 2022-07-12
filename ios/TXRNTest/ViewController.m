//
//  ViewController.m
//  TXRNTest
//
//  Created by chenxiaojie on 2022/6/20.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import "TestViewController.h"

//#import <React/RCTBundleURLProvider.h>
//#import <React/RCTEventEmitter.h>

@interface ViewController ()<UITableViewDataSource, UITableViewDelegate, RCTBridgeModule>

@property (nonatomic, strong) UITableView *tableView;
@property (nonatomic, strong) NSArray *dataAry;

@end

@implementation ViewController

- (UITableView *)tableView {
    if (_tableView == nil) {
        _tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height) style:UITableViewStylePlain];
        _tableView.dataSource = self;
        _tableView.delegate = self;
    }
    return _tableView;
}

- (NSArray *)dataAry {
    if (_dataAry == nil) {
        _dataAry = @[
            @"原生页面",
            @"TXRNTest",
            @"ActivityIndicator",
            @"Button",
            @"TouchableOpacity",
            @"Image",
            @"ImageBackground",
            @"KeyboardAvoidingView",
            @"Pressable",
            @"StatusBar",
            @"Switch",
            @"Text",
            @"TextInput",
            @"Flex",
            @"Flex2",
            @"WebView",
            @"FlatList",
            @"ScrollView",
            @"Swiper",
            @"NativeModulesDemo",
            @"StackNavi",
            @"Test",
        ];
    }
    return _dataAry;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.title = @"RN混合开发";
    [self.view addSubview:self.tableView];
}

#pragma mark - UITableViewDataSource
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.dataAry.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *identifier = @"UITableViewCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:identifier];
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:identifier];
    }
    cell.textLabel.text = self.dataAry[indexPath.row];
    return cell;
}

#pragma mark - UITableViewDelegate
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    [tableView deselectRowAtIndexPath:indexPath animated:NO];
    if (indexPath.row == 0) {
        TestViewController *testVC = [[TestViewController alloc] init];
        [self.navigationController pushViewController:testVC animated:YES];
        return;
    }
    NSString *moduleName = self.dataAry[indexPath.row];
    
    // 手动拼接jsCodeLocation用于开发环境
    // 模拟器
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    // 真机
    jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.104:8081/index.bundle?platform=ios"];
    // release之后从包中读取名为main的静态js bundle
    //jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    // 通过RCTBundleURLProvider生成，用于开发环境
    //jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:moduleName initialProperties:
                             @{ @"scores" : @[
                                 @{
                                     @"name" : @"Alex",
                                     @"value": @"42"
                                 },
                                 @{
                                     @"name" : @"Joel",
                                     @"value": @"10"
                                 }
                             ]
                             } launchOptions:nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    if (indexPath.row == self.dataAry.count - 2) {
        vc.modalPresentationStyle = UIModalPresentationFullScreen;
        [self presentViewController:vc animated:YES completion:^{
                
        }];
    } else {
        [self.navigationController pushViewController:vc animated:YES];
    }
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 50;
}

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(callback:(NSString *)string) {
    NSLog(@"string = %@, self = %@", string, self);
    dispatch_async(dispatch_get_main_queue(), ^{
        [self dismissViewControllerAnimated:YES completion:nil];
    });
}

@end
