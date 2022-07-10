# Cypress Demo script

### This script written on Cypress on a E-Commerce website (Daraz.com.bd)
### This script follows POM(Page Object Model) though cypress discourage to follow POM. It is useful when you are handling large website with lots of components and you have to reuse large code and Locators.

This script covers:
```
TC_001	User can login with valid email and valid password
TC_002	Verify that, User can't login with an unregistered email id
TC_003	Verify that, User can't login with an invalid password
TC_004	Verify that, If user tries to login with any invalid email/phone number on the input field it will show error message
TC_005	Verify that, if user type email/phone less than 6 character it will show an error
TC_006	Verify that, If user writes any keyword on the search input field it will show suggestion
TC_007	Verify that, If user search with a keyword all the related product with the keyword will show on the all product page
TC_008	Verify that, If the user search for a product that doesn't bring any product related to it, on the search page should show a message
TC_009	Verify that, if the user clicks on any product it will bring up all the information of the product on the product page
TC_010	Verify that, User can see the product delivery amount on the current address
TC_011	If an unauthenticated user tries to add the product to the cart it will bring the login page
TC_012	If an authenticated user added the product to the cart an overflow modal should open with all the product details and a success message will display
TC_013	Product quantity will be one for the newly selected product
TC_014	If the Cart page doesn't has any product it will show a message
TC_015	If a user clicks on the ADD to cart option again for the same product it will increase the product quantity
TC_016	On cart page all the added product should be available.
TC_017	Users can select product individually by clicking on the product checkbox or all the product by select all checkbox
TC_018	Proceed to checkout option should present under the order summary
TC_019 User can delete individual product from the cart
TC_020	Users can delete all selected product by selecting the product and click on the Delete all option from the table header
```

### Here is the execution video link : https://youtu.be/QcYGx8FgcmQ
