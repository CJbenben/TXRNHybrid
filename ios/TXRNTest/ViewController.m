//
//  ViewController.m
//  TXRNTest
//
//  Created by chenxiaojie on 2022/6/20.
//

#import "ViewController.h"
#import "RNPageController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor cyanColor];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    RNPageController *vc = [[RNPageController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
    
//    NSLog(@"High Score Button Pressed");
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
//
//    RCTRootView *rootView =
//      [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
//                                  moduleName: @"RNHighScores"
//                           initialProperties:
//                             @{
//                               @"scores" : @[
//                                 @{
//                                   @"name" : @"Alex",
//                                   @"value": @"42"
//                                  },
//                                 @{
//                                   @"name" : @"Joel",
//                                   @"value": @"10"
//                                 }
//                               ]
//                             }
//                               launchOptions: nil];
//    UIViewController *vc = [[UIViewController alloc] init];
//    vc.view = rootView;
//    [self presentViewController:vc animated:YES completion:nil];
    
}

@end
