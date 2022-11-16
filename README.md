# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   - Within a Github action that runs whenever code is pushed 
   - So we will never forget to run those tests and we can still run those tests manually in local.
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   - No, we should use a unit test for that instead.
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No. In this scenario, we have multiple components interact with each other on an application level.
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes. In this case, we only need to check the message length before it being actually sent, which means no need to interact with other components. Then we can do this test use unit test.
