import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  let personListWrapper;

  beforeAll(() => {
    personListWrapper = shallow(<PersonList />);
  });

  it("renders a ul element", () => {
    const peopleListUl = personListWrapper.find("ul");
    expect(peopleListUl).toHaveLength(1);
  });

  it("renders no lis when no people exist", () => {
    const people = [];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(0);
  });

  it("render one li element when on person exists", () => {
    const people = [{ firstName: "Alan", lastName: "Turning" }];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(1);
  });

  it("render one li element for each person that exists", () => {
    const people = [
      { firstName: "Alan", lastName: "Turning" },
      { firstName: "Chevy", lastName: "Chase" },
    ];
    personListWrapper = shallow(<PersonList people={people} />);
    const peopleListItems = personListWrapper.find("li");

    expect(peopleListItems).toHaveLength(2);
  });

  it("", () => {
    const people = [{ firstName: "Alan", lastName: "Turning" }];
    personListWrapper = shallow(<PersonList people={people} />);
    const personListItems = personListWrapper.find("li");

    expect(personListItems.text()).toContain(people[0].firstName);
    expect(personListItems.text()).toContain(people[0].lastName);
  });
});
