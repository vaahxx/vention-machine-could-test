# Vention MachineCloud test

This test will consist of building a very simple application which represents a marketplace.

## What you need to build
- [x] An application using React that will display a list of items that you can add to your cart
- [x] When you add an item to your cart it should be represented in the UI
- [x] You should be able to remove products from the cart
- [x] You must add the ability to rate products with a score from (1 to 5)
- [x] Provide instructions in the README to launch the application

## Bonus points
- [x] **Use TypeScript**
- [x] Implement a backend and persist the state in a database
- [x] Have a single command to launch the whole application
- [x] Use the open-source project [stator](https://github.com/chocolat-chaud-io/stator) as a template for your application

Here's an example to give you inspiration of a very simple UI representing the different states of what we're looking for:
![image](https://user-images.githubusercontent.com/6068943/150595518-1fc9cbb0-6b13-480b-aae5-0728a506a9b0.png)
![image](https://user-images.githubusercontent.com/6068943/150595559-24671896-91fe-4746-bbef-ad62ea9c7153.png)
![image](https://user-images.githubusercontent.com/6068943/150595566-a99ea3d2-12c3-4d7e-9267-91036e76277d.png)

# Images

![image](https://user-images.githubusercontent.com/39314687/211106499-886f67c7-4764-44ff-8635-0b821a80df8b.png)

![image](https://user-images.githubusercontent.com/39314687/211106559-23217f16-bd54-442f-a832-59e0f4eea200.png)

## 💥 Getting Started

### Prerequisites

- [Docker Compose](https://docs.docker.com/compose/install/)
- [node.js](https://nodejs.org/en/download/) v18.12.1 

### Run the application

First, install the dependencies:

```
npm i
```

Then, run the whole stack:

```
npm run postgres
```

```
npm start api
```

```
npm start webapp
```


Or, first run:

```
npm run postgres
```

This is necessary to create docker's container.

Stop postgres execution and simply run:

```
npm run start-all
```

### Populate database
Run the following SQL statements:

```sql
insert into product (name, image, price, in_cart)
values
('Red flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-flower-png-transparent-png-images-pluspng-2.png', 20, TRUE),
('Peach flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-peach-flower-png-16.png', 15, FALSE),
('Pink flower', 'https://www.freepnglogos.com/uploads/flour-png/flour-flower-images-transparent-background-19.png', 10, TRUE);
```

```sql
insert into rating (product_id, value)
values 
(1, 5),
(2, 4),
(3, 2);
```

## Observations

### 1 - Single command to launch the whole application

I created a single script to launch the whole application.

```"start-all": "npx nx run-many --parallel --target=serve --all"```

### 2 - Nestjsx/crud

Seems like this lib doesn’t make data aggregation (e.g aggregate ratings average into the product entity).

Problem can be found here: https://github.com/nestjsx/crud/pull/297

So instead I’m using a raw query in `apps/api/src/services/product/product.service.ts` with a naive implementation.

### 3 - Naives implementations

I understand that there was some naive implementations along the way due to lack of experience and time using the Stator monorepo template. 

I hope this test somehow reaches the expectation of the reviewers and if not, even so, it was a fun test to work on and a nice opportunity to implement something that I'm not experienced with. I really appreciate it :)

