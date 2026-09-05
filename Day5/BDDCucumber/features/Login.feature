Feature: Login Feature

  @smoke @regression
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    And clicks the login button
    Then user should successfully login

 @smoke
  Scenario: Unsuccessful login with invalid credentials
    Given the user is on the login page
    When the user enters invalid username or password
    And clicks the login button
    Then an error message should be displayed indicating invalid credentials

  @smoke
  Scenario Outline: Verify login with multiple users with invalid credentials

    Given the user is on the login page
    When User enters "<username>" and "<password>"
    Then User should view the error message

    Examples:

        | username                 | password      |
        | standard_user             | secrert  |
        | problem_user              | secret |
        | performance_glitch_user   | secret |
        | error_user                | secret |
        | visual_user               | secret |

  Scenario Outline: Verify login with multiple users with valid credentials

    Given the user is on the login page
    When User enters "<username>" and "<password>"
    Then user should successfully login

    Examples:

        | username                 | password      |
        | standard_user             | secrert_sauce  |
        | problem_user              | secret_sauce |
        | performance_glitch_user   | secret_sauce |
        | error_user                | secret_sauce |
        | visual_user               | secret_sauce |