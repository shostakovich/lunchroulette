@javascript
Feature: Sign up
  In order to play lunch roulette
  As a anonymous user
  I want to create an account

  Scenario: Confirmation of account
    Given I have provided credentials
    When I sign up
    Then I should receive an email to confirm my account