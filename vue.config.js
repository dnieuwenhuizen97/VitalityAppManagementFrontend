module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://vitalityfunctionsapp.azurewebsites.net/'
  }
}
