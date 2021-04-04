public class AccountApexClass {
    List<Account> accList{get;set;}
   
    AccountApexClass()
    {
         accList=[Select id,Name from Account];
         system.debug('accList--->'+accList);
    }
      
}