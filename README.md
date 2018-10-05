# Photo Album
This was a technological assesment to create a JavaScript application that allows the user to navigate photo albums.   
As suggested I timeboxed this exercise to 4 hours, not including the quick UI design in Figma.   
It uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for serving as the API.

## Design
I created a very minimal design in Figma (PhotoAlbum.fig) as a guideline for the design of the application.

## Running the App
I used [create-react-app](https://github.com/facebook/create-react-app) to bootstrap the application, therefore, the standard development process applies.   

Install the dependencies using `yarn`

Running the app in development:   
`yarn start`

> This App is using the [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension), so your development environment might not work.   
> If this is the case you should run the App in production

Running the app in production:   
`yarn build`   
then run   
`yarn run serve -s build`   

## Testing the App
I only wrote a few tests for some actions and the reducer in this application.  

To run these tests run:   
`yarn test`

## Imporvements
Some areas I would improve:
1. The state object is currently flat and not nested per user.
2. Move all common logic in the containers into a HOC.
3. Implement more tests around the state managments and unit test components.
4. Create an API enhancer to remove code duplication and provide more meaningful error messages.
5. Extract environemnt specific configuration.