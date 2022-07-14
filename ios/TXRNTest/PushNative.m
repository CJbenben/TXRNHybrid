//
//  PushNative.m
//  TXRNTest
//
//  Created by chenxiaojie on 2022/7/12.
//

#import "PushNative.h"
#import "AppDelegate.h"
#import "TestViewController.h"
#import "CJHTTPRequest.h"

@implementation PushNative

RCT_EXPORT_MODULE(nativeView);
RCT_EXPORT_METHOD(doSomething:(NSString *)string) {
    //这也是暴露给RN的方法，弹出系统框，stirng是RN传过来的参数
    dispatch_async(dispatch_get_main_queue(), ^{
        UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"我是iOS系统框  RN 调用 原生方法"  message:string preferredStyle:UIAlertControllerStyleAlert];

        UIAlertAction *cancelAction = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
        UIAlertAction *okAction = [UIAlertAction actionWithTitle:@"好的" style:UIAlertActionStyleDefault handler:nil];

        [alertController addAction:cancelAction];
        [alertController addAction:okAction];

        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        [delegate.window.rootViewController presentViewController:alertController animated:YES completion:nil];
    });
}
RCT_EXPORT_METHOD(pushNextvc:(NSString *)string) {
    dispatch_async(dispatch_get_main_queue(), ^{
        TestViewController *testVC = [[TestViewController alloc] init];
        UINavigationController *nav = (UINavigationController *)([UIApplication sharedApplication].delegate.window.rootViewController);
        [nav pushViewController:testVC animated:YES];
    });
}
RCT_EXPORT_METHOD(httpRequest:(RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [self httpRequestWithGETCallBack:callback];
    });
}

- (void)httpRequestWithGETCallBack:(RCTResponseSenderBlock)callback {
    NSString *url = @"http://v.juhe.cn/toutiao/index";
    url = @"http://apis.juhe.cn/simpleWeather/query";// 天气预报
    NSDictionary *params = @{
                             @"key":@"ad2e52a52870806cc6b3cc20001cea31",//应用APPKEY
                             @"city":@"苏州"
                             };
    
    NSLog(@"url = %@", url);
    
    [CJHTTPRequest httpRequestWithGETWithUrl:url params:params success:^(id result) {
        
        NSLog(@"responseObject = %@", result);
        callback(@[[NSNull null], result]);
        
    } failure:^(NSError *error) {
        
        NSLog(@"error = %@", error);
        callback(@[error, @""]);
        
    }];
}

@end
