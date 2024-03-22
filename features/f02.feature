Feature: Login and Logout

@regression
Scenario Outline: Add and Remove item from the cart
  Given User opens URL "<url>"
  And User enters email as "<email>" and password as "<password>"
  And Click on Login button
  Then Click on Add to cart button
  Then Click on Cart logo
  Then Click on Remove button
  Then Click on Continue shopping button
  Then Click on Menu
  Then Click on LogOut Button
 
  Examples:
 
    | url                        | email           | password     |
    | https://www.saucedemo.com/ | standard_user 1 | secret_sauce |
