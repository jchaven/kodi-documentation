# Duncarin - Kodi Documentation
Detailed explanation of how Kodi is configured in the Haven family. The purpose of this documentation is for non-technical family members to understand how Kodi works and what to do if something goes wrong (or new content is desired) and I am not around to handle it.


## Personal Details
This documentation contains several personal details, but none are so private as to cause alarm. All names, addresses, and emails are easily found on the internet. There are no passwords or keys in the documentation. All passwords are stored outside of this document.



## Built With
This site is built with VS Code and uses only HTML, CSS, and just enough Javacsript to load pages.
The point is anyone with the slightest experience with HTML can understand and edit this code. All code is meant to run on the simplest of HTTP servers without relying on features of any specific webserver (Apache, IIS, NGINX, etc.). 


## Deployment
You are free to steal this code for your own use. I ask that any improvements you make get returned.
Copy the files to any folder on your webserver then browse to that folder. The site should load.

1. Create a folder for the following code on your webserver.
2. Clone the "app" repository to a folder named "app":
   ```bash
   git clone https://github.com/jchaven/app-documentation app
3. Clone this repository to the folder "kodi":
   ```bash
   git clone git clone https://github.com/jchaven/kodi-documentation kodi

## Testing with local webserver

1. Change directory to the folder created above
2. Start Python webserver
   ```bash
   sudo python3 -m http.server 80
3. Open browser and browse to [localhost/kodi](http://localhost/kodi)

## Contributing
This site is purposefully not a blog, CMS, or any type of database-driven site intended to be used by non-technical people. This site is meant to be coded by people with technical backgrounds in pure HTML. All HTML, CSS, and Javascript should be just enough to display the information without bloating the code.

All content displayed is in the subfolder **content**. New files added to the **content** is manually added to the **sidebar.html** file. There is no automation.

### Giving Back
I am not a good programmer/coder. This code could use help - specifically with the styling for behavior on small screens.


## Authors


## License
This project is licensed under the CC0 1.0 Universal Creative Commons License


## Acknowledgments
  - **Billie Thompson** - *Provided README Template* - [PurpleBooth](https://github.com/PurpleBooth)
