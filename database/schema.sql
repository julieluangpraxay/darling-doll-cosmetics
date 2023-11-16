set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "product" (
  "productId" serial PRIMARY KEY,
  "categoryId" integer,
  "name" text,
  "description" text,
  "price" integer,
  "onSale" boolean,
  "available" boolean,
  "imageUrl" text
);

CREATE TABLE "productImages" (
  "imageUrl" text,
  "video" text,
  "productId" integer,
  PRIMARY KEY ("imageUrl", "productId")
);

CREATE TABLE "category" (
  "categoryId" integer PRIMARY KEY,
  "name" text
);

CREATE TABLE "cart" (
  "cartId" integer PRIMARY KEY,
  "quantity" integer,
  "productId" integer,
  "customerId" integer
);

CREATE TABLE "customer" (
  "customerId" integer PRIMARY KEY,
  "email" text,
  "firstName" text,
  "lastName" text,
  "password" text
);

ALTER TABLE "productImages" ADD FOREIGN KEY ("productId") REFERENCES "product" ("productId");

ALTER TABLE "cart" ADD FOREIGN KEY ("productId") REFERENCES "product" ("productId");

ALTER TABLE "customer" ADD FOREIGN KEY ("customerId") REFERENCES "cart" ("customerId");

ALTER TABLE "productImages" ADD FOREIGN KEY ("imageUrl") REFERENCES "product" ("imageUrl");
