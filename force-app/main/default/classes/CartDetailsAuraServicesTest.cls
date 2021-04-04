@isTest 
public class CartDetailsAuraServicesTest {
       static testMethod void beerSearchValidate() 
       {
           // Test Data For Coupon Method
           shatrughna94__Coupon__c coupon= new shatrughna94__Coupon__c(Name='New Coupon', shatrughna94__Price__c=100);
           System.debug('Coupn After Insert: ' +coupon.shatrughna94__Price__c);
           insert coupon;
           
           coupon = [SELECT Name, shatrughna94__Price__c FROM shatrughna94__Coupon__c WHERE Id =:coupon.Id];
           shatrughna94__Cart__c cart = new shatrughna94__Cart__c(shatrughna94__Coupon__c=coupon.Id);
           insert cart;
           
           cart =[SELECT Id, shatrughna94__Coupon__r.Name,shatrughna94__Coupon__r.shatrughna94__Price__c FROM shatrughna94__Cart__c where Id=:cart.Id];
           
           System.debug('Coupn Name for Cart after insert--->'+cart.shatrughna94__Coupon__r.Name);
           
           Test.startTest();
               System.assertEquals(100, coupon.shatrughna94__Price__c);
               CartDetailsAuraServices.getCoupon('New Coupon');
               System.assertEquals(100, coupon.shatrughna94__Price__c);
               CartDetailsAuraServices.checkCoupon(cart.shatrughna94__Coupon__r.Name,cart.Id);
               System.assertEquals(100.00, cart.shatrughna94__Coupon__r.shatrughna94__Price__c);
               CartDetailsAuraServices.getCart();
           Test.stopTest();
       }
}