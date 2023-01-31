const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "node_modules/bootstrap/scss/bootstrap.sass"`
			},
			scss: {
				additionalData: `@import "node_modules/bootstrap/scss/bootstrap.scss";`
			}
		}
	},
	transpileDependencies: true
})
