const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //aca podemos definir la baseUrl..
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
