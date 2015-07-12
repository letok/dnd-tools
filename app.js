// App

function DndTools() {
	var self = this;

	// Data

	self.selectedPage = ko.observable();
	self.pages = [
		new Page("campaigns", "Campaigns", "language"),
		new Page("monsters", "Monsters", "adb")
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

	// Init

	// Go to default page
	self.goToPage();

}

// Models

function Page(id, title, icon) {
	var self = this;
	self.id = id;
	self.title = title;
	self.icon = icon;
}

// Init

ko.applyBindings(new DndTools());