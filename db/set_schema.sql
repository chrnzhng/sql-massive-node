DROP TABLE IF EXISTS Products;

CREATE TABLE Products (
  ProductID SERIAL PRIMARY KEY NOT NULL,
  Name varchar(40) NOT NULL,
  Description varchar(80) NOT NULL,
  Price integer NOT NULL,
  ImageUrl text NOT NULL
);