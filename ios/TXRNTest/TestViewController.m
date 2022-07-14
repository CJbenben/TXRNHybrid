//
//  TestViewController.m
//  TXRNTest
//
//  Created by chenxiaojie on 2022/7/12.
//

#import "TestViewController.h"
#import "CJHTTPRequest.h"

@interface TestViewController ()

@end

@implementation TestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.title = @"这是一个原生页面";
    self.view.backgroundColor = [UIColor whiteColor];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [self httpRequestWithGETCallBack];
}

- (void)httpRequestWithGETCallBack {
    NSString *url = @"http://v.juhe.cn/toutiao/index";
//    url = @"http://172.16.0.94:8588/api/v1/app/floor/floor";
    NSDictionary *params = @{@"type":@"top",//类型,,top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
                             @"key":@"ad2908cae6020addf38ffdb5e2255c06"//应用APPKEY
                             };
    
    NSLog(@"url = %@", url);
    
    [CJHTTPRequest httpRequestWithGETWithUrl:url params:params success:^(id result) {
        
        NSLog(@"responseObject = %@", result);
//        callback(@[[NSNull null], result]);
        
    } failure:^(NSError *error) {
        
        NSLog(@"error = %@", error);
//        callback(@[error, @""]);
        
    }];
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
