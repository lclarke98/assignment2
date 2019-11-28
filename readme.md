Installation

- Step 1 : Create the database using the db.sql file
- Step 2 : cd into the app directory on the vm
- Step 3 : Enter "gcloud app deploy"

HOW IT WORKS

GET: This gets the named register from the database. If the requested register  is not
in the database it returns 0.

POST: First it checks to see if the register already exists in the database. If it
does not exits it adds it with its value. If it does exist it updates the value by
adding the new value onto the current value.

DELETE: This deletes a named register and returns 204.

PUT: This updates the value of a named register.