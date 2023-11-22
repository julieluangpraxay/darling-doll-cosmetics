set client_min_messages to warning;

drop schema "public" cascade;

create schema "public";

CREATE TABLE "products" (
  "productId" serial PRIMARY KEY,
  "categoryId" integer,
  "name" text,
  "description" text,
  "ingredients" text,
  "price" integer,
  "onSale" boolean,
  "available" boolean,
  "imageUrl" text
);

CREATE TABLE "productImages" (
  "productImageId" serial PRIMARY KEY,
  "imageUrl" text,
  "video" text,
  "productId" integer
);

CREATE TABLE "category" (
  "categoryId" serial PRIMARY KEY,
  "name" text
);

CREATE TABLE "cart" (
  "cartId" serial PRIMARY KEY,
  "quantity" integer,
  "productId" integer,
  "customerId" integer
);

CREATE TABLE "customer" (
  "customerId" serial PRIMARY KEY,
  "email" text,
  "firstName" text,
  "lastName" text,
  "password" text
);

ALTER TABLE "productImages" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "cart" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "cart" ADD FOREIGN KEY ("customerId") REFERENCES "customer" ("customerId");
