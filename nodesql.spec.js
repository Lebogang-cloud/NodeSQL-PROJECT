const Visitors = require('./index');
let  visitor = new Visitors;

describe("functionality of database", () => {
   
    it("should save the Visitor into the database ", () => {
    expect(visitor.save()).toBe("");
    });

    it("should delete a visitor from the database", () => {
    expect(visitor.deleteUser(dummyUser).response.success).toBe(true);
    });

    it("check that the users have actually been removed", () => {
        let listOfUsers = testAdminUser.getUsersForDeletion(dummyPermission).response;
        expect(listOfUsers.length).toBeLessThan(1);
    });

    it("should update a visitor's details on the database", () => {
        expect(visitor.updateUser(dummyUser).response.success).toBe(true);
        });
    
    it("should find visitor by ID on the database and return all information about that visitor", () => {
        expect(visitor.deleteUsers(dummyUser).response.success).toBe(true);
        });    

    it("should delete all visitors from the database", () => {
        expect(visitor.deleteUsers(dummyUser).response.success).toBe(true);
        });

});

