const { defineConfig } = require("cypress");
const xlsx =require("xlsx");
const fs =require("fs")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

