Platform = Meteor
Framework = React

API endpoints = Phaxio (fax), Lob (mail), AWS (S3)

Meteor
You only need to care about 4 subdirectories within the parent directory:

1. client - routing, modules (components & containers)
2. lib - defines the collections and document structure that occupies the database (mongo/mlab)
3. server - methods (interact with database), publications (publish data from database)
4. settings.json - environment variables for Phaxio, Lob, AWS, db

The most important functionality for operational purposes is faxing.  Functionality was not segregated from the component. You will find it in client -> modules -> dashboard -> components -> Fax.  A function is used to invoke a meteor method called 'upload'. You will find the method in server -> methods -> phaxio.js.  The method uploads the document to S3, returning a url which is passed to Phaxio for sending.

Credentials/environmentl variables are held in settings.json which is NOT made available on the client.

This tool keeps the team operational until full automation is achieved.


