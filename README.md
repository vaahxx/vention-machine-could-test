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

### 1 - Node version

First of all, it worth mentioning that I'm using M1 Mac to run this repository and it wasn't as smooth as I thought it would be. The first problem I found was the node version (it's using Node 14 as the first version that is fully compatible with M1 is 16 -- even though I know I can run it using Rosetta :()

While installing dependencies with the provided node version, I got the following error:

```
npm WARN old lockfile 
npm WARN old lockfile The package-lock.json file was created with an old version of npm,
npm WARN old lockfile so supplemental metadata must be fetched from the registry.
npm WARN old lockfile 
npm WARN old lockfile This is a one-time fix-up, please be patient...
npm WARN old lockfile 
npm ERR! code EBADENGINE
npm ERR! engine Unsupported engine
npm ERR! engine Not compatible with your version of node/npm: @angular-devkit/core@13.0.2
npm ERR! notsup Not compatible with your version of node/npm: @angular-devkit/core@13.0.2
npm ERR! notsup Required: {"node":"^12.20.0 || ^14.15.0 || >=16.10.0","npm":"^6.11.0 || ^7.5.6 || >=8.0.0","yarn":">= 1.13.0"}
npm ERR! notsup Actual:   {"npm":"7.24.2","node":"14.13.1"}

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/valentina/.npm/_logs/2023-01-03T22_08_21_317Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! stator@ get-started: `npm i && npm run start --prefix tools/getting-started`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the stator@ get-started script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/valentina/.npm/_logs/2023-01-03T22_08_21_400Z-debug.log
```

So I updated node version to 18.12.1 and created .nvmrc to set the version that worked for me.

### 2 - Single command to launch the whole application

I created a single script to launch the whole application.

```"start-all": "npx nx run-many --parallel --target=serve --all"```

### 3 - Nestjsx/crud

Seems like this lib doesn’t make data aggregation (e.g aggregate ratings average into the product entity).

Problem can be found here: https://github.com/nestjsx/crud/pull/297

So instead I’m using a raw query in `apps/api/src/services/product/product.service.ts` with a naive implementation.

### 4 - Naives implementations

I understand that there was some naive implementations along the way due to lack of experience and time using the Stator monorepo template. 

I hope this test somehow reaches the expectation of the reviewers and if not, even so, it was a fun test to work on and a nice opportunity to implement something that I'm not experienced with. I really appreciate it :)

