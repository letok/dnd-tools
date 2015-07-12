// App

function DndTools() {
	var self = this;

	// Data

	self.selectedPage = ko.observable();
	self.pages = [
		new Page("campaign", "Campaign", "language", false),
		new Page("encounter", "Encounters", "warning", true),
		new Page("monster", "Monster templates", "adb", false)
	];

	// Behaviour

	self.goToPage = function(page) {
		// Find ID in collection
		for (var i = 0; i < self.pages.length; i++) {
			if (page && page.id === self.pages[i].id) {
				self.selectedPage(self.pages[i]);
				return;
			}
		};
		// Not found
		self.selectedPage(self.pages[0]);
	}

	self.showAddButton = ko.pureComputed(function() {
		return this.selectedPage().allowsAdd === true;
	}, self);

	// Init

	// Go to default page
	self.goToPage();

}

// Models

function Page(id, title, icon, allowsAdd) {
	this.id = id;
	this.title = title;
	this.icon = icon;
	this.allowsAdd = allowsAdd;
}

function Encounter(id, title) {
	this.id = id;
	this.title = title;
}

// Init

ko.applyBindings(new DndTools());