trigger TestTrigger on Account (After insert) {
      System.debug('Test');
}