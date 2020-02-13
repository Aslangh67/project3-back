var db = require("../models");



db.Company_profile.bulkCreate([
    {
        company_name: "Walmart",
        ein: 1,
        account_type: true
    },
    {
        company_name: "Trader Joe's",
        ein: 2,
        account_type: true
    },
    {
        company_name: "Fred Meyer",
        ein: 3,
        account_type: true
    },
    {
        company_name: "The best soup kitchen",
        ein: 4,
        account_type: false
    },
    {
        company_name: "NSEW food bank",
        ein: 5,
        account_type: false
    }

]).then(function (dbcompanyprofile) {
    console.log(dbcompanyprofile);
    db.Location.bulkCreate([
        {
            address: "12620 SE 41st Pl",
            city:"Bellevue",
            state:"WA",
            zip:98006 ,
            Company_profileId: 1
        },
        {
            address: "1700 E Madison St",
            city:" Seattle",
            state:"WA",
            zip:98122 ,
            Company_profileId: 2
        },
        {
            address: "915 NW 45th St",
            city:"Seattle",
            state:"WA",
            zip:98107 ,
            Company_profileId: 3
        },
    
    ])
    
        .then(function (dblocation) {
            console.log(dblocation);
    
            db.User_profile.bulkCreate([
                {
                    username: "user1",
                    password:"password",
                    first_name:"john",
                    last_name:"doe",
                    email:"john@fake.com",
                    admin:true ,
                    Company_profileId: 1
                },
                {
                    username: "user2",
                    password:"password",
                    first_name:"john",
                    last_name:"doe",
                    email:"john@fake.com",
                    admin:true ,
                    Company_profileId: 2
                },
                {
                    username: "user3",
                    password:"password",
                    first_name:"john",
                    last_name:"doe",
                    email:"john@fake.com",
                    admin:true ,
                    Company_profileId: 3
                },
                {
                    username: "user4",
                    password:"password",
                    first_name:"jane",
                    last_name:"doe",
                    email:"jane@fake.com",
                    admin:true ,
                    Company_profileId: 4
                },
                {
                    username: "user5",
                    password:"password",
                    first_name:"jane",
                    last_name:"doe",
                    email:"jane@fake.com",
                    admin:true ,
                    Company_profileId: 5
                }
            
            ])
            
                .then(function (dbuserprofile) {
                    console.log(dbuserprofile);
                    db.Inventory.bulkCreate([
                        {
                            title: "Potatos",
                            quantity:100,
                            unit:"lb",
                            value_unit:0.80,
                            LocationId:1
                        },
                        {
                            title: "Bananas",
                            quantity:90,
                            unit:"lb",
                            value_unit:0.40,
                            LocationId:1
                        },
                        {
                            title: "apples",
                            quantity:180,
                            unit:"lb",
                            value_unit:1.30,
                            LocationId:1
                        },
                        {
                            title: "Potatoes",
                            quantity:130,
                            unit:"lb",
                            value_unit:0.70,
                            LocationId:2
                        },
                        {
                            title: "Bread",
                            quantity:30,
                            unit:"each",
                            value_unit:3.89,
                            LocationId:2
                        },
                        {
                            title: "Peaches",
                            quantity:30,
                            unit:"lb",
                            value_unit:2.40,
                            LocationId:2
                        },
                        {
                            title: "Tomatoes",
                            quantity:50,
                            unit:"lb",
                            value_unit:0.70,
                            LocationId:2
                        },
                        {
                            title: "oranges",
                            quantity:130,
                            unit:"lb",
                            value_unit:1.70,
                            LocationId:3
                        },
                        {
                            title: "Jam",
                            quantity:30,
                            unit:"each",
                            value_unit:3.89,
                            LocationId:3
                        },
                        {
                            title: "Peaches",
                            quantity:30,
                            unit:"lb",
                            value_unit:2.40,
                            LocationId:3
                        },
                        {
                            title: "Cucumbers",
                            quantity:50,
                            unit:"lb",
                            value_unit:0.70,
                            LocationId:3
                        }
                    ])
                    
                        .then(function (dbInventory) {
                            console.log(dbInventory);
                    
                        });
                });
        });

});


