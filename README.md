- Website Name --> ByteBlitz [ Discover and share the latest tech products Website]
- Live Site Link --> [ByteBlitz](https://disgusted-skirt.surge.sh)
- Server Side Repo Link --> (https://github.com/ShoroveTajmen/A12_techProduct_Server_Side)

- In below I will list out the 5 Project features ::-

 - OverView Of Homepage ->
This website is based on Discover, view and share the latest tech products Website.In home page, there is a navigation bar, a banner section, featured products section, Trending products section, coupon code and discount section and a footer section. In the right side of the navbar there is a profile section where user can log in their account as a user, as a moderator or as a admin role and a logout button. In navigation bar there are two private routes available which is Dashboard route and whenever user can view the products details using the product name link they have to log in first , so this is another private route. 


 - Featured Product and trending product section ->
In this two sections, user can multiple cards. User can vote any products by clicking on the upVote button if they want. If user wants to see tha details of the product then then can click on the product name and redirect to the product details route. In product details route user can report a product or give a review. Same Functionality available for trending and fetaured products section. 

 - User Role ->
 A validate user can see all accepted products in products route. They can search product by product name, and in this section pagination is available. There is a user dashboard route where user can see myProfile children route. In this myProfile route user can view his/her profile pic , his/her name and email address. User can add only a product initially and update that product also but if he/she wants to subscribe in this website they have pay to verified their account. In home page there is some available coupons code. User can get discount using those coupons code. In MyProducts route user can see their posted product. If they want they can delete that product also.

  - Admin Role ->
  Admin can see the all statistical representation in the statistical route. Admin perfomrs the manage users role. If admin want to change a user to admin or moderator admin have this ability. Also admin can delete a user and view all users info. Admin add coupon, view coupon, edit a coupon and delete a coupon.

   - Moderator Role ->
   Moderator review all added product. Like when a user adding a product , then product will store this route. If moderator wants to accept this product then product added in the all products page. Moderator also delete a product. Make a product featured and view product details. All reported product stored in the reported product page. If moderator wish he/she can delete a reported product and also view a reported product.


- Log In and Registration page Overview -> 
The fields for name, photo, email, and password on the registration page. At least six characters must be included in the password, including one capital letter and one special character. It will display an error toast otherwise. A successful registration toast will appear once you click the register button. Users may also register using Google. The user profile picture, username, and logout button all vanish when we click log out button, and the log in button appears in the navigation bar. When we click the log in button and provide the proper gmail address and password, we are successfully logged in; otherwise, an error toast will show. A Google Account can also be used to log in. 


- JWT related Overview -> 
Json web token verification is added in this project. When a user log in to the website json web token will be stored in the local storage. Json web token also created when user log in via google. JWT verfication added in private route, unauthorized user can not access any data.

-Technologies Used -> JavaScript, React.js, Node.js, Express.js, MongoDB, Firebase



