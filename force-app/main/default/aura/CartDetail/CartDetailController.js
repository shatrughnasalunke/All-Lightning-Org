({
    doInit : function(component, event, helper)
    {
        
        component.find("recordCreator").getNewRecord(
            "shatrughna94__Address_Book__c",null,false,
            $A.getCallback(function() 
                           {
                               var rec = component.get("v.record");
                               var error = component.get("v.recordError");
                               if (error || rec === null)
                               {
                                   console.log("Error initializing record template: " + error);
                                   alert("Error Occured");
                               }
                               else 
                               {
                                   console.log("Record template initialized:");
                                   //alert("Success");
                               }
                           })
        );
        var pageReference=component.get('v.pageReference');
        if(pageReference)
        {        
            
            var state=pageReference.state;
            if(state.c__cartId)
            {   
                component.set('v.cartItemList',state.c__cartId);
                var action=component.get('c.getCartItems');
                action.setParams({
                    'CartId' :state.c__cartId
                });
                action.setCallback(this,function(response)
                                   {
                                       var responseState=response.getState();
                                       if(responseState === 'SUCCESS' || responseState === 'DRAFT')
                                       {
                                           var resultData=response.getReturnValue();
                                           console.log('resultData--->',resultData);
                                           var items=[];
                                           var subTotal;
                                           for(var key in resultData)
                                           {
                                               items.push(resultData[key]);
                                               if(subTotal)
                                               {
                                                   subTotal = subTotal + resultData[key].shatrughna94__Total_Amount__c
                                                   console.log('SubTotal--->',subTotal);
                                               }
                                               else
                                               {   
                                                   subTotal = resultData[key].shatrughna94__Total_Amount__c
                                                   console.log('SubTotal--->',subTotal);
                                               }
                                           }
                                           component.set('v.subTotal', subTotal);
                                           component.set('v.cartItemList',items);
                                       }
                                       else if(responseState === 'INCOMPLETE')
                                       {
                                           console.log('User is offline System does not support offline');
                                       }
                                           else if(responseState ==='ERROR')
                                           {
                                               var errors = response.getError();
                                               if(errors || errors[0].pageMessage){
                                                   console.log(' page Error ', errors[0].pageMessage);
                                               }
                                               if(errors || errors[0].duplicateResults){
                                                   console.log(' duplicate Error ', errors[0].duplicateResults);
                                               }
                                           }
                                               else
                                               {
                                                   
                                               }
                                   });
                $A.enqueueAction(action);
            }
        }
        else
        {
            component.set('v.cartItemList',[]);
        }
    },
   /*--------------------------------------------------------------*/        
    homePage : function(component, event, helper)
    {
        var pageRefernce=component.find("navigation");
        var pageReferenceNav = {
            "type":"standard__navItemPage",
            "attributes": {
                "apiName": "shatrughna94__Beer_Explorer"	
            }
        };
        pageRefernce.navigate(pageReferenceNav,true);
    },
    /*--------------------------------------------------------------*/       
    
    applyCoupon : function(component, event, helper)
    {
        component.set('v.isCouponAplied', true);
    },
    
   /*--------------------------------------------------------------*/      
    doApplyCoupon : function(component, event, helper)
    {
        var pageReference=component.get('v.pageReference');
        var statecartId=pageReference.state;
        var CouponNo = component.find('CouponNo').get('v.value');
        alert(CouponNo);
        var cartId = statecartId.c__cartId;
        if(CouponNo){
            var action = component.get('c.checkCoupon');
            action.setParams({
                Name : CouponNo,
                CartId : cartId
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                if(state === 'SUCCESS' || state ==='DRAFT')
                {
                    var resultData = response.getReturnValue();
                    if(resultData)
                    {
                        component.set('v.discountAmmount',resultData);
                        component.set('v.errorDiscount',null); 
                        component.set('v.isCouponSucess',true);
                    }
                    else
                    {
                        component.set('v.errorDiscount','Coupon is not valid or Expired'); 
                        component.set('v.discountAmmount',null);
                        component.set('v.isCouponSucess',false);
                    }
                }
            });
            $A.enqueueAction(action);
        }
        else{
            alert('Please enter your coupon no');
        }
    },
   /*--------------------------------------------------------------*/      
    
    doCheckOut :function(component, event, helper)
    {
        component.set('v.isCheckOut',true);
    },
    
   /*--------------------------------------------------------------*/       
    doSaveAddress :function(component, event, helper)
    {
        alert('doSaveAddress'); 
        var isValid = helper.validateForm(component, event, helper);
        console.log('isValid',isValid);
        alert('isValid',isValid);
        if(isValid)
        {
            var userId=$A.get("$SObjectType.CurrentUser.Id");
            component.set('v.addressBook.shatrughna94__User__c',userId);  
            component.find("recordCreator").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResul === "DRAFT")
                {
                    var showToast = $A.get("e.force:showToast");
                    showToast.setParams({
                        title: "Success!",
                        type: "Success",
                        mode: "pester",
                        message: "The address has been save successfully"+saveResult.recordId
                    });
                    
                    showToast.fire();
                    
                    var addList = [];
                    var addrList = component.get('v.addressList');
                    if(addrList){
                        addrList.push(component.get('v.addressBook'));
                        component.set('v.addressList' , addrList);
                    }else{
                        addList.push(component.get('v.addressBook'));
                        component.set('v.addressList' , addList); 
                    }
                    component.set('v.isNewAddress', false);
                    
                }
                else if (saveResult.state === "INCOMPLETE")
                {
                }
                    else if(saveResult.state === "ERROR") 
                    {
                    }
                        else
                        {
                        }
            });
        }
    },
  /*--------------------------------------------------------------*/         
    
    getAddress : function(component, event, helper)
    {
        var isTrue = component.get('v.isCheckOut');
        alert(isTrue);
        if(isTrue){
            helper.fetchAddress(component, event, helper);
        }
    },
  /*--------------------------------------------------------------*/        
    
    onSelect : function(component, event, helper)
    {
        var selected = event.getSource().get("v.text");
        alert(selected);
        var cehcked =  event.getSource().get("v.value");
        alert(cehcked);
        var allAddress = component.get('v.addressList');
        var selecedAddress = allAddress[selected];
        console.log('selecedAddress ', selecedAddress);
        component.set('v.selectedAddress', selecedAddress);
    },
 
  /*--------------------------------------------------------------*/       
    
    placeOrder :function(component, event, helper)
    {
        var selectedAdd=component.get('v.selectedAddress');
        if(selectedAdd)
        {   
            var pageReference=component.get('v.pageReference');
            var state=pageReference.state;
            var cartId=state.c__cartId;
            alert('Selected Address'+selectedAdd.Id);
            alert(cartId);
            var userId=$A.get("$SObjectType.CurrentUser.Id");
            alert('userId'+userId);
            var action = component.get('c.createOrder');
            console.log('action--->',action);
            console.log('action--->'+action);
            action.setParams({
                addressId : selectedAdd.Id,
                cartId : cartId,
                UserId : userId,
                subtotal : component.get('v.subTotal')
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                if(state === 'SUCCESS' || state === 'DRAFT'){
                    var showToast = $A.get('e.force:showToast');
                    var resustData = response.getReturnValue();
                    showToast.setParams({
                        "title" : "Record Saved",
                        "type" : "success",
                        "message" : "Your Order Has been Successfully Placed." +
                        "Your tracking Order no is "+resustData.split('####')[0]
                    });
                    showToast.fire();
                    var pageReference = component.find("navigation");
                    var pageReferenceNav = {    
                        "type": "standard__recordPage",
                        "attributes": {
                            "recordId": resustData.split('####')[1],
                            "objectApiName": "shatrughna94__Order__c",
                            "actionName": "view"   
                        }
                    };
                    pageReference.navigate(pageReferenceNav, true);
                    
                }
                else if(state === 'INCOMPLETE'){
                    console.log('User is offline and System does not support offline!.');
                }else if(state === 'ERROR'){
                    var errors = response.getError();
                    console.log('Error Occured ', errors);
                }else{
                }
            });   
            $A.enqueueAction(action);    
        }
        else
        {
            alert('Please Select atleast one address');
        }
        
    },
   /*--------------------------------------------------------------*/       
    
    
    addNewAddress : function(component, event, helper)
    {
        component.set('v.isNewAddress', true);
    }
  /*--------------------------------------------------------------*/     
})