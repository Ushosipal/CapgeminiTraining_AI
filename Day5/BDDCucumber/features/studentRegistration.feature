@studentRegistration
Feature: Student Registration
 
  Scenario Outline: Register student using multiple datasets
    Given User is on Student Registration page
    When User fills registration form with "<firstName>" "<email>" "<gender>" "<mobileNumber>" "<dob>" "<subject>" "<hobby>" "<address>" "<state>" "<city>"
    And User submits the registration form
    Then Registration should be successful
 
    Examples:
      | firstName | email           | gender | mobileNumber | dob        | subject | hobby   | address           | state         | city   |
      | Ushosi     | ushosi@test.com   | Female   | 9876543210   | 2000-01-15 | Maths   | Sports   | Demo Address | NCR           | Meerut  |
      | Loren     | loren@test.com  | Male | 9123456789   | 2001-05-20 | English | Reading | Demo Address   | Haryana       | Lucknow |
      | John    | john@test.com  | Other  | 9988776655   | 1999-09-10 | Physics | Music    | Demo Address | Rajasthan     | Agra |