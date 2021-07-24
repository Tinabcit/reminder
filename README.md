# ACIT 2520 Final Project
- Second attempt or branch of the passportStarter
# Local Authentication
- The following has been made :
- Start up the login page and can access to the login page by email and password.
- Can access the dashboard Welcome page and with login button.

# GitHub Attentication
- Created a button that says "login with the github" update.
- Add a bit code to start up create the login page and I'll try to complete before the class starts.

# I also did the bonus question in the lab were we complete the authenticaton loging and show how many user's login with it and code some ways to approach the 
following parts of the bonus lab.

## If I wanted to approach this assignment again I would create the local host authentication same format as before however I would change a few following concepts:
1. I would first take the passportStarter and open in the Visual Studio Code.
2. Then I would link up to the my github repo account.
3. Then I would create different working in the powershell ternminal so that I could see my different tasks branches.
4. Then I would follow the video step's that was provided to us how to start up running the local host approaches.
Before going passport.js looking up github Authentication, I would create OAuth Apps in the Github developer Section in Github.
and Save the ClientID and Client Secret for implementing them in the code.
5. Then I would go the passport.js  and basically modify the code and put in my server.js file.
I would also create an (.env) file and store my ClientID and Client Secret in there so no one can access the information directly
from the server.js file.
- Another way I wanted to approach this assigment (GitHub Attentication only) again using the passportStarter file 
and just following the other steps for the linking the github attentication working.
1. Creating the the OAuth App section in the GitHub developer setting in the github.
2. Once creating the OAuth app section the github will provide a Client ID and Client Secret which should be kept private.
3. Then creating a route function in the passportStarter for example like following url code (https://www.example.com/authenticate/github)
4. Then we should add the github route in the Github app setting under Authorization callback URL.
5. Then we are adding from the npm site the "query-string" module to create the login github url.
6. Then we would create the login url and add into the website ( React code meaning)
7. Then we would use user login to redirect them back our app by using special code url for example (https://www.example.com/authenticate/github?code=CODE_IS_HERE)
8. Then we get our code and create access token by using query-string library and adding a necesary codes.
9. In the end we will store the ClientID and Client Secret by using the process.env file to make dotenv library. We can get the (.env) from npm module (.env package)
10. Lastly you can you GitHub API to finish the project off and the gitHub attentication working.
 
