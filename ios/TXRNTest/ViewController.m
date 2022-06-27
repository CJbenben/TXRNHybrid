//
//  ViewController.m
//  TXRNTest
//
//  Created by chenxiaojie on 2022/6/20.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
//#import <React/RCTBundleURLProvider.h>
//#import <React/RCTEventEmitter.h>

@interface ViewController ()<UITableViewDataSource, UITableViewDelegate>

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
            @"TXRNTest",
            @"ActivityIndicator",
            @"Button",
            @"FlatList",
            @"Image",
            @"ImageBackground",
            @"KeyboardAvoidingView",
            @"Pressable",
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
    NSString *moduleName = self.dataAry[indexPath.row];
    
    // 手动拼接jsCodeLocation用于开发环境
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
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
    [self.navigationController pushViewController:vc animated:YES];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 50;
}

@end
