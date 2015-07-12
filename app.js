// App

function DndTools() {
	var self = this;

	// Data

	var encounters = [
		new Encounter(1, "Encounter 1"),
		new Encounter(2, "Encounter 2"),
		new Encounter(3, "Encounter 3"),
		new Encounter(4, "Encounter 4"),
		new Encounter(5, "Encounter 5")
	];

	self.selectedPage = ko.observable();
	self.pages = [
		new Page("campaign", "Campaign", "language", false, []),
		new Page("encounter", "Encounters", "warning", true, encounters),
		new Page("monster", "Monster templates", "adb", false, [])
	];

	// Behaviour

	self.selectPageObject = function(obj) {
		self.selectedPage().selectedObject(obj);
	}

	self.goToPage = function(page) {
		// Reset
		self.addButtonClick(false);

		// Find ID in collection
		for (var i = 0; i < self.pages.length; i++) {
			if (page && page.id === self.pages[i].id) {
				self.selectedPage(self.pages[i]);
				return;
			}
		};
		// Not found
		self.selectedPage(self.pages[1]);
	}

	self.addButtonClick = ko.observable(false);
	self.showAddButton = ko.pureComputed(function() {
		return this.selectedPage().allowsAdd === true;
	}, self);
	self.clickAddButton = function() {
		self.addButtonClick(true);
	}

	// Init

	// Go to default page
	self.goToPage();

}

// Models

function Page(id, title, icon, allowsAdd, objects) {
	this.id = id;
	this.title = title;
	this.icon = icon;
	this.allowsAdd = allowsAdd;
	this.objects = objects;

	this.templateName = function() {
		var name = this.id + '-template';
		return (document.getElementById(name) == null) ? '' : name;
	}

	this.selectedObject = ko.observable();
}

function Encounter(id, title, notes) {
	this.id = id;
	this.title = title || 'Untitled';
	this.notes = notes || '';
}

// Init

ko.applyBindings(new DndTools());