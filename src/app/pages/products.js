module.exports = {
	url: function () {
		return "https://bstackdemo.com";
	},
	elements: {
		largeCheckbox: { selector: 'input[name="layered_id_attribute_group_3"]' },
		womenNavItem: { selector: 'a[title="Women"]' },
		passwordField: { selector: "#password" },
		submitButton: { selector: "#submit" },
		errorMessage: { selector: "#error" }
	},
	commands: [
		{
			login: function (username, password) {
				return this.clearValue("@usernameField")
					.setValue("@usernameField", username)
					.clearValue("@passwordField")
					.setValue("@passwordField", password)
					.click("@submitButton");
			},
		},
	],
};
