# bree-shoes-meanstack
Classic virtual shop, using meanstack

How to include json files as part of a collection

1. Create a data base called "bree"
2. Create a collection called "shoes"
3. Copy the .json file in the project folder
4. Run the following command
mongoimport --db bree --collection shoes --type json --file shoes.json --jsonArray
