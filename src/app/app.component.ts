import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  pet: any = new Object();
  pets: any[] = [
    {
      id: 0,
      breed: "Beagle",
      petName: "Max",
      color: "brown",
      bornDate: "2016-06-08",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.Fuga numquam consequuntur omnis, sapiente minus exercitationem delectus. Laboriosam, sapiente."
    },
    {
      id: 1,
      breed: "Bulldog",
      petName: "Rude",
      color: "white",
      bornDate: "2016-12-10",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.Fuga numquam consequuntur omnis, sapiente minus exercitationem delectus. Laboriosam, sapiente."
    },
    {
      id: 2,
      breed: "Pastor Aleman",
      petName: "Sanson",
      color: "black",
      bornDate: "2015-01-04",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.Fuga numquam consequuntur omnis, sapiente minus exercitationem delectus. Laboriosam, sapiente."
    },
    {
      id: 3,
      breed: "Boxer",
      petName: "Diablo",
      color: "brown",
      bornDate: "2015-20-12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.Fuga numquam consequuntur omnis, sapiente minus exercitationem delectus. Laboriosam, sapiente."
    }
  ];

  getPets() {
    return this.pets;
  }

  diagnostic() {
    return JSON.stringify(this.pet);
  }

  addPet() {
    console.log("Adding a pet...");
    if (!this.pet.id) {
      this.pet.description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.Fuga numquam consequuntur omnis, sapiente minus exercitationem delectus. Laboriosam, sapiente.";
      this.pets.push(this.pet);
    }
    this.pet = {};
  }

  modifyPet(pos) {
    this.pet = this.pets[pos];
  }
}
