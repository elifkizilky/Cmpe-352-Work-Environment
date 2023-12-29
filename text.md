![FigJam basics](https://hackmd.io/_uploads/By4hh6tDT.png)

# **Cmpe451 Final Project Team Report**

### **Prepared by:** Group 7
### **Video:** [Youtube Video Link ](https://www.youtube.com/watch?v=x_eCsi_eU8Y)


## 👤 Contributors
- [*Fatma Sena Alçı*](https://github.com/bounswe/bounswe2023group7/wiki/Fatma-Sena-Al%C3%A7%C4%B1)
- [*Yunus Emre Altuğ*](https://github.com/bounswe/bounswe2023group7/wiki/Yunus-Emre-Altu%C4%9F)
- [*Ömer Şafak Bebek*](https://github.com/bounswe/bounswe2023group7/wiki/%C3%96mer-%C5%9Eafak-Bebek)
- [*Kardelen Erdal*](https://github.com/bounswe/bounswe2023group7/wiki/Kardelen-Erdal)
- [*Hatice Erk*](https://github.com/bounswe/bounswe2023group7/wiki/Hatice-Erk)
- [*Melih Gezer*](https://github.com/bounswe/bounswe2023group7/wiki/Melih-Gezer)
- [*Muhammet Tayyip Kamiloğlu*](https://github.com/bounswe/bounswe2023group7/wiki/Muhammet-Tayyip-Kamilo%C4%9Flu)
- [*Hakan Karakuş*](https://github.com/bounswe/bounswe2023group7/wiki/Hakan-Karaku%C5%9F)
- [*Elif Kızılkaya*](https://github.com/bounswe/bounswe2023group7/wiki/Elif-K%C4%B1z%C4%B1lkaya)
- [*Furkan Ülke*](https://github.com/bounswe/bounswe2023group7/wiki/Furkan-%C3%9Clke)
- [*Tacettin Burak Eren*](https://github.com/bounswe/bounswe2023group7/wiki/Tacettin-Burak-Eren)


## **Executive Summary**

Ludos is a platform dedicated to game domain. It serves as a community where gaming enthusiasts can gather to discuss everything related to games and get information about the games. Users have the ability to create discussion threads, respond to others’ threads and comments; and engage in lively conversations about various games. The platform also allows users to follow specific games, providing them with up-to-date information, including details about upcoming titles. This makes Ludos not just a forum for discussion, but also a valuable resource for gamers to stay informed about the latest in the gaming world. 
At the end of the term, we are delighted with the position we are as the whole team. We successfully deployed almost all important features of our project. We implemented the features we set as our aims and you mentioned as important since the beginning of the semester.

The most important features we have in our app for both mobile and web are the followings:
1. Annotation 
2. Detailed Search 
3. Game Recommendation 
    
We are glad that we have finished all of three features with full integration in the all teams (mobile, web, back-end).
We believe that our application is ready for use by real users in its initial version. In addition to the explained functionalities in later sections of our app, we've prioritized a user-friendly interface and overall user experience.

Here are the general overview of functionalities we support in our app:
1. Sign up
2. Log in
3. Change password
4. Forgot password
5. Create/View/Edit user profile page
6. View other users’ profiles
7. Create/View/Edit a group
8. Create a thread in groups
9. Follow/Unfollow games
10. Annotate texts
11. Thread/Game/User/Group search
12. Annotate images (only web)
13. Semantic search for games/threads/groups/users (Unoptimized) (only web)
14. View entities
15. Create entities
16. Create/View/Edit rate for the games
17. Comment on threads
18. Comment on comments (only mobile)
19. View other users’ text annotations
20. View other users’ image annotations (only web)
21. Create/View upcoming titles
22. View all comments for posts
23. View participants of groups
24. Join/Leave groups
25. View trending games
26. View recommended games for user
27. View recommended games for specific game
28. Last activities of users (only mobile)
29. Create/Edit Game
30. Like/Dislike/Delete/Edit comment/review/thread/upcoming title

Our final milestone demo went quite well overall. As in the previous milestone, we received positive comments from people regarding to our application and demo. We are proud of the final milestone demo and we believe that the customers were also satisfied with the presentation we did!


## **Summary of Project Status**
Provide a summary of your project status in terms of requirements.

## **Final release notes**

What we added to our application:

- Group functionality is added. Users can create a group and edit the group they managed. Groups are open to be member until its capacity is fulled. Group members can create a thread which is seen by only group members.
- Entity functionality is added. Users can create an entity from a game's page. These entities are, characters, items, areas and packages. Entities must have features such as description and image link.
- We added upcoming title feature for our application. Only developers are able to create the upcoming title for the game. They can basically, inform users about release date and share demo link.
- We added text annotations to our application. The text in game guide, game trivia, game story, entity description, posts and comments. Also upcoming title and group comments/posts can be annotated.
- We added image annotation to our application. The image of thread posts can be annotated.
- We improved our search functionalities. Users were able to search games in second release. In this release, users also can search forums, groups. These searchs have filtering and sorting also. Additionally, user both use autocomplete game search or filtered game search. Beyond, user can reach a general search for users, forums, games and groups on header.
- We added recommendations to our platform. Mainly, it suggests game based on user's activity on the site. It can be seen from the home page. Additionally to reach users which want to play similar games, we added suggested games content on related games of a game. One can see similar games of a game. 
- We revised our profile page. We introduced user types on user interface. As mentioned above, developers can create upcoming title posts. From their profile page they can share additionally their companies and edit them. Besides, user's groups can be seen from the profile page.
- User can edit the games which exist on the site. 
- Users can like or dislike comments and posts.
- The home page design also enhanced. Groups, forums and games dynamically connected.

### Known Bugs

Web:
* Users cannot give a relevant description for entities while creating it.
* Users cannot edit their comments.
* Users cannot see the area entities of the games.
* On the forums page, the forum topics does not a give profile photo and a nickname as desired.

Mobile:
* Users cannot upload file from their Android devices only provide a link.
* Users cannot delete their annotations from mobile app.
* When a thread is searched, the back button redirects to the game page of the thread, not the search page.

Backend:
* Semantic search struggles to find, so relevance score reduced from 0.5 to 0.3 in deployed server.

These bugs are fixed on deployed web server, but in release their bugs are stayed.



## **Status of Deliverables**

List all deliverables as links. Specify the version numbers whenever applicable.

|Deliverable | Status | Description |
|-------------|---------|---------------|
|[Group Milestone Report](https://github.com/bounswe/bounswe2023group7/tree/development/reports)|Delivered|Group Milestone Reports are completed.|
|[Progress based on teamwork](#milestone-review)|Delivered|Progress based on teamwork is completed.|
|[API Endpoints](https://github.com/bounswe/bounswe2023group7/tree/development/reports)|Delivered|API has been deployed. Here is [swagger link](http://164.92.195.35:8080/api) to the api and [UI](http://51.20.170.143:3000/) of the api. 
|[Individual Contributions](#individual-contribution-reports)|Delivered|Individual contributions are completed.|
|[User Interface / User Experience](#individual-contribution-reports)|Delivered|[User Interface](http://51.20.170.143:3000/) / User Experience are completed.|
|[Annotations](#individual-contribution-reports)|Delivered|[Annotations](http://51.20.170.143:3000/) are completed.|
|[Scenarios](#individual-contribution-reports)|Delivered|Scenarios are completed.|
|[Use and Maintanence](#individual-contribution-reports)|Delivered|User and system manuals are completed.|

## **Requirements Coverage**

(Status: One of: Not done , Completed , % completed )

<details>
<summary><strong>5.1 Functional Requirements<a name="functional-requirements" /></strong></summary>
    
- 1.1 User Requirements
    - 1.1.1 Account 
        - 1.1.1.1 Register
            - 1.1.1.1.1. (Completed) Guests shall be able to register to the platform.     
            - 1.1.1.1.2. (Completed) Users should verify their accounts via e-mails, which proves mail address belongs to user.
            - 1.1.1.1.3. (%50 Completed) Famous developers, professional e-sports players, famous streamers, famous video producers should be able to get official accounts.
        - 1.1.1.2. Login
            - 1.1.1.2.1. (Completed) Users shall be able to login the platform with username and password.
            - 1.1.1.2.2. (Completed) Users shall be able to logout.
            - 1.1.1.2.5. Password
                - 1.1.1.2.5.1. (Completed) Users shall be able to change their password.
                - 1.1.1.2.5.2. (Completed) Users shall be able to reset their password.
        - 1.1.1.3. Account Management
            - 1.1.1.3.1. (Not Started) Users shall be able to delete their accounts.
    - 1.1.2 Profile Page
        - 1.1.2.1 (Completed) Users shall have a profile page.
        - 1.1.2.2 (Completed) Users shall be able to edit their profile page.
        - 1.1.2.3 (Completed) Users shall be able to add a profile photo to their profiles.
        - 1.1.2.4 (Not Started) Users should be able to share their game achievements on their profiles.
        - 1.1.2.5 (Not Started) Users should be able to get and share badges on their profiles for experiences in the platform.
        - 1.1.2.6 Personal Information
            - 1.1.2.6.1 (Completed) Users shall be able to have and display their username on their profile page.
            - 1.1.2.6.2 (Completed) Users shall have a bio in their profile pages.
            - 1.1.2.6.3 (Completed) Users shall be able to add tags related to their favorite genre to their profiles.
            - 1.1.2.6.4 (Completed) Users shall be able to add their favorite games on their profiles.
            - 1.1.2.6.5 (Completed) Users shall be able to share the number of comments on the forum, the number of posts on the forum, and the number of reviews they published on their profiles.
            - 1.1.2.6.6 (Completed) Developers and e-sports players shall be able to add their associated titles/teams/companies to their profiles.
            - 1.1.2.6.7 (Not Started) Users shall be able to share their gaming platform profiles, including Steam, Epic, IndieGala, Humble Bundle, Ubisoft Connect, GOG, Origins, Xbox Live, itch.io, Google Play Games, on their profiles.
            - 1.1.2.6.8 (Completed) Users shall be able to display their user types, that are gamer, developer, and e-sports player.
        - 1.1.2.7 Activity Tracking
            - 1.1.2.7.1 (Not Started) Users’ last activities shall be seen on their profiles.
        - 1.1.2.8 Forum
            - 1.1.2.8.1 (Not Started) Users should be able to display previews for posts which they created on their profiles.
            - 1.1.2.8.2 (Completed) Users shall be able to display their comments on other users’ posts.
        - 1.1.2.9 Games
            - 1.1.2.9.1 (Completed) Users shall be able to display their reviews of the games.
            - 1.1.2.9.2 (Completed) Developers shall be able to display their upcoming titles on their profile page.
        - 1.1.2.10 Actions
            - 1.1.2.10.1 (Completed) Users shall be able to view the other user’s profiles.
            - 1.1.2.10.2 (Not Started) Users should be able to follow the other users.
            - 1.1.2.10.3 (Not Started) Users should be able to unfollow the other users.
            - 1.1.2.10.4 (Not Started) Users should be able to block some users.
            - 1.1.2.10.5 (Not Started) Users should be able to unblock some users which they blocked.
    - 1.1.3 Game
        - 1.1.3.1 (Completed) Users shall be able to create a page for a game.
        - 1.1.3.1 (Completed) Users and guests shall be able to view game profiles, reviews, and average ratings of the game.
        - 1.1.3.2 (Completed) Users shall be able to rate a game out of 5.
        - 1.1.3.3 (Completed) Users shall be able to write reviews for the game.
        - 1.1.3.4 (Completed) Users shall be able to edit their reviews.
        - 1.1.3.5 (Completed) Users shall be able to like or dislike the other reviews.
        - 1.1.3.6 (Completed) Users shall be able to share their rating on their reviews.
        - 1.1.3.7 (Completed) Users shall be able to delete their reviews.
        - 1.1.3.8 (Completed) Users should be able to follow the game.
        - 1.1.3.9 (Completed) Users shall be able to see the number of followers of the game.
        - 1.1.3.10 (Completed) Users should be able to see the system requirements of the game.
        - 1.1.3.11 (Completed) Users should be able to see if his/her computer can run the game or not.
        - 1.1.3.12 (Completed) Users should be able to add his/her game completion duration.
        - 1.1.3.13 (Completed) Users should be able to see the average completion duration of the game.
        - 1.1.3.14 (Completed) Users should be able to see predecessors and successors of the game if it has.
        - 1.1.3.15(Completed)  Users should be able to add and modify a guide for the game.
        - 1.1.3.16 (Completed) Users should be able to see the platforms that the game is downloadable.
        - 1.1.3.17 (Completed) Users should be able to see the age restrictions (PEGI).
        - 1.1.3.18 (Completed) Users shall be able to add tag or tags to a game.
        - 1.1.3.19 Entity Page
            - 1.1.3.19.1 (In Progress) Users shall be able to create a page for game entities.
            - 1.1.3.19.2 (In Progress) Users and guests shall be able to view game entities.
            - 1.1.3.19.3 (Completed) Game entities are characters, packages, items, and environments.
            - 1.1.3.19.4 (In Progress) Users shall be able to reach the entity pages from game pages.
    - 1.1.4. (Completed) Upcoming Titles
    - 1.1.5 Forum
        - 1.1.5.1 (Completed) Guests and users shall be able to visit the forum.
        - 1.1.5.2 (Completed) Users shall be able to open a thread.
        - 1.1.5.3 (Completed) Users shall be able to cite and comment on posts.
        - 1.1.5.4 (Not Started) Users shall be able to mention other users in the forum.
        - 1.1.5.5 (Completed) Users shall be able to like or dislike posts and comments.
        - 1.1.5.6 (Completed) Users shall be able to cite and comment on other comments.
        - 1.1.5.7 (Completed) Users shall be able to edit their comments.
        - 1.1.5.8 (Completed) Users shall be able to delete their comments on the post.
        - 1.1.5.9 (Completed) The post owners shall be able to edit their posts.
        - 1.1.5.10 (Completed) The post owners shall be able to tag their threads.
        - 1.1.5.11 (Completed) Users should be able to screen image links.
    - 1.1.6. (Completed) Group
    - 1.1.7. (Not Started) Administration
- 1.2. System Requirements
    - 1.2.1 Forum/Review
        - (Not Started) 1.2.1.1 System should censor inappropriate words.
        - (Completed) 1.2.1.2 System shall include a timestamp for each forum and review entry.
        - (Completed) 1.2.1.3 System should direct to the user owner of the content’s name, directing to that user’s profile page.
        - (Completed) 1.2.1.4 System shall calculate the average rating of the game.
        - (Completed) 1.2.1.5 System shall calculate the average completion duration of the game.
    - 1.2.2 Search
        - (In Progress) 1.2.2.1. System shall allow users to search for forum thread, subforum, forum comment, upcoming titles, gaming communities-groups, users, and games.
        - (In Progress) 1.2.2.2. System shall allow the user to filter the search for the users, games, and tags.
        - (Completed) 1.2.2.3. System shall allow users to use sorting features ascending or descending.
        - (Completed) 1.2.2.4. System shall allow users to sort the threads, alphabetically, by first post date, by last post date,by number of comments in threads.
        - (%50 Completed) 1.2.2.5. System shall allow users to sort the comments by date, number of replies and difference of upvotes and downvotes for the comment.
        - (Completed) 1.2.2.6. System shall allow users to sort upcoming titles by post date or launch date.
    - 1.2.4 (Completed) Annotations
    - 1.2.5 (Completed) Recommendations
    - 1.2.6 User Data
        - 1.2.6.1 (Completed) The data and content about the deleted accounts should be deleted from the system.
    
</details>
    
<details>
<summary><strong>5.2 System Requirements <a name="system-requirements" /></strong></summary>

- 2.1 Performance & Reliability
    - (Not Started) 2.1.1 The platform should strive to have a Largest Contentful Paint (LCP) of 2.5 seconds or less, excluding external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.2 The platform should strive to have a First Input Delay (FID) of 100 milliseconds or less, except external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.3 The platform should strive to have a Cumulative Layout Shift (CLS) score of 0.1 or less, except external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.4 The platform should strive to have a First Contentful Paint (FCP) of 1.8 seconds or less, except external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.5 The platform should strive to have an Interaction to Next Paint (INP) of 200 milliseconds or less, except external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.6 The platform should strive to have a Time to First Byte (TTFB) of 0.8 seconds or less, except external image and video sources, for at least 75% of page visits for both the mobile application and web page.
    - (Not Started) 2.1.7 The platform should meet these 1-6 requirements for at most 10,000 users at the same time.
    - (Not Started) 2.1.8 The platform shall have a basic response time of at most 4 seconds with more than 10,000 users at the same time.
    - (Completed) 2.1.9 The platform shall back up content every day.
- 2.2 Privacy
    - (Completed) 2.2.1 The rules defined by GDPR/KVKK shall be followed.
    - (Completed) 2.2.2 Personal information and contact information shall be protected according to GDPR.
    - (Not Started) 2.2.3 Privacy policy shall be accepted by the user to be registered.
    - (Completed) 2.2.4 All information about users should be encrypted.
    - (Completed) 2.2.5 Emails shall be unique and valid.
- 2.3 Security
    - (Not Started) 2.3.1 Bot accounts should be eliminated.
    - (Not Started) 2.3.2 Passwords shall contain at least one number and one capital letter.
    - (Not Started) 2.3.3 Verification code should be sent when logging in from a different device.
    - (Not Started) 2.3.4 Users should be able to enable two-factor authentication for security concerns.
    - (Not Started) 2.3.5 Users who disturb other users or violate the rules shall be banned for a period or permanently.
    - (Not Started) 2.3.6 Annotations should be scanned to avoid any malware.
- 2.4 Compatibility
    - (Completed) 2.4.1 The mobile application of the platform shall run on Android 7.93.4 and above.
    - (Completed) 2.4.2 The website shall support at least one of the following browsers: Edge, Safari, Chrome, Firefox, any browser based on Webkit/Chromium engines, and Tor network.
- 2.5 Availability and Accessibility
    - (Completed) 2.5.1 The platform shall support the English language.
    - (Completed) 2.5.2 The platform shall support UTF-8 character encoding.
    - (Completed) 2.5.3 The platform shall be accessible at least 98% of the day.
    
</details>

## **API**

* The API documentation: http://164.92.195.35:8080/api
* Link to the API: http://164.92.195.35:8080/
* Example Api Calls: [Postman Collection](https://api.postman.com/collections/22203914-3679a668-3f53-4a89-b53d-4cd8bcfabda3?access_key=PMAT-01HJVACJT8TMQX9FHP0G418ZSM)

## **User Interface / User Experience**

User Interface designs and the links to the source code in the project repository
* Login Page:
    * Web
        - Login Page
                    
        ![Ekran Resmi 2023-12-29 12.15.46](https://hackmd.io/_uploads/r1xLA-nPa.jpg)

        - Source code
            - [LoginPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/LoginPage.js)

    * Mobile
        - Login Page at start
        
        ![ludos_login](https://hackmd.io/_uploads/S1fP-acw6.png)
        
        - Login Page after entered username and password

        ![Ludos_login_with_input_hidden](https://hackmd.io/_uploads/BkudzpcPT.png)

        
        - Login Page if show password selected

        ![ludos_login_input_view](https://hackmd.io/_uploads/ByXAb6cPT.png)
        
        - Mobile source codes
            * [login_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/login_page.dart)
        
* Sign Up Page:
    * Web
        
        - Signup Page
        
         ![Ekran Resmi 2023-12-29 12.17.58](https://hackmd.io/_uploads/SkvARWnva.jpg)
         
         - Source Code
             - [SignupPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/SignupPage.js)

    * Mobile
        - Sign Up screen after user entered necessary information
        
        ![ludos_sign_up](https://hackmd.io/_uploads/SkOjQT5DT.png)
        
        - Mobile source codes
            * [sign_up_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/sign_up_page.dart)

* Forgot Password Page:
    * Web
        - Forgot password mail request for sending code
 
        ![Ekran Resmi 2023-12-29 12.20.31](https://hackmd.io/_uploads/ry0vJf3Pp.jpg)
        
        - Activation code screen and entering new password

        ![Ekran Resmi 2023-12-29 12.22.09](https://hackmd.io/_uploads/B1JAJf2Pa.jpg)

        
        
        
        
    * Mobile
        - Forgot Password (Request for activation code)

        ![ludos_forgot_password1](https://hackmd.io/_uploads/BJ52NpcwT.png)

        - Forgot Password (Changing Password)

        ![ludos_forgot_password2](https://hackmd.io/_uploads/SyP1Ha9DT.png)
        
        - Mobile source codes
            * [forgot_password.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/forgot_password.dart)
            * [activation_for_password_reset.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/activation_for_password_reset.dart)

* Home Page:
    * Web
        
        - Home page for registered user
        
        ![Ekran Resmi 2023-12-29 12.13.46](https://hackmd.io/_uploads/SyYC6ZnPT.jpg)
        
        ![Ekran Resmi 2023-12-29 12.14.22](https://hackmd.io/_uploads/Sy3lAWhwa.jpg)
        
        
        - Home page for non-registered user
        
        ![Ekran Resmi 2023-12-29 12.14.50](https://hackmd.io/_uploads/rkYzRb3Dp.jpg)
        
        ![Ekran Resmi 2023-12-29 12.23.03](https://hackmd.io/_uploads/Bkw-xf3vp.jpg)
        
        - Source Code:
            - [Homepage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/Homepage.js)


    * Mobile
        - Home Page for Registered User (Popular & Recommended Games)
        
        ![Ludos_home_1-min](https://hackmd.io/_uploads/H18LvT9vp.png)
        
        - Home Page for Registered User (Trending Topics & Upcoming Titles)

        ![ludos_home_2-min](https://hackmd.io/_uploads/rkz9vpqva.png)

        - Home Page Drawer for Registered User

        ![Ludos_drawer_for_registered](https://hackmd.io/_uploads/Sk4Zua5va.png)
        
        - Home Page for Nonregistered User(Popular Games, Recommended Games do not exist for nonregistered user)

        ![home_for_non_registered1](https://hackmd.io/_uploads/S1bnuT9D6.png)

        - Home Page for Nonregistered User(Trending Topics & Upcoming Titles)

        ![home_for_nonregistered_2](https://hackmd.io/_uploads/S1CXKp5vp.png)
        
        - Home Page Drawer for Nonregistered User
       
        ![home_page_drawer_nonregistered](https://hackmd.io/_uploads/HJOPu6cPa.png)
        
        - Mobile Source Codes:
            * [main.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/main.dart)
            * [upcoming_titles_post.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/upcoming_title_post.dart)
            * [recommended_games.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/rec_games.dart)
            * [home_game_sum.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/home_game_sum.dart)
            * [custom_navigation_bar.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/custom_navigation_bar.dart)

* Change Password:
    * Web
        - Click for changing password
        
        ![Ekran Resmi 2023-12-29 12.25.05](https://hackmd.io/_uploads/HyAFgGhva.jpg)
        
        - Enter the old and new passwords to change password
        
        ![Ekran Resmi 2023-12-29 12.25.56](https://hackmd.io/_uploads/HyQ2lGnwp.jpg)

        - Source code:
            - [ChangePasswordPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/ChangePasswordPage.js)


    * Mobile
        - Users can Change Their Passwords from Left Drawer by Giving Old Password and New Password Pair
        
        ![change_password_page](https://hackmd.io/_uploads/ByNHxeowT.png)
        
        - Mobile Source Code:
            * [change_password.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/change_password.dart)

* Owner User Profile Page(View & Edit):
    * Web
        - View profile of the owner user
        
        ![Ekran Resmi 2023-12-29 12.27.49](https://hackmd.io/_uploads/Hkb4-M2wp.jpg)

        - Edit profile page
    
        ![Ekran Resmi 2023-12-29 12.29.20](https://hackmd.io/_uploads/SJ6_bf2va.jpg)

        - Source code: 
            - [ProfilePage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/ProfilePage.js)
            - [EditProfilePage.js]()
        

    * Mobile

        - View Profile Page for Current User(General Informations)

        ![owner_user_profile_page1](https://hackmd.io/_uploads/ry5R569Da.png)
        
        - View Profile Page for Current User(Followed Games & Last Activities)
        
        ![owner_user_profile_page2](https://hackmd.io/_uploads/ry61iaqD6.png)
        
        - Edit Owned Profile Page

        ![Edit_profile_page](https://hackmd.io/_uploads/HkuDiTcP6.png)
        
        - Mobile Source Codes:
            * [user_profile_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/user_profile_page.dart)
            * [edit_profile_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/edit_profile_page.dart)
            * [last_activity_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/last_activity_summary.dart)

* Groups Page:
    * Web
        - Users can see groups page
         
        ![Ekran Resmi 2023-12-29 12.30.59](https://hackmd.io/_uploads/BJV1fGnwT.jpg)
        
        ![Ekran Resmi 2023-12-29 12.31.53](https://hackmd.io/_uploads/HkOzff2vT.jpg)
        
        - User can search groups detailly

        ![Ekran Resmi 2023-12-29 12.37.49](https://hackmd.io/_uploads/Hy1KXf3P6.jpg)
        
        - Registered users can create groups
        
        ![Ekran Resmi 2023-12-29 12.32.30](https://hackmd.io/_uploads/r1fSMM2vT.jpg)

        - Users can see unjoined groups

        ![Ekran Resmi 2023-12-29 12.33.30](https://hackmd.io/_uploads/H1O_GG2v6.jpg)
        
        - Users can see joined groups

        ![Ekran Resmi 2023-12-29 12.34.21](https://hackmd.io/_uploads/BJojGGnDa.jpg)
        
        - Owner of the group can edit the group

        ![Ekran Resmi 2023-12-29 12.34.56](https://hackmd.io/_uploads/HJxApMGhvp.jpg)
        
        

        
        - Source code:
            - [GroupPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/GroupPage.js)
            - [GroupsPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/GroupsPage.js)
            - [EditGroupForm.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/components/EditGroupForm.js)


    * Mobile
        - Nonregistered User Tries to Create a Group

        ![nonregistered_try_to_create_group](https://hackmd.io/_uploads/H1ShppcDT.png)
        
        - Nonregisterd User Tries to Join a Group

        ![nonregistered_try_to_join_group](https://hackmd.io/_uploads/HyZJATqwT.png)
        
        - Search for a Group by Game Title

        ![Group_search](https://hackmd.io/_uploads/SJCB06cD6.png)
        
        - Registered User Creates Group

        ![ludos_create_group](https://hackmd.io/_uploads/By6qCa5Da.png)
        
        - Group View Before Joined


        ![Group_view_before_joined](https://hackmd.io/_uploads/Bys0Raqv6.png)
        
        - Group View After Joined

        ![group_view_after_join](https://hackmd.io/_uploads/SJMe1A9Pa.png)
        
        ![group_view_with_posts](https://hackmd.io/_uploads/BJYmyRcv6.png)
        
        - Drawer for Group Management

        ![group_management_drawer](https://hackmd.io/_uploads/HknRq0qD6.png)
        
        - Group Member Views the Posts of the Group

        ![group_post_view](https://hackmd.io/_uploads/BJN6sCqDa.png)
        
        - Group Member Creates a Post in the Group
   
        ![group_thread_create](https://hackmd.io/_uploads/SyBW2R5Da.png)
        
        - Mobile Source Code:
            * [groups.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/group/groups.dart)
            * [group_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/group/group_summary.dart)
            * [create_group.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/group/create_group.dart)
            * [group_thread.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/group/create_group_thread.dart)
            * [group_forum.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/group/group_forum.dart)

* Games Page:
    * Web
        - Nonregistered & Registered Users View the Game Pages Created on the Ludos

        ![Ekran Resmi 2023-12-29 11.59.00](https://hackmd.io/_uploads/S1EPqW2vT.jpg)
    
        ![Ekran Resmi 2023-12-29 11.59.23](https://hackmd.io/_uploads/BJYuc-2Pp.jpg)
    
        - Registered Users Creates a New Game Page

        ![Ekran Resmi 2023-12-29 12.01.00](https://hackmd.io/_uploads/BJcA9-nDp.jpg)

        ![Ekran Resmi 2023-12-29 12.01.17](https://hackmd.io/_uploads/rJokoZ2wp.jpg)

        ![Ekran Resmi 2023-12-29 12.01.30](https://hackmd.io/_uploads/SyDgjZnw6.jpg)

        ![Ekran Resmi 2023-12-29 12.01.43](https://hackmd.io/_uploads/H1LWjWhv6.jpg)

        - Registered User Views a Game's Page, rates the game, share duration at the same page
        
        ![Ekran Resmi 2023-12-29 12.03.35](https://hackmd.io/_uploads/BJw_ob3DT.jpg)
        
        - Registered user can see reviews of the game and add review to the game

        ![Ekran Resmi 2023-12-29 12.05.39](https://hackmd.io/_uploads/rk-ln-3DT.jpg)

        - Registered user can see forums of the game

        ![Ekran Resmi 2023-12-29 12.06.28](https://hackmd.io/_uploads/HJGX2Znvp.jpg)
        
        - Registered user can see entities of the game
        
        ![Ekran Resmi 2023-12-29 12.06.47](https://hackmd.io/_uploads/BJrN3W3vp.jpg)

        - Registered user can see related and suggested games for the game
        
        ![Ekran Resmi 2023-12-29 12.07.23](https://hackmd.io/_uploads/B1iLhbhDT.jpg)
        
        - Registered user can create entity by clicking the button on entities tab of the game

        ![Ekran Resmi 2023-12-29 12.11.10](https://hackmd.io/_uploads/BJtS6bhva.jpg)

        - Registered user can see entity of the game (character, item, environment, and package)

        ![Ekran Resmi 2023-12-29 12.09.17](https://hackmd.io/_uploads/BJ903-2wT.jpg)
        
        - Source 
            - [GamePage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/GamePage.js)
            - [CreateEntityPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/CreateEntityPage.js)


    * Mobile
        - Nonregistered & Registered Users View the Game Pages Created on the Ludos

        ![ludos_games_page-min](https://hackmd.io/_uploads/Hkca60qv6.png)
        
        - Registered Users Creates a New Game Page

        ![ludos_create_game](https://hackmd.io/_uploads/BJXf0AqD6.png)
        
        - Registered User Views a Game's Page Before Following
        
        ![game_page_before_follow-min](https://hackmd.io/_uploads/S19LkkoPT.png)
        
        - Registered User Views a Game's Page After Following
        
        ![game_page_after_follow-min](https://hackmd.io/_uploads/Sk1okysva.png)
        
        ![game_page_2](https://hackmd.io/_uploads/ry1ugJswa.png)
        
        - User Views the Properties of the Game
        
        ![game_properties-min](https://hackmd.io/_uploads/BJ6Zekjwp.png)
        
        - Registered User Adds a Review for the Game

        ![game_add_review](https://hackmd.io/_uploads/H1geWkowT.png)
        
        ![game_review_success_popup](https://hackmd.io/_uploads/rknrb1iDp.png)
        
        - User Views All the Reviews for that Game

        ![game_all_reviews](https://hackmd.io/_uploads/rkOQZ1sPa.png)
        
        - Registered User can Edit the Game Page and Add Entities for the Game from Drawer

        ![game_page_add_entity_edit_game_drawer](https://hackmd.io/_uploads/Hyx0Z1jvp.png)
        
        ![edit_game_page](https://hackmd.io/_uploads/HJstXkoDT.png)
        
        ![create_entity_for_game](https://hackmd.io/_uploads/HyMsmysPT.png)
        
        ![game_entity_type_selection](https://hackmd.io/_uploads/B1k2XJoPT.png)

        - Registered User can Rate the Game via Star Icons directly

        ![game_page_high_rate-min](https://hackmd.io/_uploads/rJGjf1jwa.png)
        
        - User can View All the Entities of the Game

        ![game_page_all_entities](https://hackmd.io/_uploads/HJ0WXJiP6.png)
        
        - User can View a Specific Entity
        
            * Character Entity
        ![character_entity_example-min](https://hackmd.io/_uploads/HJNNVJivT.png)
        
            * Package Entity
        ![entity_package_example_sims2-min](https://hackmd.io/_uploads/ByVwNysD6.png)
        
            * Item Entity
        ![item_entity_ex_pokemon_blue-min](https://hackmd.io/_uploads/r18Y4Jjwa.png)
        
            * Environment Entity
        ![game_page_environment_entity_example_sims2-min](https://hackmd.io/_uploads/SyDqE1ovp.png)
        
        - Mobile Source Codes:
            * [entity_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/entity_summary.dart)
            * [game_review.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/game_review.dart)
            * [game_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/game_summary.dart)
            * [create_entity.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/create_entity.dart)
            * [create_game.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/create_game.dart)
            * [edit_game.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/edit_game.dart)
            * [entity_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/entity_page.dart)
            * [game_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/game_page.dart)
            * [game_properties.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/game_properties.dart)
            * [game_reviews_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/game_reviews_page.dart)
            * [games_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/games_page.dart)
            
* Upcoming Titles:
    * Web
        - Users can View Upcoming Titles on Games Page
        
        ![Ekran Resmi 2023-12-29 11.53.51](https://hackmd.io/_uploads/SkaQK-3DT.jpg)
        
        - Registered Users can Like, Dislike, or Comment on Upcoming Title Posts
         ![Ekran Resmi 2023-12-29 11.56.00](https://hackmd.io/_uploads/SyL2YW3P6.jpg)
         - Web Source Code
             - [GamesPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/GamesPage.js)
             - [ForumTopic.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/components/ForumTopic.js)

    * Mobile
        - Users can View Upcoming Titles on Main Page

        ![upcoming_titles_page](https://hackmd.io/_uploads/B1AcwJsD6.png)

        - Registered Users can Like, Dislike, or Comment on Upcoming Title Posts

        ![upcoming_titles_post_example](https://hackmd.io/_uploads/r1FWuJiw6.png)
        
        - Mobile Source Code:
            * [upcoming_title_thread_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/upcoming_title_thread_page.dart)
            * [upcoming_titles.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/upcoming_titles.dart)
            * [upcoming_title_post.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/upcoming_title_post.dart)
        
* Search Page:
    * Web
        - User can search from header for games, forums, and groups
  
         ![Ekran Resmi 2023-12-29 12.41.26](https://hackmd.io/_uploads/BJqvVf3Pp.jpg)
     
        - Users can search for games from the games page
    
         ![Ekran Resmi 2023-12-29 12.40.52](https://hackmd.io/_uploads/Hk7VVf2Da.jpg)

         - Users can search for the groups from groups page

    ![Ekran Resmi 2023-12-29 11.51.29](https://hackmd.io/_uploads/SkQj_WnvT.jpg)
    
    ![Ekran Resmi 2023-12-29 11.52.10](https://hackmd.io/_uploads/SyspOb2v6.jpg)





    * Mobile
        - Users can Search Games, Threads, and other Users

        ![search_landing_page-min](https://hackmd.io/_uploads/rJFBF1owT.png)
        
        - Users can Search Games by Their Titles, Tags, and Platforms They Supported. Also Users can Apply Further Filtering and Sorting

        ![red_game_search](https://hackmd.io/_uploads/ry0qtkiwa.png)
        
        ![search_results_for_title_red-min](https://hackmd.io/_uploads/SJvUcyow6.png)
        
        

        - Users can Search Posts by Their Titles, Bodies, Tags, Game They Belong, and User They Belong. Also users can Apply Further Filtering and Sorting on the Result. 
               
        ![sims_post](https://hackmd.io/_uploads/r1qEsysP6.png)

        ![search_post_results_for_game_sims](https://hackmd.io/_uploads/rkmPsJswa.png)
        
        - Users can Search Other Users by Their Usernames

        ![kard_search](https://hackmd.io/_uploads/BJUy31iDT.png)
        
        ![search_user_results_for_-kar-_keyword](https://hackmd.io/_uploads/ByvgnJovT.png)
        
        - Also Users can Visit Other Users' Profile Pages Directly Pushing on Desired Search Result

        ![visiting_another_users_profile](https://hackmd.io/_uploads/Bk_O3yjva.png)
        
        - Mobile Source Code:
            * [game_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/game_summary.dart)
            * [user_summary.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/user_summary.dart)
            * [detailed_game_search.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/detailed_game_search.dart)
            * [detailed_post_search.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/detailed_post_search.dart)
            * [detailed_user_search.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/detailed_user_search.dart)
            * [search_landing_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/search_landing_page.dart)
            * [search_page_game.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/search_page_game.dart)
            * [search_page_post.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/search_page_post.dart)
            * [search_page_user.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/search_page_user.dart)


* Annotations:
    * Web
        * Users can View Annotations Previously Entered 
        <img width="1633" alt="Ekran Resmi 2023-12-29 11 41 26" src="https://github.com/bounswe/bounswe2023group7/assets/70536420/83a596d4-ceb1-42e8-863c-23feb0771b6b">
        <br>
            <img width="1633" alt="Ekran Resmi 2023-12-29 11 41 26" src="https://hackmd.io/_uploads/SkTKAt3vp.png">

        *  Registered Users can Select Any Phrase to Annotate by Selecting It and Holding until Annotate Option Appears and can write desired annotation here
        <img width="1030" alt="Ekran Resmi 2023-12-29 11 37 23" src="https://github.com/bounswe/bounswe2023group7/assets/70536420/d167be19-8f54-49b3-b185-f6c723e225da">
        * Source Code:
            - [GamePage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/GamePage.js) 
            - [EntityPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/EntityPage.js)
           - [ThreadPage.js](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/frontend/src/pages/ThreadPage.js)

    * Mobile
        - Users can View Annotations Previously Entered

        ![view_annotation_for_sims](https://hackmd.io/_uploads/HkrZA1owp.png)
        
        - Registered Users can Select Any Phrase to Annotate by Selecting It and Holding until Annotate Option Appears

        ![annotated_phrase_selection](https://hackmd.io/_uploads/BkDK01jvT.png)
        
        - Then User can Enter Desired Annotation for that Phrase

        ![creating_annotation](https://hackmd.io/_uploads/H15RRJjDT.png)
        
        - Mobile Source Code:
            * [entity_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/entity_page.dart)
            * [game_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/game_page.dart)
            * [thread_page.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/thread_page.dart)
            * [styledRange.dart](https://github.com/bounswe/bounswe2023group7/blob/development/ludos/mobile/lib/reusable_widgets/styledRange.dart)



---
* For each user of your user interface designs, provide the relevant links to the source code in your project repository
* Provide screenshots with meaningful content for the Web and Mobile user interfaces you have implemented.

## **Annotations**

### **Web:**
* ***Status:*** In our project, annotations have been successfully implemented across various sections, enhancing user interaction and content engagement. This includes *image annotations* for *thread images* and *text annotations* for game bios, stories, guides, trivia in the *game page*; entity descriptions in the *entity page*; thread texts, and comments in the *thread page*. This implementation has been tailored to foster a more interactive and informative experience for users, allowing them to add, view, and delete annotations in multiple pages within the platform.
* ***Compliance with W3C WADM:*** Our implementation strictly adheres to the W3C Web Annotation Data Model (WADM) standards. This compliance ensures that our annotation system is robust, interoperable, and aligns with global web standards. By following WADM, we've created a system where annotations are not only consistent across different parts of our platform but also potentially compatible with other systems using the same standards.
    * *According to W3C WADM, an annotation should consist of a body, a target, and context data. Here's how our implementation aligns with this:*
      ```
      // Format Annotation Data (example from your text annotation implementation)
        const formatAnnotationData = (annotation) => {
          return {
            "@context": "http://www.w3.org/ns/anno.jsonld",
            type: "Annotation",
            body: {
                type: "TextualBody",
                value: annotation.body[0].value,
                purpose: "commenting"
            },
            target: {
                source: window.location.href,
                selector: {
                    start: annotation.target.selector[1].start,
                    end: annotation.target.selector[1].end
                }
            }
            };
        };
        ```
            In this function:
            @context specifies the JSON-LD context for W3C WADM. 
            type is set to "Annotation".
            body contains the content of the annotation, its type, and purpose.
            target identifies where the annotation applies, including the source (URL) and the text selector (start and end positions).
                    
        * Our project uses RESTful API calls to interact with annotations. Here's an example that aligns with WADM standards:
         ```
        // Send Annotation Data to Server
        const sendAnnotationData = async (data, method) => {
            try {
            const url =`http://${process.env.REACT_APP_API_URL}/annotation/post/{threadId}`;
            const response = await axios.post(url, data);
            console.log(`Annotation ${method}d:`, response.data);
            } catch (error) {
            console.error(`Error ${method}ing annotation:`, error);
          }
      };
    ```
    In this function:
    Annotations are sent to the server using a POST request.
    The annotation data is structured in accordance with WADM, ensuring consistency and standardization.
    The server endpoint (/annotation/post/{threadId}) is designed to receive and process annotations in the WADM format.
* ***Implementation description***
1. **Image Annotations (Thread Page):** Implemented using the Annotorious library, we enabled users to annotate images in thread sections. Users can add comments to selected parts of an image and delete them, enhancing the visual content with interactive and informative notes.

2. **Text Annotations (Game Page & Entity Page):** For game-related content like bios, stories, guides, and trivia, as well as entity descriptions, we utilized the Recogito library. This feature allows users to highlight text segments and add and delete annotations, offering insights or additional information relevant to the selected text.

3. **Thread and Comment Annotations (Thread Page):** The thread and comments sections of the project are equipped with text annotation capabilities. This feature enhances user engagement, allowing users to create and delete annotations.

    **Technical Details:**

    * For initializing annotations, we ensured the DOM elements were available and used *useEffect* hooks for setup.
    * *useRef* was employed to manage the annotation instances, ensuring they are correctly initialized and destroyed based on the component lifecycle.
    * We included functions such as *onAnnotationCreated* and *onAnnotationDeleted* to handle annotation interactions.
    * AJAX calls via axios were used to interact with our backend, adhering to the WADM structure in our API requests and responses.

### **Mobile:**
* ***Status:*** In our mobile application, we have successfully integrated annotations into various content sections, including *Thread content, Comment content, Entity Description, and Game Bio content*. Currently, text annotations are available for all these sections, except for image annotation, which has not been implemented. It's important to note that since we only show *Game Bio* field in Game Pages, annotation is applicable for that field only within the context of games. Users of any type have the ability to contribute annotations to these fields. Upon visiting a page that has at least one annotation, users will encounter the annotated text. A simple click on the annotated text triggers a pop-up, showing additional details about the annotation.
* ***Compliance with W3C WADM:*** As mobile team, we stick to the rules of the W3C Web Annotation Data Model (WADM) to make sure our annotation system works well. This means our system is strong, can work with other systems, and follows the same rules as the entire web. The annotations in mobile and frontend work compatible thanks to this system.
* ***Implementation description:*** In Flutter, we didn't use any library to handle the annotation functionalities. The text annotation in specified pages and fields are very similar to each other. So, I will use Game Bio for example.
For any annotatable field, we used *SelectableText.rich* property. We added an *Annotate* button to the context menu, which is the menu that shows up when you long press some text. When you click it and type the your annotation, you can click the *Create Annotation* button in the popup. When this button is pressed, the related function in our API Service is called, for example: 
```
apiService.createAnnotationGameBio(
                              widget.token,
                              widget.id,
                              annotatedText,
                              start,
                              end,
                              annotationText);
```
This sends a POST request to our backend server. 
```
 Future<http.Response> createAnnotationGameBio(
      String? authToken,
      String gameID,
      String source,
      int start,
      int end,
      String annotationBody) async {
    var uri = Uri.parse("$baseURL/annotation/gamebio/$gameID");

    final body = jsonEncode(<String, Object>{
      '@context': "",
      'type': "Annotation",
      'body': annotationBody,
      'target': {
        'source': source,
        'selector': {'start': start, 'end': end}
      }
    });
    final response = await http.post(uri, body: body, headers: {
      'content-type': "application/json",
      'Authorization': 'Bearer $authToken'
    });
    return response;
  }
```
For building a page that includes annotation, in the *initState()* function of that page, we send a GET request to the backend server to get the annotations in that page. After getting the annotations, we build the field with the annotated texts in a different background color. When the user clicks an annotated text, a box which shows the annotation details will pop up.

* ***API calls examples to annotation server:*** [Postman Collection](https://api.postman.com/collections/22203914-387eae3e-9c2f-4cec-aeb5-50be244f29d5?access_key=PMAT-01HJV6MPTAGZCWQQR1NQ3WBB3G)


## **Scenario**

### Hatice Erk

**Persona** 

- Age: 22
- Job: Software Developer
- Interests: Playing mobile and board games, watching movies, and listening to music

**Story**

Hatice, a 22-year-old software developer who loves playing games on her phone and board games. When she's not coding, she enjoys diving into virtual worlds, watching movies, and listening to music. Hatice is already a user of the gaming platform, Ludos, where she shares her gaming experiences with the community. One day, as she scrolled through her usual games, she felt a bit bored and decided to explore our platform more.

**Goals**

- She wants to have a better profile to interact with people easily.
- She wants to create a group to communicate about the episode she stuck in her favorite mobile game, Merge Mansion.
- She wants to learn more about the game "It Takes Two".
- She wants to look for new Upcoming Titles.
- She wants to look her friends favorite games and activities.

**Preconditions**
- She is a registered user of the platform.
- She has sufficient knowledge of the platform to surf.

**Actions**

- She tries to log into her account but can not remember her password.
- She clicks the "Forgot Password" button.
- She verifies her e-mail, and creates a new password.
- She logs into her account with her new pasword.
- She navigates to her profile screen.
- She adds a profile picture.
- She updates her gaming interests in "About Me".
- She goes to Groups section.
- She creates a group called "Episode: Conservatory" for "Merge Mansion".
- She creates the first post in the group asking how long it takes to pass this episode. 
- She goes back to Groups section.
- She filters groups with the game "It Takes Two".
- She joins to "It Takes Two Beginners" group.
- She reads the posts in the forum of this group.
- She navigates to the game page of "It Takes Two".
- She follows the game.
- She looks the recommended games for this games, and sees "Sims 4", which she played before.
- She navigates to the game page of "Sims 4".
- She creates a review, rates the 4 out of 5 with her experience and writes her thoughts about the game.
- She goes to Upcoming Title's section.
- She sees an upcoming release for "The Witcher".
- She comments under this thread.
- She goes to "The Witcher" game page.
- She clicks "See All Entities" button.
- She sees "Ciri" under characters section.
- She clicks and reads the information about "Ciri".
- She creates an annotation for description of "Ciri".
- She navigates to the search.
- She clicks the User search.
- She looks for her friend Kardelen.
- She clicks the button to navigate Kardelen's page.
- She navigates and sees the Kardelen's page.
- She sees last activities of Kardelen.


## **Management**

### Implemented Changes and their impact
1. Scenerio Strategy:

    In the first milestone demo, while preparing for scenorio, we focused on the wrong aspects such as persona and story. In the first presentation, we created a boy which wanted to search about a game. However, the scenerio was not effective on audience, so presentation seemed weak and criticized. Additionally some mishaps we encountered worsened our presentation.

    In the second milestone demo, we focused on the story side of the scenerio and improved our preperation. The scenerio was better than the first. The audience was more reactive to presentation and features are displayed with better scenerio telling. However the relationship between people in the scenerio was not quite related with game-spesific domain.
    
    In the third milestone demo, we created a more basic and game-spesific scenerio to show our features. Our belief is, we were able to show our features well and we impressed audience about our key features.
    
2. Web Home Page
    
    One of the critic issues was home page throughout term. In the presentation, customers asked mainly how homepage is related with games. We planned firstly home page would display forum topics related games. However, forum was not first main component of the platform. Additionally, the topics includes topics such as bugs, errors, so the customers requested from us to modify the home page. 
    
    In second milestone. we present a more combined homepage and at this time we did not get negative feedback. We continued to attach additional features and implemented a home page linked with groups, forums, and most importantly games.
    
3. Communication Between Teams
    
    In the first weeks of the term, the mobil and frontend teams did not communicate well. We got feedback that mobile and frontend were not coherent completely. Therefore as much as possible we decided to add together and implemented similarly.
    
4. Lab Hours Efficiency
    
    The the first labs we focused on deliverables instead of group communication. We was sharing our tasks and filling the report. However after first milestone, we started to discuss more about what we should have done and what we should do. We discussed together how functionalities should be developed in each lab. In short, we prioritize to detail our plan instead of task sharing and report writing. 
    

### Reflections related to your Final Milestone Demo

    
The general impression of the customers was good on our view. In this demo, we aimed to represent annotations, groups, game entities, recommendations and search functionality based features. These functionalities almost did not have a problem before the presentation and in the demo we could show them seamlessly.
    
The customers particularly expected to see these uncommon features from our application:
    - Text Annotation
    - Image Annotation
    - Semantic Search
The text and image annotations did not get a negative review. Especially our image annotation attracted attention. On the other hand, semantic search was not liked as annotations. Customers were not happy with it.
    

    

### Lessons Learned
    
What we could have change:
    
* The allocation of teams can be changed. However the team consists of 11 people, so we would deal with problems eventually. Backend team was not be able to share tasks evenly as mobile and frontend team. The effort usually belonged at most two people (especially, Ömer Şafak).  
    
* We should not have lost time with mock datas. Sometimes frontend and mobile team we went ahead of backend. Therefore, connecting them also needed us to work on the same page. Additionally, some design choices made our job harder. Due to miscommunication, sometimes we did incompitable implementation between pages, and this caused to deal with them again. 

# **Individual Reports**

### Elif Kızılkaya

-  **Member**: Elif Kızılkaya Group 7, Frontend
- **Responsibilities**: 
    - ***Milestone 1:***
    In the frontend team, my roles were diverse. I set up Docker, managed deployment processes, and planned the project structure. I created templates for our project components and updated them as our project evolved. Key frontend features like the forum page, sidebar, and header were developed by me. Alongside my team, I prepared materials and scenarios for the milestone presentation. My responsibilities also included the software's pre-release and preparing the milestone report.
    * ***Milestone 2:***
    My tasks involved designing and implementing the "Create Game" page, which I linked to the backend using a form. I also developed the Forums page, enabling search functionality and showcasing trending/latest topics, and added a "Forums" tab to the sidebar. Post-game creation, I was responsible for generating and redirecting to the related game page.
    I designed our homepage in Figma based on feedback and then implemented this design. I activated various buttons like "My Games," "My Groups," "Change Password," and "Create Game" in the header and sidebar. I also contributed to creating user scenarios for our team's presentation and demo, explained our Frontend during the presentation, and designed and implemented the Forum (thread) page, connecting it to the backend. I was responsible for the commenting feature on threads as well.
    * ***Milestone 3:***
    I conducted extensive research and implemented image annotation in threads and text annotation in threads, comments; and game bios in game page. I initially created the homepage and continually updated it throughout the semester based on feedback and backend endpoints such as trending games, trending topics also the latest topics in the forums page. The sidebar was regularly updated with new features like creating groups, threads, and games.
    I resolved various frontend bugs, such as issues with container height, routing, searching, and thread images. I also developed the footer layout and the "Upcoming Title" feature. I revised threads and comments, adding like/dislike/edit/delete functionality. The search feature on the forums page was another of my contributions.
    Together with Kardelen and Hatice, I prepared the user scenario and presented the final demo. Also, together with them, we prepared a video for demonstrating our system. Also, i contributed to the milestone report for annotations in web.
- **Main contributions**: 
    -    ***Milestone 1:***
            -    I wrote the customer feedback and project reflections in the milestone report and established a template for it.
            - Collaborated with Hatice Erk, Yunus Emre Altuğ, and Hakan Karakuş on the project plan.
            - Played a key role in the pre-release of our software with Ömer Şafak Bebek and Hatice Erk.
            - Authored the README for the frontend section and introduced ESLint and Prettier for code quality.
            -   Prepared user scenarios and presentation slides with Hatice Erk, Kardelen Erdal, and Muhammet Tayyip Kamiloğlu.
            - Reviewed and updated deliverables with Hatice Erk.
            - Developed core frontend components like forum page, sidebar, and header.
            - Designed the homepage and general structure with Muhammet Tayyip Kamiloğlu and Yunus Emre Altuğ.
            - Collaborated on game palette, project logo, GitHub actions pipeline for frontend deployment, and Docker setup with Yunus Emre Altuğ.
            - Set up the AWS deployment environment with Yunus Emre Altuğ and Ömer Şafak Bebek.
            - Updated use case and class diagrams, adding new classes and use cases with Hatice Erk and Kardelen Erdal.
    -    ***Milestone 2:***
            -    Designed and implemented the forum (thread) page layout and 'thread' component in Figma.
            - Developed 'topic' components for forums and home pages.
            - Enhanced user experience by making layout improvements and adding features like commenting on threads.
            - Redesigned the Home Page layout in Figma and implemented slider components.
            - Collaborated with Kardelen Erdal and Hatice Erk on user scenarios for Milestone 2 demo and presented the frontend part.
            - Designed and implemented a Forums page and a 'Create Game' page with a five-step form.
            - Added 'My Games' and 'My Groups' buttons to the header and sidebar.
            - Generated game pages automatically upon game creation.
            - Crafted the template for the Milestone 2 report and updated the Individual Contribution Report.
            - Tagged for Milestone 2 release and resolved frontend issues with Yunus Emre.
            - Enhanced Home Page and Forums page based on user scenario feedback.
            - Synchronized game platforms and tags with the mobile and frontend team with Kardelen Erdal.
            - Added a default image for profile pages without avatars and cleaned up dummy data from the database.
            - Created game pages, users, and threads for the milestone demo.
    -    ***Milestone 3:***
            -	Updated home page to connect trending games (games with higher num of followers) in slider and treding topics (threads with highest number of likes) to the backend, also updated the visual of the group topic to make it a more suitable to our UI design. Also, added suggested games banner part specific to user on the home page. When user is guest, chosen games are returned.
                -	Took responsibility for solving the bugs:
                    - Game empty search routes to undefined path ([#830](https://github.com/bounswe/bounswe2023group7/issues/830))
                    -	The games on the Create thread and Create group forms return null ([#828](https://github.com/bounswe/bounswe2023group7/issues/828))
                    - Image not seen or causing error in the threads ([#737](https://github.com/bounswe/bounswe2023group7/issues/737), [#673](https://github.com/bounswe/bounswe2023group7/issues/673))
                    -	Navigating to empty page after creating the game ([#728](https://github.com/bounswe/bounswe2023group7/issues/728))
            - Implemented create (post), fetch (get), display, delete text annotations fort the comments and threads in thread page; also the game bio in the game page. Used annotorious and recogito libraries.
            - Conducted a comprehensive research about annotations, found libraries to use, example codes, and after implementing I shared the insights of how to implement it to my team mates
            - With hatice and kardelen, I prepared a comprehensive user scenario to showcase our features in the final demo and presented it.
            - Implemented a footer for the layout for the users to connect to us for their complaints, wishes and suggestions, to also request to change their user type to developer or e-sport player.
            -	I designed and implemented upcoming titles feature on the frontend. I updated the thread component, forum topic and forum topic for game components to additionally display launching date and demo link when it is upcoming title. Also, updated the create a thread form to create a upcoming title if the user is a developer.
            -	I updated the profile page to include user type area, I designed 3 different icons to display if the user is gamer, developer, or e-sport player.
            -	Updated the create button to display a menu with the options: create thread, create game, and create group.
            -	I connected the latest topics part on forums page to backend to display the most recently opened threads.
            -	I implemented like/dislike/delete/edit thread and like/dislike/delete/edit comment.
            -	I implemened search functionality on forums page, connected it to backend.
            -	Created games, threads, entities, groups for the milestone demo.
- **Code related significant issues, resolved**:
    - ***Milestone 1:*** [#341](https://github.com/bounswe/bounswe2023group7/issues/341), [#300](https://github.com/bounswe/bounswe2023group7/issues/300), [#299](https://github.com/bounswe/bounswe2023group7/issues/299), [#298](https://github.com/bounswe/bounswe2023group7/issues/298), [#273](https://github.com/bounswe/bounswe2023group7/issues/273), [#268](https://github.com/bounswe/bounswe2023group7/issues/268), [#272](https://github.com/bounswe/bounswe2023group7/issues/272), [#369](https://github.com/bounswe/bounswe2023group7/issues/369), [#332](https://github.com/bounswe/bounswe2023group7/issues/332)
    - ***Milestone 2:*** [#593](https://github.com/bounswe/bounswe2023group7/issues/593), [#575](https://github.com/bounswe/bounswe2023group7/issues/575), [#571](https://github.com/bounswe/bounswe2023group7/issues/571), [#555](https://github.com/bounswe/bounswe2023group7/issues/555), [#514](https://github.com/bounswe/bounswe2023group7/issues/514), [#511](https://github.com/bounswe/bounswe2023group7/issues/511), [#475](https://github.com/bounswe/bounswe2023group7/issues/475), [#431](https://github.com/bounswe/bounswe2023group7/issues/431), [#428](https://github.com/bounswe/bounswe2023group7/issues/428), [#430](https://github.com/bounswe/bounswe2023group7/issues/430), [#429](https://github.com/bounswe/bounswe2023group7/issues/429), [#472](https://github.com/bounswe/bounswe2023group7/issues/472), [#473](https://github.com/bounswe/bounswe2023group7/issues/473), [#548](https://github.com/bounswe/bounswe2023group7/issues/548), [#609](https://github.com/bounswe/bounswe2023group7/issues/609)
    - ***Milestone 3:*** [#822](https://github.com/bounswe/bounswe2023group7/issues/822), [#843](https://github.com/bounswe/bounswe2023group7/issues/843), [#782](https://github.com/bounswe/bounswe2023group7/issues/782), [#779](https://github.com/bounswe/bounswe2023group7/issues/779), [#778](https://github.com/bounswe/bounswe2023group7/issues/778), [#758](https://github.com/bounswe/bounswe2023group7/issues/758), [#757](https://github.com/bounswe/bounswe2023group7/issues/757), [#756](https://github.com/bounswe/bounswe2023group7/issues/756), [#755](https://github.com/bounswe/bounswe2023group7/issues/755), [#714](https://github.com/bounswe/bounswe2023group7/issues/714), [#711](https://github.com/bounswe/bounswe2023group7/issues/711), [#709](https://github.com/bounswe/bounswe2023group7/issues/709), [#656 ](https://github.com/bounswe/bounswe2023group7/issues/656), [#655](https://github.com/bounswe/bounswe2023group7/issues/655), [#654](https://github.com/bounswe/bounswe2023group7/issues/654), [#653](https://github.com/bounswe/bounswe2023group7/issues/653)
    
- **Code related significant issues, reviewed**: [#797]
    - **Milestone 1:** [#371](https://github.com/bounswe/bounswe2023group7/issues/371), [#350](https://github.com/bounswe/bounswe2023group7/issues/350), [#316](https://github.com/bounswe/bounswe2023group7/issues/316), [#297](https://github.com/bounswe/bounswe2023group7/issues/297), [#271](https://github.com/bounswe/bounswe2023group7/issues/271)
    - **Milestone 2:**  [#545](https://github.com/bounswe/bounswe2023group7/issues/545), [#508](https://github.com/bounswe/bounswe2023group7/issues/508), [#507 ](https://github.com/bounswe/bounswe2023group7/issues/507), [#476](https://github.com/bounswe/bounswe2023group7/issues/476), [#464](https://github.com/bounswe/bounswe2023group7/issues/464), [#463](https://github.com/bounswe/bounswe2023group7/issues/463), [#435](https://github.com/bounswe/bounswe2023group7/issues/435), [#423](https://github.com/bounswe/bounswe2023group7/issues/423), [#422](https://github.com/bounswe/bounswe2023group7/issues/422) 
    - **Milestone 3:** [#797](https://github.com/bounswe/bounswe2023group7/issues/797), [#794](https://github.com/bounswe/bounswe2023group7/issues/794), [#774](https://github.com/bounswe/bounswe2023group7/issues/774), [#755](https://github.com/bounswe/bounswe2023group7/issues/755), [#710](https://github.com/bounswe/bounswe2023group7/issues/710), [#698](https://github.com/bounswe/bounswe2023group7/issues/698), [#700](https://github.com/bounswe/bounswe2023group7/issues/700), [#651](https://github.com/bounswe/bounswe2023group7/issues/651), [#650](https://github.com/bounswe/bounswe2023group7/issues/650), [#644](https://github.com/bounswe/bounswe2023group7/issues/644)
- **Management related significant issues, resolved**:
    - **Milestone 1:** [#374](https://github.com/bounswe/bounswe2023group7/issues/374), [#305](https://github.com/bounswe/bounswe2023group7/issues/305), [#381](https://github.com/bounswe/bounswe2023group7/issues/381), [#380](https://github.com/bounswe/bounswe2023group7/issues/380), [#377](https://github.com/bounswe/bounswe2023group7/issues/377), [#376](https://github.com/bounswe/bounswe2023group7/issues/376), [#304](https://github.com/bounswe/bounswe2023group7/issues/304), [#279](https://github.com/bounswe/bounswe2023group7/issues/279), [#277](https://github.com/bounswe/bounswe2023group7/issues/277), [#273](https://github.com/bounswe/bounswe2023group7/issues/273), [#267](https://github.com/bounswe/bounswe2023group7/issues/267), [#260](https://github.com/bounswe/bounswe2023group7/issues/260), [#255](https://github.com/bounswe/bounswe2023group7/issues/255), [#246](https://github.com/bounswe/bounswe2023group7/issues/246), [#241](https://github.com/bounswe/bounswe2023group7/issues/241), [#239](https://github.com/bounswe/bounswe2023group7/issues/239), 
    - **Milestone 2:** [#544](https://github.com/bounswe/bounswe2023group7/issues/544), [#616](https://github.com/bounswe/bounswe2023group7/issues/616), [#543](https://github.com/bounswe/bounswe2023group7/issues/543), [#513](https://github.com/bounswe/bounswe2023group7/issues/513), [#509](https://github.com/bounswe/bounswe2023group7/issues/509)  
    - **Milestone 3:** [#868](https://github.com/bounswe/bounswe2023group7/issues/868), [#761](https://github.com/bounswe/bounswe2023group7/issues/761), [#704](https://github.com/bounswe/bounswe2023group7/issues/704)

- - **Management related significant issues, reviewed**:
    - **Milestone 1:** [#264](https://github.com/bounswe/bounswe2023group7/issues/264), [#389](https://github.com/bounswe/bounswe2023group7/issues/389), [#375](https://github.com/bounswe/bounswe2023group7/issues/375)
    - **Milestone 2:** [#627 ](https://github.com/bounswe/bounswe2023group7/issues/627), [#623](https://github.com/bounswe/bounswe2023group7/issues/623),[#617](https://github.com/bounswe/bounswe2023group7/issues/617), [#590 ](https://github.com/bounswe/bounswe2023group7/issues/590), [#534](https://github.com/bounswe/bounswe2023group7/issues/534) 
    - **Milestone 3:** [#880](https://github.com/bounswe/bounswe2023group7/issues/880), [#759](https://github.com/bounswe/bounswe2023group7/issues/759), [#627](https://github.com/bounswe/bounswe2023group7/issues/627)
- **Pull requests, resolved:** 
    - ***Milestone 1:*** [#367](https://github.com/bounswe/bounswe2023group7/pull/367), [#370](https://github.com/bounswe/bounswe2023group7/pull/370), [#351](https://github.com/bounswe/bounswe2023group7/pull/351), [#335](https://github.com/bounswe/bounswe2023group7/pull/335), [#333](https://github.com/bounswe/bounswe2023group7/pull/333), [#330](https://github.com/bounswe/bounswe2023group7/pull/330), [#329](https://github.com/bounswe/bounswe2023group7/pull/329), [#293](https://github.com/bounswe/bounswe2023group7/pull/293)
    - ***Milestone 2:*** [#608](https://github.com/bounswe/bounswe2023group7/pull/608), [#583](https://github.com/bounswe/bounswe2023group7/pull/583) ,[#579](https://github.com/bounswe/bounswe2023group7/pull/579), [#572](https://github.com/bounswe/bounswe2023group7/pull/572), [#568](https://github.com/bounswe/bounswe2023group7/pull/568), [#557](https://github.com/bounswe/bounswe2023group7/pull/557), [#541](https://github.com/bounswe/bounswe2023group7/pull/541), [#516](https://github.com/bounswe/bounswe2023group7/pull/516), [#495](https://github.com/bounswe/bounswe2023group7/pull/495), [#452](https://github.com/bounswe/bounswe2023group7/pull/452), [#447](https://github.com/bounswe/bounswe2023group7/pull/447)
    - ***Milestone 3:***[#858](https://github.com/bounswe/bounswe2023group7/pull/858), [#856](https://github.com/bounswe/bounswe2023group7/pull/856), [#854](https://github.com/bounswe/bounswe2023group7/pull/854), [#848](https://github.com/bounswe/bounswe2023group7/pull/848), [#842](https://github.com/bounswe/bounswe2023group7/pull/842), [#831](https://github.com/bounswe/bounswe2023group7/pull/831), [#829](https://github.com/bounswe/bounswe2023group7/pull/829), [#825](https://github.com/bounswe/bounswe2023group7/pull/825), [#821](https://github.com/bounswe/bounswe2023group7/pull/821),[#813](https://github.com/bounswe/bounswe2023group7/pull/813), [#811](https://github.com/bounswe/bounswe2023group7/pull/811) ,[793](https://github.com/bounswe/bounswe2023group7/pull/793), [#792](https://github.com/bounswe/bounswe2023group7/pull/792), [#789](https://github.com/bounswe/bounswe2023group7/pull/789), [#738](https://github.com/bounswe/bounswe2023group7/pull/738), [#721](https://github.com/bounswe/bounswe2023group7/pull/721), [#674](https://github.com/bounswe/bounswe2023group7/pull/674), [#670](https://github.com/bounswe/bounswe2023group7/pull/670), [#663](https://github.com/bounswe/bounswe2023group7/pull/663), [#662](https://github.com/bounswe/bounswe2023group7/pull/662)
- **Pull requests, reviewed:**
    - **Milestone 1:** [#372](https://github.com/bounswe/bounswe2023group7/pull/372),[#363](https://github.com/bounswe/bounswe2023group7/pull/363), [#361](https://github.com/bounswe/bounswe2023group7/pull/361), [#347](https://github.com/bounswe/bounswe2023group7/pull/347), [#343](https://github.com/bounswe/bounswe2023group7/pull/343), [#336](https://github.com/bounswe/bounswe2023group7/pull/336)
    - **Milestone 2:** [#597](https://github.com/bounswe/bounswe2023group7/pull/597), [#550](https://github.com/bounswe/bounswe2023group7/pull/550), [#497](https://github.com/bounswe/bounswe2023group7/pull/497), [#449](https://github.com/bounswe/bounswe2023group7/pull/449), [#494](https://github.com/bounswe/bounswe2023group7/pull/494), [#584](https://github.com/bounswe/bounswe2023group7/pull/584), [#611](https://github.com/bounswe/bounswe2023group7/pull/611), [#612](https://github.com/bounswe/bounswe2023group7/pull/612)
    - **Milestone 3:** [#860](https://github.com/bounswe/bounswe2023group7/pull/860), [#857](https://github.com/bounswe/bounswe2023group7/pull/857), [#855](https://github.com/bounswe/bounswe2023group7/pull/855), [#844](https://github.com/bounswe/bounswe2023group7/pull/844), [#840](https://github.com/bounswe/bounswe2023group7/pull/840), [#838](https://github.com/bounswe/bounswe2023group7/pull/838), [#823](https://github.com/bounswe/bounswe2023group7/pull/823), [#820](https://github.com/bounswe/bounswe2023group7/pull/820), [#819](https://github.com/bounswe/bounswe2023group7/pull/819), [#800](https://github.com/bounswe/bounswe2023group7/pull/800), [#796](https://github.com/bounswe/bounswe2023group7/pull/796), [#746](https://github.com/bounswe/bounswe2023group7/pull/746), [#739](https://github.com/bounswe/bounswe2023group7/pull/739), [#731](https://github.com/bounswe/bounswe2023group7/pull/731), [#861](https://github.com/bounswe/bounswe2023group7/pull/861), [#680](https://github.com/bounswe/bounswe2023group7/pull/680)
- **Unit Tests:** I did not write unit test since I'm in the frontend team, we conducted manual testing.
- **Additional information**:   I presented the frontend part in milestone presentation and answered questions from the audience. I reviewed and tested the tasks done by the frontend team. I attended labs and general team meetings. On 25.12.2023, we checked everything and created the final release tag with Kardelen Erdal, Hatice Erk and Fatma Sena Alçı. I wrote the annotation part for web in the Final Report. As frontend and mobile teams, we were always in touch to be aligned and synced.


### Kardelen Erdal <a name="kardelen-erdal" />
-  **Member**: Kardelen Erdal - 2018400024 - Group 7 - Mobile Team
* **Responsibilities:** 
1.  **Milestone 1:**  I reviewed the class diagram and designed new sequence diagrams for annotation. I was responsible for communication in mobile team. I worked on implementing the home page from scratch and creating our folders with my team. After the design is reviewed with the frontend team, I was responsible for changing the log in page according to our decisions and connect log in and sign up buttons to the backend API. I implemented a splash screen for our application. I was assigned to task of implementing a sidebar in the home page which shows you if you're logged in or not. We also created .apk file for deliverables and I wrote our application's guide in ReadMe.md file. I prepared the milestone presentation materials and scenarios with my team.
2.  **Milestone 2:** I was assigned the task of Create Game and Edit Game pages. I implemented them from scratch and made revisions according to feedbacks and discussions. I connected the Forgot Password page to the backend endpoints. I was assigned to implement Entity related pages. I resolved some UI issues and missing fields that I saw in other pages like Games page, Search Game page, etc. I was assigned to make research on Annotation on Mobile Apps. I was responsible for removing the test data from the database. Also, I created .apk file with Hatice Erk and I was responsible for the mobile application part in the milestone presentation.
3.  **Milestone 3:** I have been mainly assigned to work on all the entity and annotation functionalities in mobile. I conducted research on Annotation. I also reviewed 16 PRs of my team and resolved conflicts in them. Again, I, Hatice Erk and Elif Kızılkaya were responsible for the scenario, presentation and creating the final release.

* **Main contributions:** 
1.  **Milestone 1:** 
      - I was assigned to task of revising class diagram with other team members. We discussed and revised the class diagram according to the feedbacks and new requirements.
      - I worked on implementing the home page with my team. We also discussed about color theme and design of the mobile application.
      - We created the folder "mobile" and initialized the application inside it.
      - I implemented log in and sign up pages of Mobile Application.
      - I was assigned the task of Adding Annotation to Sequence Diagram.
      - I changed log in page style after the design is finalized by both mobile and frontend teams.
      - I created API Service using http library for login and signup to connect to backend API.
      - I added splash screen into the mobile application after our logo and color theme are finalized.
      - I added a sidebar with log in/out buttons to the mobile application which shows if the user is logged in or not. I implemented userProvider class for general usage.
      - We created .apk file for Milestone 1 deliverables. I updated ReadMe.md file of mobile folder with instructions and links about how to download and use our application.
      - Before Milestone 1 Presentation, we met face to face and create a creative user scenario and presentation. In the presentation, I presented the introduction part and also presented the log in, sign up and home page of mobile application.
2.  **Milestone 2:**
    - I implemented the Forgot Password Page with the backend connection using verifyCode and changePassword endpoints.
    - I implemented Create Game Pages. Firstly, I implemented all fields of a game in the same page, but according to the feedbacks and the discussion with Elif Kızılkaya (Frontend), I divided Create Game into two pages for a better user experience.
    - I changed the location of Create Game button so that user can see it even if the page is scrolled.
    - In Login and Signup pages, the user was not able to see their password. I implemented a show/hide password button for those pages.
    - I added a default image for the games that have no coverlink.
    - I implemented Edit Game Pages and connected it to editGame endpoint. 
    - I implemented Create Entity Page with a backend connection, where user can access from the game page.
    - After the discussion with Elif Kızılkaya (frontend), I made changes on the options in Create Game and Edit Game pages.
    - I and Hatice Erk, implemented the navigation to the user profile when clicked from threads, comments and reviews.
    - While testing our buttons and endpoints, we created lots of test data in our database. And those were seen in our mobile application. For the customer presentation, I removed all the dumb data from the database.
    - I and Hatice Erk created .apk file for the milestone report.
    - I added the average rating with a rating icon, in game pages and game summaries.
    - In Games page, I changed the default Game Story field with the reply that we get from the endpoint.
    - I and Yunus Emre Altuğ made research on how to use annotation in our mobile application and on website.
    - I attended the Preparation of User Scenario for Milestone 2 meeting (Meeting #6). We prepared the scenario and the presentation.
    - I wrote the Meeting Notes #6.
    - I and Elif Kızılkaya had a discussion on resolving the inconsistency in some fields of game.
    - In the milestone presentation, I presented the mobile application part.
3.  **Milestone 3:**
    - I designed and implemented "Entities Page" which is accessible from any game page. It shows 4 different types of entities separately as a scroll view. 
    - I designed and implemented "Entity Page". It shows all the attributes of an entity. This page can also be annotated.
    - I revised "Create Entity Page". It now accepts user defined properties of an entity. Those properties are listed in Entity Page.
    - I revised the Entity endpoints after the backend team made changes on it.
    - I made the texts in our mobile application selectable to be able to annotate them.
    - I designed and implemented all the annotation related features in our mobile application, which are "add annotation" and "see annotations" in threads, entities, comments and game pages. 
    - I added an info box to the user profile page for applying e-sport or developer accounts. When you click it, it directs to the mail app in your phone.
    - I, Elif Kızılkaya and Hatice Erk created the scenario and presented the customer presentaiton.
    - I, Hatice Erk and Fatma Sena Alçı made the final .apk file.
    - I removed dumb data from the database before the customer presentation.
    - I, Elif Kızılkaya and Hatice Erk recorded the video for deliverables. 
    - I created example data for the presentation.
    

* **Code-related significant issues:**
1.  **Milestone 1:**  
Resolved Issues: [#271](https://github.com/bounswe/bounswe2023group7/issues/271), [#274](https://github.com/bounswe/bounswe2023group7/issues/274), [#287](https://github.com/bounswe/bounswe2023group7/issues/287), [#314](https://github.com/bounswe/bounswe2023group7/issues/314), [#315](https://github.com/bounswe/bounswe2023group7/issues/315), [#356](https://github.com/bounswe/bounswe2023group7/issues/356), [#365](https://github.com/bounswe/bounswe2023group7/issues/365), [#282](https://github.com/bounswe/bounswe2023group7/issues/282)
3.  **Milestone 2:**
Resolved Issues: [#414](https://github.com/bounswe/bounswe2023group7/issues/414), [#417](https://github.com/bounswe/bounswe2023group7/issues/417), [#459](https://github.com/bounswe/bounswe2023group7/issues/459), [#460](https://github.com/bounswe/bounswe2023group7/issues/460), [#461](https://github.com/bounswe/bounswe2023group7/issues/461),  [#521](https://github.com/bounswe/bounswe2023group7/issues/521),[#522](https://github.com/bounswe/bounswe2023group7/issues/522),   [#523](https://github.com/bounswe/bounswe2023group7/issues/523), [#524](https://github.com/bounswe/bounswe2023group7/issues/524), [#594](https://github.com/bounswe/bounswe2023group7/issues/594), [#595](https://github.com/bounswe/bounswe2023group7/issues/595), [#596](https://github.com/bounswe/bounswe2023group7/issues/596), [#603](https://github.com/bounswe/bounswe2023group7/issues/603)
Reviewed Issues: [#420](https://github.com/bounswe/bounswe2023group7/issues/420), [#530](https://github.com/bounswe/bounswe2023group7/issues/530), [#533](https://github.com/bounswe/bounswe2023group7/issues/533), [#535](https://github.com/bounswe/bounswe2023group7/issues/535), [#570](https://github.com/bounswe/bounswe2023group7/issues/570)
3.  **Milestone 3:**
 Resolved Issues: [#645](https://github.com/bounswe/bounswe2023group7/issues/645), [#646](https://github.com/bounswe/bounswe2023group7/issues/646), [#668](https://github.com/bounswe/bounswe2023group7/issues/668), [#685](https://github.com/bounswe/bounswe2023group7/issues/685), [#686](https://github.com/bounswe/bounswe2023group7/issues/686), [#688](https://github.com/bounswe/bounswe2023group7/issues/688), [#767](https://github.com/bounswe/bounswe2023group7/issues/767), [#769](https://github.com/bounswe/bounswe2023group7/issues/769), [#851](https://github.com/bounswe/bounswe2023group7/issues/851)
Reviewed Issues: [#647](https://github.com/bounswe/bounswe2023group7/issues/647), [#661](https://github.com/bounswe/bounswe2023group7/issues/661), [#678](https://github.com/bounswe/bounswe2023group7/issues/678), [#692](https://github.com/bounswe/bounswe2023group7/issues/692), [#694](https://github.com/bounswe/bounswe2023group7/issues/694), [#753](https://github.com/bounswe/bounswe2023group7/issues/753), [#768](https://github.com/bounswe/bounswe2023group7/issues/768), [#863](https://github.com/bounswe/bounswe2023group7/issues/863)


* **Management-related significant issues:** 
1.  **Milestone 1:** 
Resolved Issues: [#234](https://github.com/bounswe/bounswe2023group7/issues/234), [#240](https://github.com/bounswe/bounswe2023group7/issues/240), [#241](https://github.com/bounswe/bounswe2023group7/issues/241), [#252](https://github.com/bounswe/bounswe2023group7/issues/252), [#269](https://github.com/bounswe/bounswe2023group7/issues/269), [#253](https://github.com/bounswe/bounswe2023group7/issues/253), [#276](https://github.com/bounswe/bounswe2023group7/issues/276), [#305](https://github.com/bounswe/bounswe2023group7/issues/305)
3.  **Milestone 2:**
Resolved Issues:[#463](https://github.com/bounswe/bounswe2023group7/issues/463), [#509](https://github.com/bounswe/bounswe2023group7/issues/509), [#513](https://github.com/bounswe/bounswe2023group7/issues/513), [#542](https://github.com/bounswe/bounswe2023group7/issues/542), [#618](https://github.com/bounswe/bounswe2023group7/issues/618)
Reviewed Issues: [#436](https://github.com/bounswe/bounswe2023group7/issues/436), [#613](https://github.com/bounswe/bounswe2023group7/issues/613)
3.  **Milestone 3:**
Resolved Issues: [#715](https://github.com/bounswe/bounswe2023group7/issues/715), [#761](https://github.com/bounswe/bounswe2023group7/issues/761), [#871](https://github.com/bounswe/bounswe2023group7/issues/871), [#872](https://github.com/bounswe/bounswe2023group7/issues/872)

* **Pull requests:** 
1.  **Milestone 1:**
    - My PRs: [#325](https://github.com/bounswe/bounswe2023group7/pull/325), [#342](https://github.com/bounswe/bounswe2023group7/pull/342), [#357](https://github.com/bounswe/bounswe2023group7/pull/357), [#368](https://github.com/bounswe/bounswe2023group7/pull/368)
    - Reviewed PRs:[#358](https://github.com/bounswe/bounswe2023group7/pull/358), [#346](https://github.com/bounswe/bounswe2023group7/pull/346), [#345](https://github.com/bounswe/bounswe2023group7/pull/345), [#327](https://github.com/bounswe/bounswe2023group7/pull/327), [#324](https://github.com/bounswe/bounswe2023group7/pull/324), [#295](https://github.com/bounswe/bounswe2023group7/pull/295)
2.  **Milestone 2:**
    - My PRs: [#440](https://github.com/bounswe/bounswe2023group7/pull/440), [#444](https://github.com/bounswe/bounswe2023group7/pull/444), [#470](https://github.com/bounswe/bounswe2023group7/pull/470), [#484](https://github.com/bounswe/bounswe2023group7/pull/484), [#539](https://github.com/bounswe/bounswe2023group7/pull/539), [#580](https://github.com/bounswe/bounswe2023group7/pull/580), [#581](https://github.com/bounswe/bounswe2023group7/pull/581), [#598](https://github.com/bounswe/bounswe2023group7/pull/598), [#604](https://github.com/bounswe/bounswe2023group7/pull/604), [#606](https://github.com/bounswe/bounswe2023group7/pull/606)
    - Reviewed PRs: [#419](https://github.com/bounswe/bounswe2023group7/pull/419), [#437](https://github.com/bounswe/bounswe2023group7/pull/437), [#451](https://github.com/bounswe/bounswe2023group7/pull/451), [#465](https://github.com/bounswe/bounswe2023group7/pull/465), [#496](https://github.com/bounswe/bounswe2023group7/pull/496), [#500](https://github.com/bounswe/bounswe2023group7/pull/500), [#561](https://github.com/bounswe/bounswe2023group7/pull/561), [#567](https://github.com/bounswe/bounswe2023group7/pull/567), [#569](https://github.com/bounswe/bounswe2023group7/pull/569), [#577](https://github.com/bounswe/bounswe2023group7/pull/577), [#582](https://github.com/bounswe/bounswe2023group7/pull/582), [#602](https://github.com/bounswe/bounswe2023group7/pull/602)
3.  **Milestone 3:**

| Created PR | Conflict | How It Resolved |
| ---            | ---            | --- |
| [#669](https://github.com/bounswe/bounswe2023group7/pull/669) | No Conflict | No Conflict |
| [#671](https://github.com/bounswe/bounswe2023group7/pull/671) | No Conflict | No Conflict |
| [#679](https://github.com/bounswe/bounswe2023group7/pull/679) | No Conflict | No Conflict |
| [#735](https://github.com/bounswe/bounswe2023group7/pull/735) | No Conflict | No Conflict |
| [#784](https://github.com/bounswe/bounswe2023group7/pull/784) | No Conflict | No Conflict |
| [#787](https://github.com/bounswe/bounswe2023group7/pull/787) | Merge conflicts in 5 files | [Related commit](https://github.com/bounswe/bounswe2023group7/pull/787/commits/006db55d6c83d80018ccb11d34983ee73d6327bf) |
| [#849](https://github.com/bounswe/bounswe2023group7/pull/849) | No Conflict | No Conflict |
| [#852](https://github.com/bounswe/bounswe2023group7/pull/852) | No Conflict | No Conflict |




| Merged/Reviewed PR | Conflict | How It Resolved |
| ---            | ---            | --- |
| [#672](https://github.com/bounswe/bounswe2023group7/pull/672) | No Conflict | No Conflict |
| [#677](https://github.com/bounswe/bounswe2023group7/pull/677) | No Conflict | No Conflict |
| [#682](https://github.com/bounswe/bounswe2023group7/pull/682) |No Conflict | No Conflict |
| [#684](https://github.com/bounswe/bounswe2023group7/pull/684) | No Conflict | No Conflict |
| [#723](https://github.com/bounswe/bounswe2023group7/pull/723) | No Conflict | No Conflict |
| [#725](https://github.com/bounswe/bounswe2023group7/pull/725) | No Conflict | No Conflict |
| [#736](https://github.com/bounswe/bounswe2023group7/pull/736) |  No Conflict | No Conflict |
| [#745](https://github.com/bounswe/bounswe2023group7/pull/745) | No Conflict | No Conflict |
| [#750](https://github.com/bounswe/bounswe2023group7/pull/759) | There were duplicate parts in user profile page. | [Related Commit](https://github.com/bounswe/bounswe2023group7/pull/750/commits/a65ff7ca2fa9579befe90b6b64dca513523647a6) |
| [#781](https://github.com/bounswe/bounswe2023group7/pull/781) | There were duplicate parts in user profile page. | [Related Commit](https://github.com/bounswe/bounswe2023group7/pull/781/commits/81da596181666a52585566ec653ace018b732466) |
| [#799](https://github.com/bounswe/bounswe2023group7/pull/799) | No Conflict | No Conflict |
| [#814](https://github.com/bounswe/bounswe2023group7/pull/814) | No Conflict | No Conflict |
| [#817](https://github.com/bounswe/bounswe2023group7/pull/817) | Conflicts related to threads and User Provider functions, bugs in forum page. | [Related commit #1](https://github.com/bounswe/bounswe2023group7/pull/817/commits/7ac1f0a2baa12e917e270aacf51c9b32ac6b334f), [Related commit #2](https://github.com/bounswe/bounswe2023group7/pull/817/commits/e7f79af591e8e16c480511363f1231b93e4fc735) |
| [#827](https://github.com/bounswe/bounswe2023group7/pull/827) | No Conflict | No Conflict |
| [#846](https://github.com/bounswe/bounswe2023group7/pull/846) | Missing parameter in a function. | [Related commit](https://github.com/bounswe/bounswe2023group7/pull/846/commits/abb6412ed190ac89001f831db04372c74a72bb27) |
| [#853](https://github.com/bounswe/bounswe2023group7/pull/853) | Missing function. | [Related commit](https://github.com/bounswe/bounswe2023group7/pull/853/commits/6486c620af804c6f55f4b3a3fee00025d3677235) |

- **Unit Tests:** There is no Unit Test in our mobile application.
- **Additional information**: I presented the mobile part in milestone presentation and answered questions from the audience. I reviewed and tested the tasks done by the mobile team. I attended all lectures, labs, mobile and general team meetings. On 25.12.2023, we checked everything and created the final release tag with Elif Kızılkaya, Hatice Erk and Fatma Sena Alçı. I wrote the annotation part in the Final Report. As frontend and mobile teams, we were always in touch to be aligned and synced.

### [Furkan Ülke](https://github.com/bounswe/bounswe2023group7/wiki/Furkan-Ülke)
-  **Member**: Furkan Ülke - 2018400054 - Group 7 - Mobile Team
* **Responsibilities:** 
    * **Milestone 1:**   I reviewed the UML Diagrams completed last semester. I worked on implementing the home page from scratch and creating our folders with my team. After the design is reviewed with the frontend team, I was responsible for implementing forgot password pages according to our design related decisions and connect forgot password pages to the backend API. I was assigned to implement a custom widget to be used while viewing game objects. We also created a .apk file for deliverables. I actively took notes during customer milestone and shared my observations with my teammates.
    *  **Milestone 2:** As part of my role, I am tasked with a diverse set of responsibilities spanning mobile app development and backend connectivity. Key among these is the implementation of mobile follow/unfollow functionality and the establishment of a robust backend connection. Security is a paramount concern, and I actively contribute by adding tokenization to API requests from the mobile app. In the realm of user engagement, I play a central role in crafting a seamless experience, creating a user profile page and enhancing game visibility for unregistered users. Addressing UI/UX concerns, I ensure a visually polished interface, tackling issues like pixel overflow in the pages. As a reviewer, I provide insights for refining game stories, average ratings, and contribute to milestone achievements like creating .apk files. Navigational features, such as drawers for game pages and forum searches, fall within my purview. I also contribute to the meticulous revision of game pages in the mobile environment, ensuring accuracy and visual appeal. My responsibilities reflect a holistic approach to mobile app development, prioritizing functionality, security, and user satisfaction.
    *  **Milestone 3:** I have been mainly assigned to work on all search functionalities in mobile, that is game search, thread search, and user search in detail. I resolved image size problem in mobile. And also I built last activites section for mobile app. I also reviewed PRs of my team and resolved conflicts in some of them.
* **Main contributions:** 
    *  **Milestone 1:** 
          - I share my ideas about technologies that could be used in the implementation for mobile app
          - I added recommendation operation to Sequence Diagram
          - I worked on implementing the home page with my team. We also discussed about color theme and design of the mobile application.
          - We created the folder "mobile" and initialized the application inside it.
          - I created empty placeholder pages for mobile app
          - I implemented forgot password pages for mobile app
          - I changed forgot password page style after the design is finalized by both mobile and frontend teams.
          - We created .apk file for Milestone 1 deliverables
          - During Milestone 1 Presentation, I actively took notes considering audience and customer reactions.
    *  **Milestone 2:**
          * Spearheading the development of mobile follow/unfollow functionality for games, a crucial feature for enhancing user engagement.
          * Establishing a robust backend connection to ensure the responsiveness and efficiency of the mobile application.
          * Actively contributing to fortifying the security posture of the mobile application by implementing tokenization into API requests, elevating data security.
          * Crafting a comprehensive user profile page within the mobile app to provide users with a seamless display of information and an intuitive interface for enhanced interaction and personalization.
          * Implementing updates to expand game visibility to unregistered users, enticing potential users to explore further and register.
          * Enhancing the search functionality within the app to ensure users can effortlessly discover and engage with their preferred games.
          * Addressing nuanced UI/UX concerns, specifically resolving pixel overflow in the pages of mobile app.
          * Contributing insights and enhancements to refine game stories and average ratings on game pages.
          * Reviewer role in the generation of .apk files for project milestones, streamlining the deployment process.

    *  **Milestone 3:**
        - I created a custom bottomNavigationBar widget for flexibility.
        - I designed and implemented search landing page.
        - I designed and implemented detailed game search. Games can be searched by many fields like, title tag, platform etc.
        - I added filtering and sorting criterias for game search.
        - I designed and implemented detailed post search. Posts can be searched by many fields owner, titlei tags etc.
        - I added filtering and sorting criterias for post search.
        - I designed and implemented user search. Users can be searched by their usernames.
        - I designed and implemented a search result summary for users that consist of avatar of the user, full username, full name, and user role to help searching user to find people he desires.
        - I resolved image scale problem in mobile. By setting game images as background in a transparent manner our games page UI looks perfect.
        - I added last activity section for users. Now, a user's last activities can be seen from in him/her profile page.
        - I prepared UI/UX for mobile in final milestone report. I listed all mobile app functionalities with images, and also I provide source code links for each functionality.
        - I prepared user manual for mobile app in final milestone report. I clearly described all possible actions and how to do it.

* **Code-related significant issues:**
    *  **Milestone 1:**  
        Resolved Issues: [#271](https://github.com/bounswe/bounswe2023group7/issues/271), [#274](https://github.com/bounswe/bounswe2023group7/issues/274), [#287](https://github.com/bounswe/bounswe2023group7/issues/287), [#292](https://github.com/bounswe/bounswe2023group7/issues/292), [#312](https://github.com/bounswe/bounswe2023group7/issues/312), [#313](https://github.com/bounswe/bounswe2023group7/issues/313) 
    *  **Milestone 2:**
  
        | Resolved Issue | Reviewed Issue |
        | ---            | ---            |
        | [#424](https://github.com/bounswe/bounswe2023group7/issues/424) | [#427](https://github.com/bounswe/bounswe2023group7/issues/427) |
        | [#466](https://github.com/bounswe/bounswe2023group7/issues/466) | [#461](https://github.com/bounswe/bounswe2023group7/issues/461) |
        | [#469](https://github.com/bounswe/bounswe2023group7/issues/469) | [#467](https://github.com/bounswe/bounswe2023group7/issues/467) |
        | [#529](https://github.com/bounswe/bounswe2023group7/issues/529) | [#479](https://github.com/bounswe/bounswe2023group7/issues/479) |
        | [#530](https://github.com/bounswe/bounswe2023group7/issues/530) | [#521](https://github.com/bounswe/bounswe2023group7/issues/521) |
        | ---            | [#531](https://github.com/bounswe/bounswe2023group7/issues/531) |
        | ---            | [#537](https://github.com/bounswe/bounswe2023group7/issues/537) |
        | ---            | [#538](https://github.com/bounswe/bounswe2023group7/issues/538) |
        | ---            | [#596](https://github.com/bounswe/bounswe2023group7/issues/596) |
        | ---            | [#603](https://github.com/bounswe/bounswe2023group7/issues/603) | 

    *  **Milestone 3:**
        | Resolved Issue | Reviewed Issue |
        | ---            | ---            |
        | [#643](https://github.com/bounswe/bounswe2023group7/issues/643) | [#766](https://github.com/bounswe/bounswe2023group7/issues/766) |
        | [#664](https://github.com/bounswe/bounswe2023group7/issues/664) | [#754](https://github.com/bounswe/bounswe2023group7/issues/754) |
        | [#667](https://github.com/bounswe/bounswe2023group7/issues/667) | [#722](https://github.com/bounswe/bounswe2023group7/issues/722) |
        | [#678](https://github.com/bounswe/bounswe2023group7/issues/678) | [#705](https://github.com/bounswe/bounswe2023group7/issues/705) |
        | [#689](https://github.com/bounswe/bounswe2023group7/issues/689) | [#696](https://github.com/bounswe/bounswe2023group7/issues/696) |
        | [#690](https://github.com/bounswe/bounswe2023group7/issues/690) | [#687](https://github.com/bounswe/bounswe2023group7/issues/687) |
        | [#691](https://github.com/bounswe/bounswe2023group7/issues/691) | [#659](https://github.com/bounswe/bounswe2023group7/issues/659) |
        | [#744](https://github.com/bounswe/bounswe2023group7/issues/744) | [#648](https://github.com/bounswe/bounswe2023group7/issues/648) |
        | [#751](https://github.com/bounswe/bounswe2023group7/issues/751) | [#646](https://github.com/bounswe/bounswe2023group7/issues/646) |
        | [#841](https://github.com/bounswe/bounswe2023group7/issues/841) | ---            |
        

* **Management-related significant issues:** 
    *  **Milestone 1:** 
        Resolved Issues: [#261](https://github.com/bounswe/bounswe2023group7/issues/261), [#240](https://github.com/bounswe/bounswe2023group7/issues/240), [#287](https://github.com/bounswe/bounswe2023group7/issues/287), [#376](https://github.com/bounswe/bounswe2023group7/issues/376), [#380](https://github.com/bounswe/bounswe2023group7/issues/380), [#397](https://github.com/bounswe/bounswe2023group7/issues/397)
    *  **Milestone 2:**

        | Resolved Issue | Reviewed Issue |
        | ---            | ---            |
        | ---            | ---            |

    *  **Milestone 3:**
        | Resolved Issue | Reviewed Issue |
        | ---            | ---            |
        | --- | ---            |

* **Pull requests:** 
    -  **Milestone 1:**
        - My PRs: [#295](https://github.com/bounswe/bounswe2023group7/pull/295), [#326](https://github.com/bounswe/bounswe2023group7/pull/326), [#328](https://github.com/bounswe/bounswe2023group7/pull/328), [#346](https://github.com/bounswe/bounswe2023group7/pull/346)
        - Reviewed PRs:
    -  **Milestone 2:**
 
        | Created PR | Conflict | How It Resolved |
        | ---        | ---      | ----            |
        | [#515](https://github.com/bounswe/bounswe2023group7/pull/515) | No Conflict Occurred | ----            |
        | [#493](https://github.com/bounswe/bounswe2023group7/pull/493) | No Conflict Occurred | ----            |
        | [#553](https://github.com/bounswe/bounswe2023group7/pull/553) | No Conflict Occurred | ----            |
        | [#578](https://github.com/bounswe/bounswe2023group7/pull/578) | No Conflict Occurred | ----            |
        | [#602](https://github.com/bounswe/bounswe2023group7/pull/602) | No Conflict Occurred | ----            |

        | Merged/Reviewed PR | Conflict | How It Resolved |
        | ---                | ---      |  ----           |
        | [#444](https://github.com/bounswe/bounswe2023group7/pull/444) | No Conflict Occurred |   ----          |
        | [#470](https://github.com/bounswe/bounswe2023group7/pull/470) | No Conflict Occurred |  ----           |
        | [#567](https://github.com/bounswe/bounswe2023group7/pull/567) | No Conflict Occurred |  ----           |
        | [#598](https://github.com/bounswe/bounswe2023group7/pull/598) | No Conflict Occurred |  ----           |


    - **Milestone 3:**
        | Created PR | Conflict | How It Resolved |
        | ---        | ---      | ----            |
        | [#847](https://github.com/bounswe/bounswe2023group7/pull/847) | No Conflict Occurred | ----            |
        | [#777](https://github.com/bounswe/bounswe2023group7/pull/777) | No Conflict Occurred | ----            |
        | [#745](https://github.com/bounswe/bounswe2023group7/pull/745) | No Conflict Occurred | ----            |
        | [#736](https://github.com/bounswe/bounswe2023group7/pull/736) | No Conflict Occurred | ----            |
        | [#734](https://github.com/bounswe/bounswe2023group7/pull/734) | No Conflict Occurred | ----            |
        | [#725](https://github.com/bounswe/bounswe2023group7/pull/725) | No Conflict Occurred | ----            |
        | [#682](https://github.com/bounswe/bounswe2023group7/pull/682) | No Conflict Occurred | ----            |
        | [#677](https://github.com/bounswe/bounswe2023group7/pull/677) | No Conflict Occurred | ----            |
        | [#665](https://github.com/bounswe/bounswe2023group7/pull/665) | No Conflict Occurred | ----            |
        
        | Merged/Reviewed PR | Conflict | How It Resolved |
        | ---                | ---      |  ----           |
        | [#666](https://github.com/bounswe/bounswe2023group7/pull/666) | No Conflict Occurred |  ----           |
        | [#679](https://github.com/bounswe/bounswe2023group7/pull/679) | No Conflict Occurred|  ----           |
        | [#743](https://github.com/bounswe/bounswe2023group7/pull/743) | Conflict Occured | It rooted from a print statement. |


- **Unit Tests:** There is no Unit Test in our mobile application.

### Tacettin Burak Eren

-  **Member**:  Tacettin Burak Eren Group 7, Backend
- **Responsibilities**: 
    - ***Milestone 1:***
    In the Group7 first of all, I have tried to learn all the informations that I need because I was way behind from my teammates. At a team member of backend, I created some endpoints for mobile team and the frontend team , managed some pull requests . I created them and updated them due to frontend and mobile teams need. Changing forgot Password endpoint feature was one of endpoint created by me. I have also tried to re-write Evaluate the process for the milestone 1 report. 
    * ***Milestone 2:***
    For the milestone 2 as a backend team member I created some more endpoints for our game platform. Getting user information endpoint for the profile page, creating ratings endpoint for the games that the users will rate were these endpoints. Alongside these endpoint creation I also tried to help my teammates for the management processes as revising the team work processes and revising the ps&customer meetings.  
    * ***Milestone 3:***
    I research annotation by reading and seeking for the web3 data annotation model. I have continued to create some endpoint as a backend team member such as getting necessarry informations about the user by ID, and after I have tried to help my teammate Ömer Şafak Bebek as much as I can for the annotations application to implement correctly. I have done my best to help to my teammates.
    - **Code related significant issues**:
- ***Milestone 1:*** [#262](https://github.com/bounswe/bounswe2023group7/issues/262),[#266](https://github.com/bounswe/bounswe2023group7/issues/266), [#270](https://github.com/bounswe/bounswe2023group7/issues/270),[#280](https://github.com/bounswe/bounswe2023group7/issues/280),[#283](https://github.com/bounswe/bounswe2023group7/issues/283),[#284](https://github.com/bounswe/bounswe2023group7/issues/284),[#285](https://github.com/bounswe/bounswe2023group7/issues/285),[#340](https://github.com/bounswe/bounswe2023group7/issues/340),
- ***Milestone 2:*** [#415](https://github.com/bounswe/bounswe2023group7/issues/415),[#458](https://github.com/bounswe/bounswe2023group7/issues/458),[#501](https://github.com/bounswe/bounswe2023group7/issues/501)
    - ***Milestone 3:*** [#822](https://github.com/bounswe/bounswe2023group7/issues/822), [#783](https://github.com/bounswe/bounswe2023group7/issues/783), [#809](https://github.com/bounswe/bounswe2023group7/issues/809)
- **Management related significant issues**:
- Milestone 1: [#245](https://github.com/bounswe/bounswe2023group7/issues/245), [#402](https://github.com/bounswe/bounswe2023group7/issues/402),[#406](https://github.com/bounswe/bounswe2023group7/issues/406), [#407](https://github.com/bounswe/bounswe2023group7/issues/407) 
    - Milestone 3: [#642](https://github.com/bounswe/bounswe2023group7/issues/642)
- **Pull requests**: 
    - ***Milestone 1:*** [#349](https://github.com/bounswe/bounswe2023group7/pull/349)
    - ***Milestone 2:*** [#441](https://github.com/bounswe/bounswe2023group7/pull/441), [#499](https://github.com/bounswe/bounswe2023group7/pull/499), [#547](https://github.com/bounswe/bounswe2023group7/pull/547), 
    - ***Milestone 3:***[#786](https://github.com/bounswe/bounswe2023group7/pull/786), [#810](https://github.com/bounswe/bounswe2023group7/pull/810)

### Muhammet Tayyip Kamiloğlu
* **Member**: Muhammet Tayyip Kamiloğlu, Group 7, Frontend
* **Responsibilities:** 
    * **Milestone 1:** I have had important roles to update our documentation to compatible with new semester and new team members. I also took part on reviewing and updating last semester's requirements. I added mockups with respect to our new requirements such as entity page and richer Game page. I als took place on design related meetings such as determining color palette, logo, and general page design. As frontend developer I implemented login, signup and logout functionality for web application. Fixed some bugs and reviewed the codes that written by my teammates.
    * **Milestone 2:**  I took on several important tasks to enhance our system's functionality and user experience. Notably, I designed and implemented a change password page, reinforcing our platform's security measures. To arrane collaboration and documentation, I  updated and finalized our lab 5 report, ensuring its integrity, and submitted it to our GitHub repository through a well-crafted pull request. Addressing user interaction, I successfully incorporated a show password feature across login, signup, forgot password, and change password pages, enhancing accessibility. Furthermore, I played a key role in expanding our forum capabilities by designing and implementing the create thread page, to promoote engaging discussions within our community. Additionally, I initiated the development of a create entity page.
    * **Final Milestone:** In recent developments, I successfully implemented a 'create entity' page to facilitate user-generated discussions through threads. Additionally, I introduced a detailed search feature on both the games and forums pages. To enhance user engagement, I integrated a suggested games section in both the general games page and the related games section on specific game pages. A significant enhancement was the implementation of an annotation feature in the description section of the entity page and the trivia section of game pages, following thorough research about it. Further, I implemented general search functionalities in the header component, games page, and forums page, with an attempt to incorporate semantic search in the header—although it currently operates slow and needs refinement. The creation of a group page was another notable addition. Moreover, I introduced an 'upcoming titles' component on the games page to keep users informed about upcoming games and DLCs. Finally, the development of a versatile 'GameCard' component was implemented for utilization in both the games page and the related games tab of the game page, enhancing the presentation of essential game information.
* **Main Contributions:** 
    * **Milestone 1:**
        * I have reviewed a part of the requirements and updated them with Yunus Emre Altuğ.
        * I updated our general README.md file according to our new team members and new semester and course.
        * Helped to decide on the game palette and project logo with Yunus Emre Altuğ, Elif Kızılkaya, and Hatice Erk.
        * With Hatice Erk, I created a logo and found a font to our brand name.
        * I worked with Elif Kızılkaya and Yunus Emre Altuğ to design the homepage and general page structure.
        * I created a GitHub actions pipeline to auto mate frontend deployment to AWS instance with Yunus Emre Altuğ and Elif Kızılkaya.
        * I have revised mockups and added new mockups for our new pages with Hatice Erk.
        * I have designed and implemented Login page for frontend.
        * I have designed and implemented Signup page for frontend.
        * I have implemented Logout feature for frontend.
        * With my teammates Hatice Erk, Kardelen Erdal, and Elif Kızılkaya, I prepared user scenarios and presentation slides for our software demo.
        * I took active role on firs customer meeting presentation alongside with Elif Kızılkaya, Yunus Emre Altuğ, and Kardelen Erdal.
    * **Milestone 2:** 
        * I designed and implemented change password page.
        * I updated and finalized our lab 5 report and submitted it to Github by opening a pull request.
        * I designed and implemented the create thread page for to create forum threads.
        * Added show password feature to the login, signup, forgot password and change password pages.
        * I designed and implemented create entity page, but didn't connect it with backend.
    * **Final Milestone:** 
        * I implemented create entity page to give users chance to create thread and discuss about it.
        * I implemented detailed search in both games page and forums page. Users can filter and sort what they wonder.
        * I added suggested games section to the games page and game page's related games section. Users now can get suggestions based on their followed games.
        * I made research about how we can implement annotation on our project. After researches I also implemented annotation feature in entity page's description section and game page's trivia seciton.
        * I tested mobile application for peer testing and gave feedbackst to improve our mobile application.
        * I implemented general searches in header component, games page and forums page. I also implemented the semantic search feature in header search. However it works very slow and it is not easy to use.
        * I implemented the group page where users can see group members, group threads, group game, and group image. I also add edit group page from this page.
        * I added upcoming titles component to games page. By doing this now users can get news about upcoming games and DLCs easily.
        * I created a component to represent a game. Its name is GameCard and we use this in games page and related games tab of the game page. In this component we show to users game cover, name, developer, bio, average rating and tags.  
* **Code Related Significant Issues:** 
    * **Milestone 1:** [#273](https://github.com/bounswe/bounswe2023group7/issues/273), [#277](https://github.com/bounswe/bounswe2023group7/issues/277), [#296](https://github.com/bounswe/bounswe2023group7/issues/296), [#297](https://github.com/bounswe/bounswe2023group7/issues/297), [#350](https://github.com/bounswe/bounswe2023group7/issues/350)
    * **Milestone 2:** [#434](https://github.com/bounswe/bounswe2023group7/issues/434), [#471](https://github.com/bounswe/bounswe2023group7/issues/471), [#476](https://github.com/bounswe/bounswe2023group7/issues/476), [#506](https://github.com/bounswe/bounswe2023group7/issues/506), [#507](https://github.com/bounswe/bounswe2023group7/issues/507), [#505](https://github.com/bounswe/bounswe2023group7/issues/505), [#473](https://github.com/bounswe/bounswe2023group7/issues/473), [#510](https://github.com/bounswe/bounswe2023group7/issues/510), [#511](https://github.com/bounswe/bounswe2023group7/issues/511), [#546](https://github.com/bounswe/bounswe2023group7/issues/546), [#555](https://github.com/bounswe/bounswe2023group7/issues/555), [#571](https://github.com/bounswe/bounswe2023group7/issues/571), [#593](https://github.com/bounswe/bounswe2023group7/issues/593)
    * **Final Milestone:** [#649](https://github.com/bounswe/bounswe2023group7/issues/649), [#650](https://github.com/bounswe/bounswe2023group7/issues/650), [#697](https://github.com/bounswe/bounswe2023group7/issues/697), [#699](https://github.com/bounswe/bounswe2023group7/issues/699), [#702](https://github.com/bounswe/bounswe2023group7/issues/702), [#717](https://github.com/bounswe/bounswe2023group7/issues/717), [#748](https://github.com/bounswe/bounswe2023group7/issues/748), [#755](https://github.com/bounswe/bounswe2023group7/issues/755), [#774](https://github.com/bounswe/bounswe2023group7/issues/774), [#775](https://github.com/bounswe/bounswe2023group7/issues/775), [#794](https://github.com/bounswe/bounswe2023group7/issues/794), [#798](https://github.com/bounswe/bounswe2023group7/issues/798), [#839](https://github.com/bounswe/bounswe2023group7/issues/839)
* **Management Related Significant Issues:** 
    * **Milestone 1:** [#236](https://github.com/bounswe/bounswe2023group7/issues/236), [#239](https://github.com/bounswe/bounswe2023group7/issues/239), [#242](https://github.com/bounswe/bounswe2023group7/issues/242), [#247](https://github.com/bounswe/bounswe2023group7/issues/247), [#254](https://github.com/bounswe/bounswe2023group7/issues/254), [#265](https://github.com/bounswe/bounswe2023group7/issues/265), [#273](https://github.com/bounswe/bounswe2023group7/issues/273), [#305](https://github.com/bounswe/bounswe2023group7/issues/305), [#371](https://github.com/bounswe/bounswe2023group7/issues/371), [#404](https://github.com/bounswe/bounswe2023group7/issues/404)
    * **Milestone 2:** [#434](https://github.com/bounswe/bounswe2023group7/issues/434), [#436](https://github.com/bounswe/bounswe2023group7/issues/436), [#622](https://github.com/bounswe/bounswe2023group7/issues/622), [#623](https://github.com/bounswe/bounswe2023group7/issues/623), [#626](https://github.com/bounswe/bounswe2023group7/issues/626)
    * **Final Milestone:** [#704](https://github.com/bounswe/bounswe2023group7/issues/704), [#715](https://github.com/bounswe/bounswe2023group7/issues/715)
* **Pull Requests:**
    * **Milestone 1:** [#293](https://github.com/bounswe/bounswe2023group7/pull/293), [#335](https://github.com/bounswe/bounswe2023group7/pull/335), [#337](https://github.com/bounswe/bounswe2023group7/pull/337), [#339](https://github.com/bounswe/bounswe2023group7/pull/339), [#343](https://github.com/bounswe/bounswe2023group7/pull/343), [#348](https://github.com/bounswe/bounswe2023group7/pull/348), [#353](https://github.com/bounswe/bounswe2023group7/pull/353), [#363](https://github.com/bounswe/bounswe2023group7/pull/363), [#360](https://github.com/bounswe/bounswe2023group7/pull/360), [#370](https://github.com/bounswe/bounswe2023group7/pull/370)
    * **Milestone 2:** [#437](https://github.com/bounswe/bounswe2023group7/pull/437), [#438](https://github.com/bounswe/bounswe2023group7/pull/438), [#453](https://github.com/bounswe/bounswe2023group7/pull/453), [#497](https://github.com/bounswe/bounswe2023group7/pull/497), [#554](https://github.com/bounswe/bounswe2023group7/pull/554), [#601](https://github.com/bounswe/bounswe2023group7/pull/601)
    * **Final Milestone:** [#634](https://github.com/bounswe/bounswe2023group7/pull/634), [#680](https://github.com/bounswe/bounswe2023group7/pull/680), [#724](https://github.com/bounswe/bounswe2023group7/pull/724), [#729](https://github.com/bounswe/bounswe2023group7/pull/729), [#731](https://github.com/bounswe/bounswe2023group7/pull/731), [#742](https://github.com/bounswe/bounswe2023group7/pull/742), [#749](https://github.com/bounswe/bounswe2023group7/pull/749), [#796](https://github.com/bounswe/bounswe2023group7/pull/796), [#800](https://github.com/bounswe/bounswe2023group7/pull/800), [#819](https://github.com/bounswe/bounswe2023group7/pull/819), [#820](https://github.com/bounswe/bounswe2023group7/pull/820), [#823](https://github.com/bounswe/bounswe2023group7/pull/823), [#840](https://github.com/bounswe/bounswe2023group7/pull/840), [#844](https://github.com/bounswe/bounswe2023group7/pull/844), [#857](https://github.com/bounswe/bounswe2023group7/pull/857), [#860](https://github.com/bounswe/bounswe2023group7/pull/860), [#861](https://github.com/bounswe/bounswe2023group7/pull/861)

* **Unit Tests:** I did not write unit test since I'm in the frontend team, we conducted manual testing.



### Melih Gezer

- **Member**: Melih Gezer - 2020400156 - Group 7 - Backend Team
- **Responsibilities**: 
    - **Milestone 1:**  I was assigned multiple responsibilities within the backend team, which included creating the folder structure, connecting the database, setting up Docker, managing deployment processes, creating the unit tests pipeline, and overseeing structural planning. Additionally, I was responsible for developing crucial backend features. Collaboratively with my teammates, I was tasked with crucial endpoints for our first milestone. Moreover, I contributed to the pre-release phase.
    - **Milestone 2:** I was assigned to mainly creating Review endpoints. I create the all necessary flows of the review feature. Collaboratively with my teammates, I was tasked with crucial endpoints for our second milestone. Moreover, I contributed to the pre-release phase.
    - **Milestone 3:** I have been assigned to work on recommendation endpoints such as game specific and user specific recommendations of the games. Then I worked on adding Upcoming Titles feature to our project. After that I handled multiple endpoint fixes and revisions. I did 
- **Main Contributions**:

    - **Milestone 1:**
      - I have contributed a part of the `/user` endpoints and CI/CD parts of the project. 
      - I have implemented a the `/game`  endpoints create and get flows. Such as create, get, edit, delete flows.
    - **Milestone 2:**
         - I created the Review entity in our database.
         - I created 'Create Review' endpoint.
         - I created 'Like Review' endpoint.
         - I created 'Dislike Review' endpoint.
         - I created 'Delete Review' endpoint.
         - I created 'Edit Review' endpoint.
         - I created 'Get Review By Id' endpoint.
         - I created 'Get Reviews By Game Id' endpoint.
         - In addition to these endpoints, I was also responsible for revising and making additions and deletions according to the wishes of our teammates.
    - **Milestone 3:** 
        - I created Get Related Games endpoint and flows.
        - I created Get Suggested Games for a user endpoint and flows.
        - I revised Post entity and made it suitable for Upcoming Titles.
        - I created Upcoming Titles feature in our backend service and updated the database.
        - I created user id-username mapping endpoint.
        - I revised review and comment entites. Changed their visibility.
        - I revised responses of Game and Review flows. Changed their return types etc.

- **Code Related Significant Issues Assigned**:
    - **Milestone 1:** [311](https://github.com/bounswe/bounswe2023group7/issues/311), [310](https://github.com/bounswe/bounswe2023group7/issues/310), [309](https://github.com/bounswe/bounswe2023group7/issues/309), [286](https://github.com/bounswe/bounswe2023group7/issues/286), [285](https://github.com/bounswe/bounswe2023group7/issues/285), [284](https://github.com/bounswe/bounswe2023group7/issues/284), [283](https://github.com/bounswe/bounswe2023group7/issues/283), [280](https://github.com/bounswe/bounswe2023group7/issues/280), [270](https://github.com/bounswe/bounswe2023group7/issues/270), [266](https://github.com/bounswe/bounswe2023group7/issues/266), [262](https://github.com/bounswe/bounswe2023group7/issues/262), [238](https://github.com/bounswe/bounswe2023group7/issues/238), [284](https://github.com/bounswe/bounswe2023group7/issues/284) 
    - **Milestone 2:** [412](https://github.com/bounswe/bounswe2023group7/issues/412), [483](https://github.com/bounswe/bounswe2023group7/issues/483), [490](https://github.com/bounswe/bounswe2023group7/issues/490), [564](https://github.com/bounswe/bounswe2023group7/issues/564), [482](https://github.com/bounswe/bounswe2023group7/issues/482), [486](https://github.com/bounswe/bounswe2023group7/issues/486), [487](https://github.com/bounswe/bounswe2023group7/issues/487), [488](https://github.com/bounswe/bounswe2023group7/issues/488), [489](https://github.com/bounswe/bounswe2023group7/issues/489), [517](https://github.com/bounswe/bounswe2023group7/issues/517), [518](https://github.com/bounswe/bounswe2023group7/issues/518), [519](https://github.com/bounswe/bounswe2023group7/issues/519), [520](https://github.com/bounswe/bounswe2023group7/issues/520), [562](https://github.com/bounswe/bounswe2023group7/issues/562), [573](https://github.com/bounswe/bounswe2023group7/issues/573)
    - **Milestone 3:** [639](https://github.com/bounswe/bounswe2023group7/issues/639), [640](https://github.com/bounswe/bounswe2023group7/issues/640), [641](https://github.com/bounswe/bounswe2023group7/issues/641), [707](https://github.com/bounswe/bounswe2023group7/issues/707), [770](https://github.com/bounswe/bounswe2023group7/issues/770), [771](https://github.com/bounswe/bounswe2023group7/issues/771), [772](https://github.com/bounswe/bounswe2023group7/issues/772), [773](https://github.com/bounswe/bounswe2023group7/issues/773), [807](https://github.com/bounswe/bounswe2023group7/issues/807)
- **Management Related Significant Issues Assigned**:
    - **Milestone 1:** [374](https://github.com/bounswe/bounswe2023group7/issues/374), [305](https://github.com/bounswe/bounswe2023group7/issues/305), [254](https://github.com/bounswe/bounswe2023group7/issues/254), [248](https://github.com/bounswe/bounswe2023group7/issues/248), [399](https://github.com/bounswe/bounswe2023group7/issues/399), [398](https://github.com/bounswe/bounswe2023group7/issues/398), [397](https://github.com/bounswe/bounswe2023group7/issues/397), [388](https://github.com/bounswe/bounswe2023group7/issues/388), [383](https://github.com/bounswe/bounswe2023group7/issues/383), [307](https://github.com/bounswe/bounswe2023group7/issues/307), [390](https://github.com/bounswe/bounswe2023group7/issues/390), [389](https://github.com/bounswe/bounswe2023group7/issues/389)
    - **Milestone 2:** [565](https://github.com/bounswe/bounswe2023group7/issues/565), [544](https://github.com/bounswe/bounswe2023group7/issues/544), 
    - **Milestone 3:** [882](https://github.com/bounswe/bounswe2023group7/issues/882), [884](https://github.com/bounswe/bounswe2023group7/issues/884), [886](https://github.com/bounswe/bounswe2023group7/issues/886)
- **Code Related Significant Issues Reviewed**:
    - **Milestone 1:** [268](https://github.com/bounswe/bounswe2023group7/issues/268), [254](https://github.com/bounswe/bounswe2023group7/issues/254), [323](https://github.com/bounswe/bounswe2023group7/issues/323), [319](https://github.com/bounswe/bounswe2023group7/issues/319)
 
    - **Milestone 2:** [525](https://github.com/bounswe/bounswe2023group7/issues/525), [528](https://github.com/bounswe/bounswe2023group7/issues/528), [448](https://github.com/bounswe/bounswe2023group7/issues/448), [458](https://github.com/bounswe/bounswe2023group7/issues/458), [477](https://github.com/bounswe/bounswe2023group7/issues/477), [425](https://github.com/bounswe/bounswe2023group7/issues/425)

    - **Milestone 3:** [636](https://github.com/bounswe/bounswe2023group7/issues/636), [706](https://github.com/bounswe/bounswe2023group7/issues/706), [718](https://github.com/bounswe/bounswe2023group7/issues/718), [783](https://github.com/bounswe/bounswe2023group7/issues/783), [790](https://github.com/bounswe/bounswe2023group7/issues/790), [809](https://github.com/bounswe/bounswe2023group7/issues/809), [815](https://github.com/bounswe/bounswe2023group7/issues/815)
- **Management Related Significant Issues Reviewed**:
    - **Milestone 1:** [374](https://github.com/bounswe/bounswe2023group7/issues/374), [383](https://github.com/bounswe/bounswe2023group7/issues/383), [388](https://github.com/bounswe/bounswe2023group7/issues/388), [397](https://github.com/bounswe/bounswe2023group7/issues/397), [305](https://github.com/bounswe/bounswe2023group7/issues/305), [307](https://github.com/bounswe/bounswe2023group7/issues/307)
 
    - **Milestone 2:** [544](https://github.com/bounswe/bounswe2023group7/issues/544), [620](https://github.com/bounswe/bounswe2023group7/issues/620), [625](https://github.com/bounswe/bounswe2023group7/issues/625)
    
    - **Milestone 3:** [874](https://github.com/bounswe/bounswe2023group7/issues/874)
    
- **Pull Requests Assigned**:
    - **Milestone 1:** [352](https://github.com/bounswe/bounswe2023group7/pull/352), [344](https://github.com/bounswe/bounswe2023group7/pull/344), [290](https://github.com/bounswe/bounswe2023group7/pull/290), [331](https://github.com/bounswe/bounswe2023group7/pull/331)
    - **Milestone 2:** [564](https://github.com/bounswe/bounswe2023group7/pull/564), [490](https://github.com/bounswe/bounswe2023group7/pull/490), [441](https://github.com/bounswe/bounswe2023group7/pull/441), [498](https://github.com/bounswe/bounswe2023group7/pull/498), [551](https://github.com/bounswe/bounswe2023group7/pull/551)
    - **Milestone 3:** [683](https://github.com/bounswe/bounswe2023group7/pull/683), [785](https://github.com/bounswe/bounswe2023group7/pull/785), [788](https://github.com/bounswe/bounswe2023group7/pull/788), [795](https://github.com/bounswe/bounswe2023group7/pull/795), [808](https://github.com/bounswe/bounswe2023group7/pull/808)
- **Pull Requests Reviewed**:
    - **Milestone 1:** [331](https://github.com/bounswe/bounswe2023group7/issues/331)
    - **Milestone 2:** [441](https://github.com/bounswe/bounswe2023group7/issues/441), [498](https://github.com/bounswe/bounswe2023group7/issues/498)
    - **Milestone 3:** [676](https://github.com/bounswe/bounswe2023group7/issues/676)

### Hakan Karakuş

- **Member:** Hakan Karakuş (2019400126) - Group 7 - Backend
- **Responsibilities:** 
  - ***Milestone 1:*** I was responsible in the backend team. My tasks included creating the folder structure, connecting the database, setting up Docker, managing deployment processes, creating the unit tests pipeline, and overseeing structural planning. I developed an endpoint for a feature in the backend.
  - ***Milestone 2:*** I was responsible for creating new endpoints for our application. I was also mainly responsible for setting up S3 bucket for storing image objects.
- **Main Contributions:** 
  - ***Milestone 1:*** I contributed to the setup process. I implemented the endpoint for forgetting password.
  - ***Milestone 2:*** 
    - setting up an email for our application to send emails
    - setting up an AWS S3 Bucket for storing image objects
    - creating endpoint for forgetting password
    - creating endpoint for editing user information
    - adding comment feature
    - creating endpoint for editing game information
  - ***Milestone 3:*** I fixed the get comment response endpoint to include missing fields.

- **Code related significant issues:** 
    - ***Milestone 1:*** [#262](https://github.com/bounswe/bounswe2023group7/issues/262), [#266](https://github.com/bounswe/bounswe2023group7/issues/266), [#270](https://github.com/bounswe/bounswe2023group7/issues/270), [#280](https://github.com/bounswe/bounswe2023group7/issues/280), [#283](https://github.com/bounswe/bounswe2023group7/issues/283), [#284](https://github.com/bounswe/bounswe2023group7/issues/284), [#285](https://github.com/bounswe/bounswe2023group7/issues/285), [#319](https://github.com/bounswe/bounswe2023group7/issues/319)
    - ***Milestone 2:*** [#319](https://github.com/bounswe/bounswe2023group7/issues/319), [#432](https://github.com/bounswe/bounswe2023group7/issues/432), [#433](https://github.com/bounswe/bounswe2023group7/issues/433), [#448](https://github.com/bounswe/bounswe2023group7/issues/448), [#478](https://github.com/bounswe/bounswe2023group7/issues/478), [#540](https://github.com/bounswe/bounswe2023group7/issues/540)

- **Management related significant issues:**
    - ***Milestone 1:*** [#248](https://github.com/bounswe/bounswe2023group7/issues/248), [#251](https://github.com/bounswe/bounswe2023group7/issues/251)

- **Pull requests:**
    - ***Milestone 1:*** [#364](https://github.com/bounswe/bounswe2023group7/pull/364)
    - ***Milestone 2:*** [#364](https://github.com/bounswe/bounswe2023group7/pull/364), [#443](https://github.com/bounswe/bounswe2023group7/pull/443), [#450](https://github.com/bounswe/bounswe2023group7/pull/450), [#454](https://github.com/bounswe/bounswe2023group7/pull/454), [#491](https://github.com/bounswe/bounswe2023group7/pull/491), [#558](https://github.com/bounswe/bounswe2023group7/pull/558)
    - ***Milestone 3:*** [#675](https://github.com/bounswe/bounswe2023group7/pull/675)


----------------------------------------------------
### Hatice Erk <a name="hatice-erk" />
-  **Member**: Hatice Erk - 2018400090 - Group 7 - Mobile Team
#### Responsibilities:
1.  **Milestone 1:**  I was responsible in the mobile application of the project. I updated the home page of the application. I also took part in revising the last year's software artifacts. I almost work on each of the artifacts. In addition to that I took part in design meeting which we decide on the color palette, the logo and the fonts. Lastly, we had prepared the milestone presentation materials and scenarios with my team.
3.  **Milestone 2:** I had important tasks in my role, the forum for games by connecting the backend for the forum page, thread pages, and reviews. I also improved the Android app icon and name on the screen. I updated the home page for better, added a search option to the forum, and improved the user profile navigation. I fixed issues like the like/dislike bug and updated folders' README's with new .apk links.
4.  **Milestone 3:** I have been mainly assigned to work on all the group functionality in mobile. I also updated some parts in the mobile. I also reviewed lots of PRs of my team and resolved conflicts in them. I, Kardelen Erdal and Elif Kızılkaya were responsible for the scenario, presentation and creating the final release.

#### Main contributions: 
1.  **Milestone 1:** 
    - Since I am a new member of the team, I went over the repository of the project to get familiar with both the team and the project.  
    - I created a wiki page as my profile page and added it to the sidebar. 
    - I did research to decide on the technologies we will use as the mobile team. 
    - We revised the class diagram from the previous semester with Elif Kızılkaya and Kardelen Erdal. 
    - I updated the communication plan for the new semester. 
    - We revised and updated the use case diagram with Elif Kızılkaya. 
    - We updated the mockups by adding the Game and Entity pages with Muhammet Tayyip Kamiloğlu. 
    - As the mobile team, we had a meeting to initialize the project with the home page. Also, we designed the folder structure for the mobile part. 
    - I updated the .gitignore to remove unrelated folders from the repository. 
    - We met with Elif Kızılkaya to remove the Event feature from all the software artifacts. 
    - We had a design meeting with Yunus Emre Akdağ, Elif Kızılkaya, Muhammet Tayyip Kamiloğlu to decide on our logo, fonts, and color palette.
    - I revised and updated the home page on the mobile. 
    - We made preparations for the customer milestone presentation with Kardelen Erdal, Elif Kızılkaya, Muhammet Tayyip Kamiloğlu. 
    - We created the .apk for the mobile application with Kardelen Erdal. 
    - We created a pre-release version for the first customer milestone. 
2.  **Milestone 2:**
     - I contributed the lab reports [#5](https://github.com/bounswe/bounswe2023group7/blob/development/reports/lab_report_5.md) and [#6](https://github.com/bounswe/bounswe2023group7/blob/development/reports/lab_report_6.md).
    - I updated android app icon and the name shown in the screen.
    - I created the forum page for the games with backend connections.
        - I implemented the create thread page.
        - I implemented the forum page.
        - I implemented the individual thread pages.
    - I added the review functionality to the games with backend connections.
        - I implemented the create review section with rating.
        - I implemented the reviews part in a game page.
        - I implemented the all reviews page.
    - I added the comments of the threads with backend connections.
        - I implemented the add comment section.
        - I implemented listing of the comments under the threads.
    - I reorganized the home page, which lists the favorite games and trending topics.
    - I added search funtionality to the forum.
    - I updated navigations with the user profile. 
    - I partly solved the like/dislike bug.
    - I updated the mobile and Ludos folders with new .apk link. 
    - I was the driver of the customer presentation.

3.  **Milestone 3:**
    - I contributed lab reports.
    - I completed all the group functionality
        - I implemented the create group page.
        - I implemented the groups page.
        - I implemented the specific group page.
    - I implemented edit and delete functions for threads and comments.
    - I fixed some important bugs.
    - I revised the forum and reviews.
    - We made fixes for the .apk with Fatma Sena Alçı.
    - We created the .apk for the mobile application with Kardelen Erdal and Fatma Sena Alçı. 
    - We created a release version for the final milestone.
    - I wrote the scenario for the milestone report.
    - We create the video for the milestone report with Elif Kızılkaya and Kardelen Erdal.
    

#### Code-related significant issues:
1.  **Milestone 1:**  
Resolved Issues:  [#259](https://github.com/bounswe/bounswe2023group7/issues/259), [#271](https://github.com/bounswe/bounswe2023group7/issues/271), [#274](https://github.com/bounswe/bounswe2023group7/issues/274), [#287](https://github.com/bounswe/bounswe2023group7/issues/287), [#301](https://github.com/bounswe/bounswe2023group7/issues/301), [#303](https://github.com/bounswe/bounswe2023group7/issues/303), [#365](https://github.com/bounswe/bounswe2023group7/issues/365), [#374](https://github.com/bounswe/bounswe2023group7/issues/374)

3.  **Milestone 2:**
Resolved Issues:  [#306](https://github.com/bounswe/bounswe2023group7/issues/306) [#427](https://github.com/bounswe/bounswe2023group7/issues/427) [#479](https://github.com/bounswe/bounswe2023group7/issues/479) [#531](https://github.com/bounswe/bounswe2023group7/issues/531) [#532](https://github.com/bounswe/bounswe2023group7/issues/532) [#533](https://github.com/bounswe/bounswe2023group7/issues/533) [#570](https://github.com/bounswe/bounswe2023group7/issues/570) [#594](https://github.com/bounswe/bounswe2023group7/issues/594) [#596](https://github.com/bounswe/bounswe2023group7/issues/596) [#605](https://github.com/bounswe/bounswe2023group7/issues/605)
Reviewed Issues: [#416](https://github.com/bounswe/bounswe2023group7/issues/416) [#417](https://github.com/bounswe/bounswe2023group7/issues/417) [#424](https://github.com/bounswe/bounswe2023group7/issues/424) [#460](https://github.com/bounswe/bounswe2023group7/issues/460) [#468](https://github.com/bounswe/bounswe2023group7/issues/468) [#469](https://github.com/bounswe/bounswe2023group7/issues/469) [#513](https://github.com/bounswe/bounswe2023group7/issues/513) [#522](https://github.com/bounswe/bounswe2023group7/issues/522) [#524](https://github.com/bounswe/bounswe2023group7/issues/524) [#529](https://github.com/bounswe/bounswe2023group7/issues/529) [#536](https://github.com/bounswe/bounswe2023group7/issues/536) [#549](https://github.com/bounswe/bounswe2023group7/issues/549) [#595](https://github.com/bounswe/bounswe2023group7/issues/595)
3.  **Milestone 3:**
Resolved Issues: [#638](https://github.com/bounswe/bounswe2023group7/issues/638) [#647](https://github.com/bounswe/bounswe2023group7/issues/647) [#648](https://github.com/bounswe/bounswe2023group7/issues/648) [#687](https://github.com/bounswe/bounswe2023group7/issues/687) [#692](https://github.com/bounswe/bounswe2023group7/issues/692) [#693](https://github.com/bounswe/bounswe2023group7/issues/693) [#694](https://github.com/bounswe/bounswe2023group7/issues/694) [#695](https://github.com/bounswe/bounswe2023group7/issues/695) [#715](https://github.com/bounswe/bounswe2023group7/issues/715) [#766](https://github.com/bounswe/bounswe2023group7/issues/766) [#768](https://github.com/bounswe/bounswe2023group7/issues/768) [#805](https://github.com/bounswe/bounswe2023group7/issues/805) [#826](https://github.com/bounswe/bounswe2023group7/issues/826) [#863](https://github.com/bounswe/bounswe2023group7/issues/863) [#696](https://github.com/bounswe/bounswe2023group7/issues/696)



#### Management-related significant issues:
1.  **Milestone 1:** 
Resolved Issues: [#235](https://github.com/bounswe/bounswe2023group7/issues/235), [#240](https://github.com/bounswe/bounswe2023group7/issues/240), [#241](https://github.com/bounswe/bounswe2023group7/issues/241), [#246](https://github.com/bounswe/bounswe2023group7/issues/246), [#253](https://github.com/bounswe/bounswe2023group7/issues/253), [#260](https://github.com/bounswe/bounswe2023group7/issues/260), [#265](https://github.com/bounswe/bounswe2023group7/issues/265), [#269](https://github.com/bounswe/bounswe2023group7/issues/269), [#304](https://github.com/bounswe/bounswe2023group7/issues/304), [#305](https://github.com/bounswe/bounswe2023group7/issues/305), [#338](https://github.com/bonswe/bounswe2023group7/issues/338)

3.  **Milestone 2:**
Resolved Issues: [#418](https://github.com/bounswe/bounswe2023group7/issues/418) [#456](https://github.com/bounswe/bounswe2023group7/issues/456) [#509](https://github.com/bounswe/bounswe2023group7/issues/509) [#591](https://github.com/bounswe/bounswe2023group7/issues/591) [#590](https://github.com/bounswe/bounswe2023group7/issues/590) [#613](https://github.com/bounswe/bounswe2023group7/issues/613) [#592](https://github.com/bounswe/bounswe2023group7/issues/592)

3.  **Milestone 3:**
Resolved Issues: [#761](https://github.com/bounswe/bounswe2023group7/issues/761) [#880](https://github.com/bounswe/bounswe2023group7/issues/880) [#871](https://github.com/bounswe/bounswe2023group7/issues/871)

#### Pull requests:

1.  **Milestone 1:**
    - My PRs: [#324](https://github.com/bounswe/bounswe2023group7/pull/324), [#327](https://github.com/bounswe/bounswe2023group7/pull/327), [#339](https://github.com/bounswe/bounswe2023group7/pull/339), [#368](https://github.com/bounswe/bounswe2023group7/pull/368)

2.  **Milestone 2:**
    - My PRs: [#419](https://github.com/bounswe/bounswe2023group7/pull/419), [#457](https://github.com/bounswe/bounswe2023group7/pull/457), [#500](https://github.com/bounswe/bounswe2023group7/pull/500), [#561](https://github.com/bounswe/bounswe2023group7/pull/561), [#569](https://github.com/bounswe/bounswe2023group7/pull/569), [#577](https://github.com/bounswe/bounswe2023group7/pull/577), [#582](https://github.com/bounswe/bounswe2023group7/pull/582), [#588](https://github.com/bounswe/bounswe2023group7/pull/588), [#589](https://github.com/bounswe/bounswe2023group7/pull/589), [#598](https://github.com/bounswe/bounswe2023group7/pull/598), [#607](https://github.com/bounswe/bounswe2023group7/pull/607), [#610](https://github.com/bounswe/bounswe2023group7/pull/610), [#614](https://github.com/bounswe/bounswe2023group7/pull/614),
    - Reviewed PRs:  [#515](https://github.com/bounswe/bounswe2023group7/pull/515), [#553](https://github.com/bounswe/bounswe2023group7/pull/553), [#578](https://github.com/bounswe/bounswe2023group7/pull/578), [#446](https://github.com/bounswe/bounswe2023group7/pull/446), [#563](https://github.com/bounswe/bounswe2023group7/pull/563), [#576](https://github.com/bounswe/bounswe2023group7/pull/576), [#599](https://github.com/bounswe/bounswe2023group7/pull/599), [#440](https://github.com/bounswe/bounswe2023group7/pull/440), [#484](https://github.com/bounswe/bounswe2023group7/pull/484), [#539](https://github.com/bounswe/bounswe2023group7/pull/539), [#581](https://github.com/bounswe/bounswe2023group7/pull/581), [#604](https://github.com/bounswe/bounswe2023group7/pull/604)

3.  **Milestone 3:**
     - My PRs: [#666](https://github.com/bounswe/bounswe2023group7/pull/666), [#672](https://github.com/bounswe/bounswe2023group7/pull/672), [#684](https://github.com/bounswe/bounswe2023group7/pull/684), [#750](https://github.com/bounswe/bounswe2023group7/pull/750), [#799](https://github.com/bounswe/bounswe2023group7/pull/799), [#804](https://github.com/bounswe/bounswe2023group7/pull/804), [#806](https://github.com/bounswe/bounswe2023group7/pull/806), [#812](https://github.com/bounswe/bounswe2023group7/pull/812), [#814](https://github.com/bounswe/bounswe2023group7/pull/814), [#827](https://github.com/bounswe/bounswe2023group7/pull/827), [#853](https://github.com/bounswe/bounswe2023group7/pull/853), [#859](https://github.com/bounswe/bounswe2023group7/pull/859), [#862](https://github.com/bounswe/bounswe2023group7/pull/862)
     - Reviewed PRs: [#665](https://github.com/bounswe/bounswe2023group7/pull/665), [#669](https://github.com/bounswe/bounswe2023group7/pull/669), [#671](https://github.com/bounswe/bounswe2023group7/pull/671), [#681](https://github.com/bounswe/bounswe2023group7/pull/681), [#732](https://github.com/bounswe/bounswe2023group7/pull/732), [#733](https://github.com/bounswe/bounswe2023group7/pull/733), [#734](https://github.com/bounswe/bounswe2023group7/pull/734), [#735](https://github.com/bounswe/bounswe2023group7/pull/735), [#743](https://github.com/bounswe/bounswe2023group7/pull/743), [#763](https://github.com/bounswe/bounswe2023group7/pull/763), [#777](https://github.com/bounswe/bounswe2023group7/pull/777), [#780](https://github.com/bounswe/bounswe2023group7/pull/780), [#781](https://github.com/bounswe/bounswe2023group7/pull/781), [#784](https://github.com/bounswe/bounswe2023group7/pull/784), [#787](https://github.com/bounswe/bounswe2023group7/pull/787), [#817](https://github.com/bounswe/bounswe2023group7/pull/817)

- **Unit Tests:** There is no Unit Test in our mobile application.
- **Additional information**: I presented the mobile part in milestone presentation and answered questions from the audience. I reviewed and tested the tasks done by the mobile team. I attended all lectures, labs, mobile and general team meetings. On 25.12.2023, we checked everything and created the final release tag with Elif Kızılkaya, Kardelen Erdal and Fatma Sena Alçı. I wrote the group part in the Final Report. As frontend and mobile teams, we were always in touch to be aligned and synced.

### Ömer Şafak Bebek

- **Member**: Ömer Şafak Bebek - 2019400180 - Group 7 - Backend Team
- **Responsibilities**: 
    - **Milestone 1:**   Mainly I was responsible for creating the codebase and dockerization and deployment of the backend application. I also helped our frontend team to deploy the web application. I have created basic user endpoints and an authentication & authorization system. I also created the required endpoints for the following system. 
    - **Milestone 2:** My most important resposibility was creating all post related endpoints for our forum feature. I also created a detailed game search endpoint, game completion duration endpoints, entity related endpoints, and a search endpoint for the search bar on the header. Additionally, I fixed some issues with the upload endpoint.
    - **Milestone 3:** Mainly, I was responsible for creating all group related endpoints. Also, I created annotation and semantic search servers and deployed them. I added endpoints for image and text annotations with Burak. I created a search endpoint that utilizes our semantic search server. Also, I fixed our deployment environment for the backend application by carrying it to a more powerful instance on Digital Ocean servers (it was collapsing beforehand).
- **Main Contributions**:

    - **Milestone 1:**
      - I created codebase of the backend application.
      - I dockerized the backend application. I created a docker-compose file which creates services for the application and database.
      - I created the ec2 instance to deploy the backend application.
      - I created the actions pipeline for automatization of deployment of the backend application
      - I helped to Elif Kızılkaya and Yunus Emre Altuğ for creating the ec2 instance for deployment of frontend project.
      - I created login and signup endpoints. I also created the user table which is required for these endpoints.
      - I created the authorization checker mechanism.
      - I created follow game and unfollow game endpoints.
      - I wrote evaluation of tools part of the milestone report for the backend team.
      - I created a pre-release version of the software with Elif Kızılkaya and Hatice Erk.  
    - **Milestone 2:**
      - I created list games endpoint.
      - I updated fields of the user entity according to the class diagram.
      - I fixed the memory issue that is caused by aws-sdk package.
      - I created endpoints for post feature.
      - I created a search endpoint that searches users, posts and games in our database.
      - I created endpoints for entity feature.
      - I revisioned the upload endpoint.
      - I created endpoints for game completion duration feature.
    - **Milestone 3:** 
        - I created group related endpoints.
        - I created an annotation server.
        - I created a semantic search server.
        - I implemented annotation endpoints.
        - I implemented an endpoint for semantic search.
        - I fixed our deployment environment for the backend application by carrying it to a more powerful instance on Digital Ocean servers (it was collapsing beforehand).



- **Code Related Significant Issues Assigned**:
    - **Milestone 1:**
[#262](https://github.com/bounswe/bounswe2023group7/issues/262), [#280](https://github.com/bounswe/bounswe2023group7/issues/280), [#283](https://github.com/bounswe/bounswe2023group7/issues/283), [#284](https://github.com/bounswe/bounswe2023group7/issues/284), [#285](https://github.com/bounswe/bounswe2023group7/issues/285), [#321](https://github.com/bounswe/bounswe2023group7/issues/321), [#322](https://github.com/bounswe/bounswe2023group7/issues/322), [#323](https://github.com/bounswe/bounswe2023group7/issues/323)
    - **Milestone 2:**
[#425](https://github.com/bounswe/bounswe2023group7/issues/425), [#426](https://github.com/bounswe/bounswe2023group7/issues/426), [#448](https://github.com/bounswe/bounswe2023group7/issues/448), [#474](https://github.com/bounswe/bounswe2023group7/issues/474), [#477](https://github.com/bounswe/bounswe2023group7/issues/477), [#525](https://github.com/bounswe/bounswe2023group7/issues/525), [#526](https://github.com/bounswe/bounswe2023group7/issues/526), [#527](https://github.com/bounswe/bounswe2023group7/issues/527), [#528](https://github.com/bounswe/bounswe2023group7/issues/528)
    - **Milestone 3:**
[#636](https://github.com/bounswe/bounswe2023group7/issues/636), [#706](https://github.com/bounswe/bounswe2023group7/issues/706),
[#718](https://github.com/bounswe/bounswe2023group7/issues/718), [#790](https://github.com/bounswe/bounswe2023group7/issues/790),
[#815](https://github.com/bounswe/bounswe2023group7/issues/815), [#824](https://github.com/bounswe/bounswe2023group7/issues/824)



- **Management Related Significant Issues Assigned**:
    - **Milestone 1:**
[#266](https://github.com/bounswe/bounswe2023group7/issues/266), [#270](https://github.com/bounswe/bounswe2023group7/issues/270), [#272](https://github.com/bounswe/bounswe2023group7/issues/272), [#354](https://github.com/bounswe/bounswe2023group7/issues/354), [#374](https://github.com/bounswe/bounswe2023group7/issues/374)
    - **Milestone 2:**

    - **Milestone 3:**

- **Pull Requests Assigned**:
    - **Milestone 1:**
    [#291](https://github.com/bounswe/bounswe2023group7/pull/291), [#294](https://github.com/bounswe/bounswe2023group7/pull/294), [#331](https://github.com/bounswe/bounswe2023group7/pull/331), [#355](https://github.com/bounswe/bounswe2023group7/pull/355), [#359](https://github.com/bounswe/bounswe2023group7/pull/359), [#361](https://github.com/bounswe/bounswe2023group7/pull/361)
    - **Milestone 2:**
[#441](https://github.com/bounswe/bounswe2023group7/pull/441), [#442](https://github.com/bounswe/bounswe2023group7/pull/442), [#445](https://github.com/bounswe/bounswe2023group7/pull/445), [#480](https://github.com/bounswe/bounswe2023group7/pull/480), [#492](https://github.com/bounswe/bounswe2023group7/pull/492), [#498](https://github.com/bounswe/bounswe2023group7/pull/498), [#552](https://github.com/bounswe/bounswe2023group7/pull/552), [#556](https://github.com/bounswe/bounswe2023group7/pull/556), [#559](https://github.com/bounswe/bounswe2023group7/pull/559), [#560](https://github.com/bounswe/bounswe2023group7/pull/560)
    - **Milestone 3:**
[#676](https://github.com/bounswe/bounswe2023group7/pull/676), [#719](https://github.com/bounswe/bounswe2023group7/pull/719), [#776](https://github.com/bounswe/bounswe2023group7/pull/776), [#791](https://github.com/bounswe/bounswe2023group7/pull/791), [#816](https://github.com/bounswe/bounswe2023group7/pull/816), [#835](https://github.com/bounswe/bounswe2023group7/pull/835)

- **Unit Tests:**
I wrote all unit tests that were created for some of our user and game endpoints. The results of these tests can be found in the picture below. The tests may be run with the `npm test`command.
![Screenshot 2023-12-01 at 11.09.03](https://hackmd.io/_uploads/rJxdrfDHT.png)

### Yunus Emre Altuğ

- **Member**: Yunus Emre Altuğ - 2019400057 - Group 7 - Frontend Team
- **Responsibilities**: 
    - **Milestone 1:** I have been assigned to work on some fronted pages. Also, we decided general page design as the frontend team.
    - **Milestone 2:** I have been assigned to work on game page functionalities, review functionalities and profile page of the users at this milestone
    - **Milestone 3:** I have been assigned to work on groups page, entity page, part of annotations. I implemented a detailed group search.
- **Main Contributions**:

    - **Milestone 1:**
        - I implemented the whole Game Page except sidebar and header.
      - I implemented the whole Home Page except sidebar and header.
      - I converted my post component, that I used in homepage, to a custom component for common use.
      - I designed general page structure with Elif Kızılkaya and Muhammet Tayyip Kamiloğlu.
      - I deployed frontend project to AWS with Ömer Şafak Bebek and Elif Kızılkaya.
      - I deployed frontend project to Docker with Elif Kızılkaya.
      - I reviewed requirements and revised with Hakan Karakuş and Muhammet Tayyip Kamiloğlu at the start of this term. Also checked before milestone 1 deliverables deadline.
      - I created the folder structure of frontend side with Elif Kızılkaya.
      - I contributed on readMe.md on frontend with Elif Kızılkaya.
      - I revised our user scenerio for game page with Ömer Şafak Bebek.
      - I evalauted tools we used in report for the project.
    - **Milestone 2:**
         - I revised the design of the game page after milestone 1. This revisions include the basic information box of the game and tabs.
              - I added submit duration functionality to game page.
              - I added follow-unfollow functionality to game page.
              - I added backend connection of the game page.
              - I added backend connection of the reviews.
              - I added like dislike functionality for the reviews.
              - I added create review functionality for the game page.
              - I added edit review functionality for the game page.
              - I added delete review functionality for the game page.
              - I added the display of the posts to the game page.
      - I created profile page for the game page after milestone 1. These implementations include the design and backend connection of the profile page.
          - I designed the profile page of a user.
          - I added profile information to the profile page.
          - I added favorite games section to the profile page.
          - I added edit profile modal to the profile page.
          - I added upload profile photo functionality.
          - I arranged the profile page's visibility for owner of the profile, users and guests.
       - I researched about annotation with Kardelen Erdal.
    - **Milestone 3:** 
        - I created entity page.
        - I edited tab icon and name.
        - I implemented group topic component.
        - I implemented groups page.
        - I revised entity page.
        - I created create group page.
        - I connected group topics to home page, profile page and surely groups page.
        - I modified create game page to also use as edit game page.
        - I was assigned to test mobile.
        - I implemented game story and game guide annotation in frontend.
        - I revised profile page to demonstrate user types.
        - I added links for predecessors and successors.
        - I created 404 no content page.
        - I created management part of the final milestone report.
        - I wrote release notes of the final milestone report.

- **Code Related Significant Issues Assigned**:
    - **Milestone 1:**
[#267](https://github.com/bounswe/bounswe2023group7/issues/267), [#268](https://github.com/bounswe/bounswe2023group7/issues/268), [#272](https://github.com/bounswe/bounswe2023group7/issues/272), [#273](https://github.com/bounswe/bounswe2023group7/issues/273), [#316](https://github.com/bounswe/bounswe2023group7/issues/316), [#317](https://github.com/bounswe/bounswe2023group7/issues/317), [#369](https://github.com/bounswe/bounswe2023group7/issues/369),
    - **Milestone 2:**
[#421](https://github.com/bounswe/bounswe2023group7/issues/421), [#422](https://github.com/bounswe/bounswe2023group7/issues/422), [#423](https://github.com/bounswe/bounswe2023group7/issues/423), [#462](https://github.com/bounswe/bounswe2023group7/issues/462), [#464](https://github.com/bounswe/bounswe2023group7/issues/464), [#508](https://github.com/bounswe/bounswe2023group7/issues/508), [#510](https://github.com/bounswe/bounswe2023group7/issues/510), [#545](https://github.com/bounswe/bounswe2023group7/issues/545), [#609](https://github.com/bounswe/bounswe2023group7/issues/609), 
    - **Milestone 3:**
[#632](https://github.com/bounswe/bounswe2023group7/issues/632), [#512](https://github.com/bounswe/bounswe2023group7/issues/512), [#637](https://github.com/bounswe/bounswe2023group7/issues/637), [#651](https://github.com/bounswe/bounswe2023group7/issues/651), [#652](https://github.com/bounswe/bounswe2023group7/issues/652), [#708](https://github.com/bounswe/bounswe2023group7/issues/708), [#710](https://github.com/bounswe/bounswe2023group7/issues/710), [#712](https://github.com/bounswe/bounswe2023group7/issues/712), [#755](https://github.com/bounswe/bounswe2023group7/issues/755), [#764](https://github.com/bounswe/bounswe2023group7/issues/764), [#765](https://github.com/bounswe/bounswe2023group7/issues/765), [#797](https://github.com/bounswe/bounswe2023group7/issues/797), [#833](https://github.com/bounswe/bounswe2023group7/issues/833), [#834](https://github.com/bounswe/bounswe2023group7/issues/834), 
- **Management Related Significant Issues Assigned**:
    - **Milestone 1:**
[#232](https://github.com/bounswe/bounswe2023group7/issues/232), [#239](https://github.com/bounswe/bounswe2023group7/issues/239), [#242](https://github.com/bounswe/bounswe2023group7/issues/242), [#258](https://github.com/bounswe/bounswe2023group7/issues/258), [#275](https://github.com/bounswe/bounswe2023group7/issues/275), [#277](https://github.com/bounswe/bounswe2023group7/issues/277), [#279](https://github.com/bounswe/bounswe2023group7/issues/279), [#392](https://github.com/bounswe/bounswe2023group7/issues/392), [#393](https://github.com/bounswe/bounswe2023group7/issues/393), 
    - **Milestone 2:**
[#463](https://github.com/bounswe/bounswe2023group7/issues/463), [#618](https://github.com/bounswe/bounswe2023group7/issues/618), 
    - **Milestone 3:**
[#715](https://github.com/bounswe/bounswe2023group7/issues/715),[#881](https://github.com/bounswe/bounswe2023group7/issues/881), [#883](https://github.com/bounswe/bounswe2023group7/issues/883), 
- **Code Related Significant Issues Reviewed**:
    - **Milestone 1:**
[#296](https://github.com/bounswe/bounswe2023group7/issues/296), [#298](https://github.com/bounswe/bounswe2023group7/issues/298), [#333](https://github.com/bounswe/bounswe2023group7/issues/333), [#362](https://github.com/bounswe/bounswe2023group7/issues/362),[#366](https://github.com/bounswe/bounswe2023group7/issues/366), 
    - **Milestone 2:**
[#429](https://github.com/bounswe/bounswe2023group7/issues/429), [#434](https://github.com/bounswe/bounswe2023group7/issues/434), [#471](https://github.com/bounswe/bounswe2023group7/issues/471), [#472](https://github.com/bounswe/bounswe2023group7/issues/472), [#475](https://github.com/bounswe/bounswe2023group7/issues/475), [#506](https://github.com/bounswe/bounswe2023group7/issues/506), [#514](https://github.com/bounswe/bounswe2023group7/issues/514), [#554](https://github.com/bounswe/bounswe2023group7/issues/554), [#573](https://github.com/bounswe/bounswe2023group7/issues/573), [#575](https://github.com/bounswe/bounswe2023group7/issues/575),
    - **Milestone 3:**
[#649](https://github.com/bounswe/bounswe2023group7/issues/649), [#653](https://github.com/bounswe/bounswe2023group7/issues/653), [#655](https://github.com/bounswe/bounswe2023group7/issues/655), [#697](https://github.com/bounswe/bounswe2023group7/issues/697), [#699](https://github.com/bounswe/bounswe2023group7/issues/699), [#702](https://github.com/bounswe/bounswe2023group7/issues/702), [#704](https://github.com/bounswe/bounswe2023group7/issues/704), [#709](https://github.com/bounswe/bounswe2023group7/issues/709), [#713](https://github.com/bounswe/bounswe2023group7/issues/713), [#714](https://github.com/bounswe/bounswe2023group7/issues/714), [#748](https://github.com/bounswe/bounswe2023group7/issues/758), [#756](https://github.com/bounswe/bounswe2023group7/issues/756), [#775](https://github.com/bounswe/bounswe2023group7/issues/775), [#779](https://github.com/bounswe/bounswe2023group7/issues/779), [#798](https://github.com/bounswe/bounswe2023group7/issues/798), [#803](https://github.com/bounswe/bounswe2023group7/issues/803), [#839](https://github.com/bounswe/bounswe2023group7/issues/839), [#843](https://github.com/bounswe/bounswe2023group7/issues/843), 
- **Management Related Significant Issues Reviewed**:
    - **Milestone 1:**
    - [#250](https://github.com/bounswe/bounswe2023group7/issues/250), [#265](https://github.com/bounswe/bounswe2023group7/issues/265), [#276](https://github.com/bounswe/bounswe2023group7/issues/276), 
    - **Milestone 2:**
    [#761](https://github.com/bounswe/bounswe2023group7/issues/761),
    [#871](https://github.com/bounswe/bounswe2023group7/issues/871),
- **Pull Requests Assigned**:
    - **Milestone 1:**
    - [#293](https://github.com/bounswe/bounswe2023group7/issues/293),[#336](https://github.com/bounswe/bounswe2023group7/issues/336), [#343](https://github.com/bounswe/bounswe2023group7/issues/343), [#360](https://github.com/bounswe/bounswe2023group7/issues/360) 
    - **Milestone 2:**
[#439](https://github.com/bounswe/bounswe2023group7/issues/439), [#449](https://github.com/bounswe/bounswe2023group7/issues/449), [#455](https://github.com/bounswe/bounswe2023group7/issues/455), [#485](https://github.com/bounswe/bounswe2023group7/issues/485), [#494](https://github.com/bounswe/bounswe2023group7/issues/494), [#550](https://github.com/bounswe/bounswe2023group7/issues/550), [#584](https://github.com/bounswe/bounswe2023group7/issues/584), [#597](https://github.com/bounswe/bounswe2023group7/issues/597), [#611](https://github.com/bounswe/bounswe2023group7/issues/611), [#612](https://github.com/bounswe/bounswe2023group7/issues/612),
    - **Milestone 3:**
[#633](https://github.com/bounswe/bounswe2023group7/issues/633), [#635](https://github.com/bounswe/bounswe2023group7/issues/635), [#726](https://github.com/bounswe/bounswe2023group7/issues/726), [#739](https://github.com/bounswe/bounswe2023group7/issues/739), [#746](https://github.com/bounswe/bounswe2023group7/issues/746), [#747](https://github.com/bounswe/bounswe2023group7/issues/747), [#837](https://github.com/bounswe/bounswe2023group7/issues/837), [#838](https://github.com/bounswe/bounswe2023group7/issues/838), [#850](https://github.com/bounswe/bounswe2023group7/issues/850), [#855](https://github.com/bounswe/bounswe2023group7/issues/855), [#867](https://github.com/bounswe/bounswe2023group7/issues/867),
- **Pull Requests Reviewed**:
    - **Milestone 1:**
    - [#329](https://github.com/bounswe/bounswe2023group7/issues/329),[#330](https://github.com/bounswe/bounswe2023group7/issues/330), [#333](https://github.com/bounswe/bounswe2023group7/issues/333), [#337](https://github.com/bounswe/bounswe2023group7/issues/337), [#348](https://github.com/bounswe/bounswe2023group7/issues/348), [#367](https://github.com/bounswe/bounswe2023group7/issues/367),
    - **Milestone 2:**
[#438](https://github.com/bounswe/bounswe2023group7/issues/438), [#447](https://github.com/bounswe/bounswe2023group7/issues/447), [#453](https://github.com/bounswe/bounswe2023group7/issues/453), [#495](https://github.com/bounswe/bounswe2023group7/issues/495), [#516](https://github.com/bounswe/bounswe2023group7/issues/516), [#541](https://github.com/bounswe/bounswe2023group7/issues/541), [#554](https://github.com/bounswe/bounswe2023group7/issues/554), [#568](https://github.com/bounswe/bounswe2023group7/issues/568), [#572](https://github.com/bounswe/bounswe2023group7/issues/572), [#579](https://github.com/bounswe/bounswe2023group7/issues/579), [#583](https://github.com/bounswe/bounswe2023group7/issues/583), [#608](https://github.com/bounswe/bounswe2023group7/issues/608),
    - **Milestone 3:**
[#634](https://github.com/bounswe/bounswe2023group7/issues/634), [#662](https://github.com/bounswe/bounswe2023group7/issues/662), [#670](https://github.com/bounswe/bounswe2023group7/issues/670), [#721](https://github.com/bounswe/bounswe2023group7/issues/721), [#724](https://github.com/bounswe/bounswe2023group7/issues/724), [#729](https://github.com/bounswe/bounswe2023group7/issues/729), [#742](https://github.com/bounswe/bounswe2023group7/issues/742), [#749](https://github.com/bounswe/bounswe2023group7/issues/749), [#789](https://github.com/bounswe/bounswe2023group7/issues/789), [#825](https://github.com/bounswe/bounswe2023group7/issues/825), [#842](https://github.com/bounswe/bounswe2023group7/issues/842), [#848](https://github.com/bounswe/bounswe2023group7/issues/848), [#854](https://github.com/bounswe/bounswe2023group7/issues/854), [#856](https://github.com/bounswe/bounswe2023group7/issues/856), [#858](https://github.com/bounswe/bounswe2023group7/issues/858), 



---------------------------------------
### Fatma Sena Alçı

- **Member**: Fatma Sena Alçı - 2019400045 - Group 7 - Mobile Team
- **Responsibilities**: 
    - **Milestone 1:**   I have been assigned to work on mobile implementations. I have been assigned to create and fill RAM according to project plan. I have been assigned to implement sign up page with endpoints. Also, I am responsible for weekly RAM review. I have been assigned to attend our mobile team meetings.
    - **Milestone 2:** I have been assigned to work on game page and game related pages. Other than that, I created change password page. Also, I connected them to our backend service.
    - **Milestone 3:** I have been assigned to work on recommended games which are game specific and user specific recommendations. I am responsible for Upcoming Titles feature on mobile application. Apart from these, I worked on fixing minor or major bugs.
- **Main Contributions**:

    - **Milestone 1:**
      - I created sequence diagram for game.
      - I created RAM and I filled it according to our project plan. Also, I filled first three weeks according to issues.
      - With my mobile team, we implemented home page design and folder structure.
      - I reviewed sign up page style and changed it according to our team's design decisions.
      - I connected sign up page to backend with using API Service which is created by Kardelen Erdal.
      - I created the list and status of the deliverables.
    - **Milestone 2:**
       - I implemented change password page and connected it to the backend with token control. 
       - I created game page with mock data to argue with my sub-teammates.
       - According to our feedbacks, I revised game page, I converted it to a generic type, deleted mock data and connected it to the backend.
       - I implemented tags and platforms scrollable in game and games pages.
       - I created a new page for game properties because the properties does not fit in our game page and it doesn't look nice.
       - I handled games with unavailable photos to improve appearance.
       - I implemented edit user profile page functionality and connect it to the backend.
       - I attended a meeting for milestone scenario preparation. 
       - I created two games in database.
    - **Milestone 3:** 
        - I added functionality to rating bar.
        - I implemented recommended games for each user in home page.
        - I implemented recommended games as specific for each game in their game pages.
        - I changed navigations of pages. Back button was uploading some fields again especially at edit and create pages. That modification improved user experience.
        - I added associated company and team information each member's profile page.
        - I checked our compatibility regularly using our website.
        - I removed notifications button because it was non-functional.
        - I created 'Upcoming Titles' page and implemented new thread version which include launching date and demo video fields. I connected it to our backend service. I also show these threads in the home page.
        - I fixed several bugs some of them important such as log out bug.
        - I helped to create an .apk to Hatice Erk and Kardelen Erdal.
        - I fixed last minute bugs in our .apk with Hatice Erk.
        - I created meaningful post or comments to improve our application.



- **Code Related Significant Issues Assigned**:
    - **Milestone 1:**
[#240](https://github.com/bounswe/bounswe2023group7/issues/240) [#271](https://github.com/bounswe/bounswe2023group7/issues/271) [#274](https://github.com/bounswe/bounswe2023group7/issues/274) [#287](https://github.com/bounswe/bounswe2023group7/issues/287) [#289](https://github.com/bounswe/bounswe2023group7/issues/289) [#302](https://github.com/bounswe/bounswe2023group7/issues/302)
    - **Milestone 2:**
 [#416](https://github.com/bounswe/bounswe2023group7/issues/416) [#420](https://github.com/bounswe/bounswe2023group7/issues/420) [#467](https://github.com/bounswe/bounswe2023group7/issues/467) [#535](https://github.com/bounswe/bounswe2023group7/issues/535) [#536](https://github.com/bounswe/bounswe2023group7/issues/536) [#537](https://github.com/bounswe/bounswe2023group7/issues/537) [#538](https://github.com/bounswe/bounswe2023group7/issues/538)
    - **Milestone 3:**
[#658](https://github.com/bounswe/bounswe2023group7/issues/658) [#659](https://github.com/bounswe/bounswe2023group7/issues/659) [#660](https://github.com/bounswe/bounswe2023group7/issues/660) [#661](https://github.com/bounswe/bounswe2023group7/issues/661) [#701](https://github.com/bounswe/bounswe2023group7/issues/701) [#703](https://github.com/bounswe/bounswe2023group7/issues/703) [#722](https://github.com/bounswe/bounswe2023group7/issues/722) [#752](https://github.com/bounswe/bounswe2023group7/issues/752) [#753](https://github.com/bounswe/bounswe2023group7/issues/753) [#754](https://github.com/bounswe/bounswe2023group7/issues/754) [#845](https://github.com/bounswe/bounswe2023group7/issues/845)


- **Management Related Significant Issues Assigned**:
    - **Milestone 1:**
[#263](https://github.com/bounswe/bounswe2023group7/issues/263) [#264](https://github.com/bounswe/bounswe2023group7/issues/264) [#399](https://github.com/bounswe/bounswe2023group7/issues/399) [#400](https://github.com/bounswe/bounswe2023group7/issues/400)
    - **Milestone 2:**
[#509](https://github.com/bounswe/bounswe2023group7/issues/509) [#600](https://github.com/bounswe/bounswe2023group7/issues/600) 
    - **Milestone 3:**
[#875](https://github.com/bounswe/bounswe2023group7/issues/875)

- **Pull Requests Assigned**:
    - **Milestone 1:**
    [#345](https://github.com/bounswe/bounswe2023group7/pull/345)
    - **Milestone 2:**
[#446](https://github.com/bounswe/bounswe2023group7/pull/446) [#465](https://github.com/bounswe/bounswe2023group7/pull/465) [#496](https://github.com/bounswe/bounswe2023group7/pull/496)  [#563](https://github.com/bounswe/bounswe2023group7/pull/563) [#567](https://github.com/bounswe/bounswe2023group7/pull/567) [#576](https://github.com/bounswe/bounswe2023group7/pull/576) [#599](https://github.com/bounswe/bounswe2023group7/pull/599) 
    - **Milestone 3:**

| Created PR | Conflict | How It Resolved |
| ---        | ---      | ----            |
| [#681](https://github.com/bounswe/bounswe2023group7/pull/681)        | ---      | No conflict            |
| [#723](https://github.com/bounswe/bounswe2023group7/pull/723)        | ---      | No conflict            |
| [#732](https://github.com/bounswe/bounswe2023group7/pull/732)        | ---      | No conflict            |
| [#733](https://github.com/bounswe/bounswe2023group7/pull/733)        | ---      | No conflict            |
| [#743](https://github.com/bounswe/bounswe2023group7/pull/743)        |Print statement caused conflict.    |It is deleted.|
| [#780](https://github.com/bounswe/bounswe2023group7/pull/780)        | ---      | No conflict    |
| [#781](https://github.com/bounswe/bounswe2023group7/pull/781)        |Overlap occurs.   | Dev merged into my branch. |
| [#817](https://github.com/bounswe/bounswe2023group7/pull/817)        |Arguments of some old functions have been changed.  | Dev merged into my branch.| | [#846](https://github.com/bounswe/bounswe2023group7/pull/846)        |User provider have been changed.  | Dev merged into my branch. 


- **Unit Tests:**  I did not write unit test because our mobile app does not have any. We tested our application with manual testing.
--------------------------  

# **Progress based on teamwork**
    
| Member | Summary Of Work  |
|---     |----              |
| Elif Kızılkaya   | During the first milestone, my focus was on setting up Docker, managing the deployment processes, constructing the action pipeline, and contributing to the project's structural planning. I developed pages with mock datas for our project components such as home page, forum page; and general frontend layout (sidebar & header as well) and actively participated in the pre-release phase of our software, including preparing the milestone report and presentation materials, also participated in the milestone demo. Also, I revised the previous semester's use case and class diagrams with Hatice Erk and Kardelen Erdal. For the second milestone, I shifted my attention to designing and implementing key pages such as the "Create Game" and "Forums" pages, ensuring they were well-integrated with the backend. This included creating a form for game creation and adding search bar to the Forums page. I also redesigned the homepage based on user feedback, enhancing the user experience through UI improvements and implementing new features like thread commenting. I implemented thread page and commenting, also revised sidebar and header. I participaed in milestone report preparation and presentation materials, also presented the milestone demo with Hatice Erk and Kardelen Erdal.  As we progressed to the third milestone, my efforts were concentrated on implementing image and text annotations within various sections, such as threads (image & text), comments (text), and game bios (text). I consistently updated the homepage and sidebar to incorporate new features and feedback such as trending topics and footer to the layout. Additionally, I tackled several frontend bugs, developed the footer, and introduced the "Upcoming Title" feature, which displayed launch dates and demo links for upcoming games. My role also extended to revising existing components like threads and comments, integrating functionalities like editing, deleting, liking, and disliking. Furthermore, I enhanced the search functionality and topics part on the forums page and was involved in preparing user scenarios for our final demo presentation. To ensure a comprehensive demonstration of our platform's capabilities, I created a variety of games, threads, entities, and groups. I took part in preparing milestone report and presenting final milestone demo. Also, I prepated final video with Kardelen Erdal and Hatice Erk. |
| Kardelen Erdal | Throughout Milestone 1, I collaborated with my team on various tasks, including revising the class diagram, implementing the home page, and finalizing the design of the mobile application. I took charge of creating the log in and sign-up pages, added a splash screen and a sidebar with log in/out buttons, and developed an API service to connect with the backend. We successfully generated the .apk file for Milestone 1, accompanied by detailed instructions in the ReadMe.md file. In Milestone 2, my responsibilities were implementing features such as the Forgot Password Page, Create Game Pages, Edit Game Pages, and Create Entity Page. I also made research on how to use annotations in a Flutter app. I collaborated with team members to refine the user interface based on feedback, improved password visibility, and integrated default images for games. For Milestone 3, I designed and implemented the Entities Page, Entity Page, and Annotation features. I implemented text annotations for threads, comments, games and entities. I added an info box to the user profile page. Alongside team members, I recorded a video for deliverables, and ensured the final .apk file was ready. For the three customer presentations, I took charge in preparing a user scenario and I presented the mobile part in every one of them. Throughout the term, I constantly delete the mock data in database since all our team members insert mock data to test our features. In every milestone, I fixed some bugs and I reviewed PRs, resolved conflicts in them. I and Elif Kızılkaya were always in touch throughout the term to make the frontend and mobile app compatible.|    
|Fatma Sena Alçı|Until the first milestone, we generally completed the deficiencies in the planning of our project and made changes. In this context, I prepared a sequence diagram for the game. As we started the implementation, collaboration with the mobile team was crucial because no one had a Flutter background. I completed the sign-up page backend integration. I created RAM to monitor our progress. The second milestone was when we implemented the main features. I integrated the change password and edit user profile page features into the mobile app. I created the game page and took care of its design. To enhance the user interface, I reworked the design of game pages for games without photos and implemented scrollable tags. I contributed to making our application realistic by creating meaningful posts, comments and real games. In order to improve the user experience, I edited the navigation of many pages to prevent reloading upon using the back button. Also I added photos to the drawer and resolved several bugs. I added user related recommended games for registered users and game related recommended games for each game. I created a new page called "Upcoming Titles," completed its integration, and added it to the homepage in addition to its own page. I helped fix last minute bugs that occurred while creating the apk for the final release.|
|Muhammet Tayyip Kamiloğlu|Throughout the project milestones, I played a pivotal role in updating and maintaining our documentation, ensuring its compatibility with the new semester and team members. I actively participated in reviewing and updating last semester's requirements, incorporating mockups for new features such as the entity page and an enhanced Game page. As a frontend developer, I implemented crucial functionalities like login, signup, and logout for the web application, addressing bugs and reviewing code written by teammates in milestone 1. In milestone 2, I focused on bolstering our system's security with the implementation of a change password page and contributed significantly to the expansion of our forum capabilities by designing the create thread page. Additionally, I played a key role in the completion and submission of the lab 5 report on GitHub, incorporating a show password feature for improved accessibility. The final milestone saw the successful implementation of a 'create entity' page, detailed search features for games and forums, and the integration of suggested games sections. I also delved into enhancing user engagement through the addition of an annotation feature and a semantic search attempt. Notable additions include a group page, an 'upcoming titles' component, and a versatile 'GameCard' component for improved game information presentation.
| Furkan Ülke | Throughout the project, my contributions were pivotal in enhancing the mobile application's functionality and user experience. Notably, I created a custom bottomNavigationBar widget, providing crucial flexibility to the app's navigation. Emphasizing user-centric design, I meticulously designed and implemented the search landing page, detailed game search, and post search functionalities. The game search allows users to explore titles based on various criteria such as title, tags, and platform, with added filtering and sorting options for a seamless experience. Similarly, the post search enables users to find posts by owner, title, tags, and more, with corresponding filtering and sorting capabilities. My focus extended to user-centric features, including the design and implementation of a user search feature. Users can now be easily located by their usernames, and a search result summary displays pertinent information such as avatar, full username, full name, and user role—facilitating efficient user discovery. Resolving image scale issues in the mobile app, I optimized the UI by setting game images as background in a transparent manner, ensuring a visually perfect Games page. Moreover, I introduced a last activity section for users, enhancing the profile page with visibility into a user's recent actions. For comprehensive project documentation, I played a crucial role in preparing UI/UX details for the final milestone report, listing all mobile app functionalities with images and providing source code links for each feature. Additionally, I crafted a user manual, offering clear instructions for users on all possible actions within the mobile app, ensuring a user-friendly and informative experience. |
|Yunus Emre Altuğ| Throughout the project I was a member of frontend team. I had main role in game page and home page before milestone 1. (Home page did not remain as that) Both pages' general structure were implemented by me. After milestone 1, I added dynamic parts of the game page such as following, reviews, liking, disliking reviews, rating, game duration submittance. Also I created profile page. Additionally I integrated edit profile in profile page. Both profile page and game page are revised by me whenever it is needed usually. Before milestone 2, I completed most part of the game page and profile page. After milestone 2, I created the groups page, create group page and entity page. On groups page I implemented, search, filter, sorting and pagination structure to get relevant groups. Furthermore, I designed the group topics which enable user to be linked to groups. I also played a role in implementing annotations. I implemented game story and game guide annotations in game page. Except frontend developments, with Elif and Şafak we dockerized and deployed our platforms. Also we did CI/CD integration.|
|Ömer Şafak Bebek| Throughout the project, I was a member of the backend team. Until the first milestone, mainly I was responsible for creating the codebase and dockerization and deployment of the backend application. I also helped our frontend team to deploy the web application. I have created basic user endpoints and an authentication & authorization system. I also created the required endpoints for the following system. After milestone 1, my most important contribution was creating all post related endpoints for our forum feature. I also created a detailed game search endpoint, game completion duration endpoints, entity related endpoints, and a search endpoint for the search bar on the header. Additionally, I fixed some issues with the upload endpoint. After milestone 2, I created all group related endpoints. Also, I created annotation and semantic search servers and deployed them. I added endpoints for image and text annotations with Burak. I created a search endpoint that utilizes our semantic search server. Also, I fixed our deployment environment for the backend application by carrying it to a more powerful instance on Digital Ocean servers (it was collapsing beforehand).| 
|Hatice Erk| In Milestone 1, the new team member took essential steps to integrate into the project by familiarizing themselves with both the team and the project repository. They created a wiki profile page, participated in technology research for the mobile team, and collaborated on revising class and use case diagrams. Communication plans were updated, and mockups were enhanced with new pages. The team initiated the project with a home page design, organized folder structures, and optimized the repository by updating the .gitignore. Design decisions were made in meetings with team members, including discussions on logo, fonts, and color palette. Preparations for the customer milestone presentation were made, leading to the creation of a pre-release version for the first milestone. In Milestone 2, contributions included lab reports, updates to the Android app icon and name, and the creation of a forum with backend connections. Various pages and functionalities, such as thread creation, reviews, and comments, were implemented. Navigation and bug fixes were addressed, and the user profile was updated. The team prepared for the customer presentation and created a pre-release version. Milestone 3 involved contributions to lab reports, the completion of group functionalities, and the implementation of group-related pages and features. Thread and comment edit/delete functions were added, and important bugs were fixed. Collaboration with team members on the .apk and release version was carried out, and a scenario for the milestone report was written. The team produced a video for the milestone report, showcasing their achievements throughout the project.|




# **Use and Maintanence**

## **Project Artifacts**
###  **Manuals**:
* <span style="font-size: 25px;">**User Manual:**</span>

    Welcome to Ludos!

    This manual will provide you with all the information you need to safely and effectively use our platform to be able reach all the content about games.

    You do not necesseraily have to create an account initially. You can use the website or the mobile app as a guest user. An account creation is required for further functionalities such as creating a post, adding commnents and annotations, following games etc.
    
    Since mobile app and website has some UI differences both web manual and mobile manual will be provided.
    * Web:
        - Creating an Account:
            - Click the register button at the left corner of the homepage.
            - Write your desired email address, username and password to the fields. Passwords must match.
            - Click on signup button.
            - After signing up you will be directed to the sign in page if user creation is successful.
    
        - Login:
            - Click the sign in button at the left corner of the homepage.
             - Enter your username and password to page that comes up. 
            - If all informations are correct you will be redirected to the home page again
    
        - Forgot Password:
            - Click the person icon at the bottom of the sidebar and click to the change password selection.
            - Write your registered email to the input field. If email is found in database it will send a code to your mail.
            - After sending code a page will open. Enter the code that comes your email and your new password.
            - If code is correct then you will be redirected to the home page.
    
        - Home Page:
             * In uppermost, you will see Trending Games part. Games in showed in this part are the ones rated most by platform users. These part also is also scrollable.       
                - Please scroll if you want more popular games. 
                - You can visit a popular game's page by clicking on the container where game reside in.
        
            *  In uppermost, you will see a search bar where you can search for users, groups, threads and games.
    
            *  If you logged in, recommended games are also provided to you under the popular games part. Games listed in this part is fully personalized according to your previous choices, games you follow etc. 
                - Recommended games part is also scrollable and selectable as we do in popular games.
    
            *  Right under the Recomennded Games, "Trending Games" resides. Threads under this part are the most rated and replied ones. 
                - Click on any thread reside there to view the thread and comments on that post.
                -  If you logged in, you can also comment on that thread by entering your reply in "Add a reply" place. Click on arrow icon to send reply. 
                - You can also like or dislike the post and comments by clicking like or dislike icons, respectively.
    
            *  In the left of the trending games part there is groups component. Here there are groups with most members and most interactions.
    
        - Group Page:
            - In group page there is container at the top. Here you can see the group name, group game, current and maximum number of members and join button.
                - You can click join button to join to the group.
                - If you are the owner of the group then you will see the edit group button.
                - You can click the game name to navigate to the this game's page.
    
        - Games Page:
            * Under this page, all games on the platform will be listed.
                * Click any of them visit their page. 
                * If you can not find a game, you can create a page for it also by pressing "+" icon in sidebar.
                    - Fill necessary places and click on "Save game" button.
            * There are suggested games component to show to user suggested games.
            * At the right side of the suggested games there are upcoming titles component. You can see the upcoming titles here and you can go its page by clicking them.
    
        - Game Profile Page:
            - You can see the image and tags and other informations about the the game from the container at the top.
                - You can rate the game by selecting from the stars. 
                - You can enter the completion duration of the game. 
            - You can see the story, gameplay and trivia of the game from the description tab. 
            - You can see the availaible platforms from the tab that is same named.
            - You can see predecessor, successor and suggested games for this game from the related tabs.
            - You can see the entities of the game and create new entity for game from the entities tab.
                - To create an entity, click add entity button.
                - Enter the name of the entity, image link, entity type, game, description and other necessary informations.
                - After that click submit bıtton. If entity is created succesfully you will redirected to entity page.
            - You can see groups of the game from groups tab.
            - You can see reviews and add review for the game.
                - To add a review you can write your review to input field below the reviews and click to enter button.

        - Logout:
            - To logout click the person icon at left bottom of the page.
            - Select log out. If succesful you will be redirected to login page.
    
        - Annotation:
            - To add annotation select the text you will annotate and enter the value.
            - After writing click "OK". 
            - To delete the annotation click the annotation that is already created. After that click the trash bin icon.
            
    * Mobile:
        - Creating an Account:
            * Open drawer from its icon reside in upper-left corner of the screen.
            *  Click on Log In.
            *  Click on "Create an Account" button.
            *  Enter your desired username and password, and also your valid email address.
            *  Ensure you entered the correct password by revealing password.
            *  Click on "Sign Up" button if everything is alright.
            *  Now, you will be directed to Login Page again. Please enter your new account's username and password values, then click on "Login" button.
    
        - Login:
            *  Navigate to the Login page via drawer as mentioned earlier.
            *  Enter your username and password, then click on "Login" button.
            *  If provided information is correct you will be directed to the Home Page of the app.
        
        - Forgot Password:
            *  Navigate to the Login Page via drawer.
            *  Click on "Forgot password?" button.
            *  Enter your email address that your account associated with.
            *  After entering email address, click on "Send activation code" button. After pressing button you will be directed to the Forgot Password Page. 
            *  In this page, you should enter the activation code that our system send to your email address. Also, you should provide a new password to set. 
            *  If you did not receive an activation code click on "Resend Activation code" button. Else click on "Reset Password" button.
            *  After pressing "Reset Password" button, you will be directed back to Login Page where you should enter your new password.
    
        - Home Page:
            *  In uppermost, you will see Popular Games part. Games in showed in this part are the ones rated most by platform users. These part also is also scrollable.       
                - Please scroll if you want more popular games. 
                - You can visit a popular game's page by clicking on the container where game reside in.
    
            *  If you logged in, recommended games are also provided to you under the popular games part. Games listed in this part is fully personalized according to your previous choices, games you follow etc. 
                - Recommended games part is also scrollable and selectable as we do in popular games.
    
            *  Right under the Recomennded Games, "Trending Topics" resides. Threads under this part are the most rated and replied ones. 
                - Click on any thread reside there to view the thread and comments on that post.
                -  If you logged in, you can also comment on that thread by entering your reply in "Add a reply" place. Click on arrow icon to send reply. 
                - You can also like or dislike the post and comments by clicking like or dislike icons, respectively.
    
            *  Under the Trending Topics, you will see "Upcoming Titles" part. This part also consist of posts. But differently, this posts are created by game developers and publishers to announce any news, updates, and events.
    
                - You can also reply, like, and dislike posts under this part as you do in the Trending Topics part.
    
            *  At the bottom of the screen you will see Bottom Navigation Bar. You can click on Icons reside on that bar to navigate to "Home", "Group", "Games", "Upcoming Titles", and "Search" pages respectively.
    
        - Group Page:
            * Under this page all groups formed for a specific game will be listed.
            * Use dropdown to search for groups formed for your desired game.
            * You can click on any group to view it contents.
            * You can view the group members and posts in that group only if you joined that group. Click on "Join" button.
                * You can create posts after joined by clicking on "Create Post" button. Fill necessary places in Create Post screen then click on "Save Thread" finally.
                * You can view posts in this group by clicking on "SEE POST".
            * Click on "Leave" button to leave from the group if you want.
            * Also, you can create your own group by pressing "+" icon in group page. 
                * Fill necessary places, then click on "Create" button.
    
        - Games Page:
            * Under this page, all games on the platform will be listed.
                * Click any of them visit their page. 
                * If you can not find a game, you can create a page for it also by pressing "+" icon in games page.
                    - Fill necessary places and click on "Save game" button.
    
        - Game Profile Page:
            * Tags associated with that game are listed at the top with "#".
            * Under tags, supported platform for that game are listed.
            * You can view the properties of the game ,like release date, developer, and completion duration, by clicking on the corresponding button.
            * You can view all the posts about the game by pressing on "Explore the Forum" button. 
            * You can also Follow/Unfollow the game by clicking on "Follow"/"Unfollow" button.
            * Related games are listed also in this page as a scrollable list. Please click any one of them to navigate to its page.
            * You can edit the game's profile page if you want.
                - Select "Edit Game" from the left drawer of the game page.
                - Fill necessary places and click on "Update Game" button.
    
            * You can add review for the game.
                - Firstly, click on "Add Review" button.
                - Secondly, set rating by moving rating indicator through left or right.
                - Thirdly, enter your review in the place reserved for that.
                - Finally, click on "Submit" button to save the review.
    
        - Entities:
            * In our platform, all games could have entities. 
                - You can also add an entity for a game by selecting "Add an Entity" from the left drawer of the game page. (Click on "..." sign to open the drawer).
                - Fill necessary places and click on "Save Entity" button to create one.
            * Previously created entities for that game can also be viewed by clicking on "See all Entities" button in the game's profile page. 
                - Entites are categorized in Environments, Characters, Packages, and Items classes. Click on any entity to view its details.
    
        - Upcoming Titles Page:
            * You can view all (unlike we do in the home page) the upcoming titles here.
            * Click any one of them to add reply, and to like/dislike any post under that thread.
    
        - Search Page:
            * When pressed search icon from the bottom navigation bar you will be directed to the landing page for the search operation.
            * Click on "Games", "Threads", and "Users" to search for games, posts, and other users, respectively.
                1. *Game Search:*            
                - You can search games by their titles, tags they have, and platforms they support.
                - You can also sort search results by number of followers each game has and average ratings each game currently has.
                    - **Reminder:** You can select at most one sorting criteria at a time.
                - If you logged in you can filter search result to show games you followed by clicking on the corresponding box.
                - Search result will be list of games as summary, basically (if there are any games with your desired criteria).
                    - Click on one of the games in the search result to navigate in order to its own page.
    
                2. *Thread Search:* 
                - You can search threads by their title(or body), tags they have, game they belong to, and id of the user they belong to.
                - You can also sort the search result by the number of likes each post has.
                    - You can also further choose to list result in ascending or descending order by choosing "ASC" or "DESC", respectively.
                        - Drag the button towards the direction you desired to apply.
                - If you logged in You can filter the results, too. Choose either "list only liked post" or "list only disliked post" to apply corresponding filtering.
                - Search results will be list of posts that meet the required conditions.
                    - Click on any of them to interact with.
    
                2. *User Search:* 
                - You can search users by their usernames only. 
                    - Type the username you want to search for.
                    - Click on search button.
                - Search results will be a list of users that meet the required condition. Each result consists of user's avatar, full username, full name, and role(Gamer, Developer etc.) to help you to find the user you are looking for.
                - Click on the one you are looking for(if listed there) to visit his/her profile page.
    
        - Visiting Another One's Profile Page:
            * You can aslo view other's profile pages. 
                - You can view their number of posts, their number of reviews, their bio, games they follow, and also their last activities (posts and comments they formed lastly) in their profile pages. 
    
        - Owner Profile Page:
            * You can navigate to your profile from left drawer in the home page if you logged in.
                - Click on your avatar from the left drawer, then you will be directed to your profile page.
                - You can view your own profile as the same as viewing other's.
                - You can also edit your profile page.
                    - Click on "Edit" from the right side of the Appbar. Fill places as you desired than click on "Save". 
    
        - Change Password:
            * Click on "Change Password" from the left drawer in the home page.
            * Enter your old password.
            * Enter your new password two times to make sure.
            * Finally, click on "Change Password" button.
    
        - Logout:
            * You can safely log out by clicking on the "Log Out" from the left drawer in the home page.
                - You will be directed to login page. You can log in again if you want. 
    
        - Annotation:
            * You can add annotation on games, forum contents etc. I will give directives for annotating game bio. Annotating post is the same.
                1. First, log in.
                2. Then, go to the game's profile page. 
                3. Select the phrase you want to annotate.
                4. Annotate option will be appeared if you pressed some time.
                5. Click on annotate.
                6. Enter your annotation, then click on "Annotate" button to save.
    
            * You can also view annotations previously created.
                1. Annotated phrases showed with highlighted areas around them.
                2. Click on that area, then the previously created annotation will pop up. 
                3. Close the pop up by clicking on the "Close" button if you want.
                
        - Editing Deleting Posts:
            * You can edit or delete post you have previously created by following these steps:
                1. Navigate to the post you want to edit or delete via search functionality or any other way I mentioned earlier.
                2. Edit and delete icons will be appear directly upper-right corner of the post, under the avatar.
                * Click on "pencil" icon if you want to edit the post.
                    - Fill necessary places as you desire.
                    - Click on "Save Thread" button to save changes.
                * Click on "thrash bin" icon if you want to delete the post.
                    - Click on "Delete" button when pop up message ask you to approve.
                    
    
        
        
* <span style="font-size: 22px;">**System Manual:**</span>

    
##  How to run frontend?

*  **Prerequisites**

    Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)

### Steps to Deploy

1. **Clone the Repository:**
    ```bash
     git clone https://github.com/bounswe/bounswe2023group7.git
     ```
2. **Go to Directory:**
   ```bash
   cd ludos/frontend
   ```
3. **Ensure that you have docker installed and running.**
4. **Build the Docker Image and Run:**
    ```bash
    docker compose up --build
    ```
    
5. **Access Our Project**
 Now, it is available at *localhost:3000/*


### Deployed Version of frontend
Go to our [website link](http://51.20.170.143:3000/) which we also shared via Discord channel of the course.

## How to run mobile app?
- You can download APK version of the app from [here](https://drive.google.com/file/d/1h2x1MLO_yyUC1Tq7dmDcOutZYBKyXXKt/view?usp=sharing) and directly run it in your Android device.
- If you want to use an emulator to open the application:
  - You can download an Android emulator with Android Studio through [this link](https://developer.android.com/studio?hl=tr).
  - Then you can easily run the application on Android Studio following [this guide](https://www.geeksforgeeks.org/how-to-import-existing-flutter-project-in-android-studio/).
## How to use emulator for mobile app?
- Install Android Studio. 
-Go to 'Tools' section and select 'Device Manager'. 
-Click the 'Create Device'.
-Select a device from phone category. Customize size and system image. (I choose Android API and Pixel 5 because most of the Android phones size 6.1'.)
-Go to Device Manager and select created device, click "Launch this AVD in the emulator."
-After the emulation starts, and visible in running devices; run the 'main.dart'.
-It creates an APK and loads it to emulator, you can use it like an Android device. 

## How to run backend application?
Deployed Swagger Documentation: http://164.92.195.35:8080/api

```WORKDIR=./ludos/backend```<br/>
1. Create a .env file for the environment variables. It is included in the zip file. <br/>
2. Run ```docker compose up --build``` <br/>
3. Now, the api is available with localhost:8080 base url.

## [Software Requirements Specification (SRS)](https://github.com/bounswe/bounswe2023group7/wiki/Requirements)
## Software design documents (using UML)
* [Use case diagrams](https://github.com/bounswe/bounswe2023group7/wiki/Use-Case-Diagrams)
* [Class diagrams](https://github.com/bounswe/bounswe2023group7/wiki/Class-Diagrams)
* [Sequence diagrams](https://github.com/bounswe/bounswe2023group7/wiki/Sequence-Diagrams)
## User scenarios and mockups
* [User Scenarios](https://github.com/bounswe/bounswe2023group7/wiki/User-Scenarios)
* [Mockups](https://github.com/bounswe/bounswe2023group7/wiki/Mock-Ups)
## [Research](https://github.com/bounswe/bounswe2023group7/wiki/%F0%9F%93%9D-Researches)
## [Project plan](https://github.com/orgs/bounswe/projects/19)

## Unit Test Reports
- We have written unit tests for our backend application. We have used the jest framework for unit testing. We have mocked our repository layer functions so that we do not need a database connection while running the tests. We have created a GitHub Actions workflow that runs unit tests when a pull request that includes changes in the backend folder is created. This workflow also runs npm run build and npm run lint commands to check build errors and format errors.
- We have created unit tests for some of the controller functions. The tests may be run with the `npm test` command. The results of the tests can be found in the picture below.
    ![Screenshot 2023-12-01 at 11.09.03](https://hackmd.io/_uploads/rJxdrfDHT.png)

