# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

customers = Customer.create([
    {
        first_name: "John",
        last_name: "Doe",
        address: "200 University Ave W, Waterloo, ON N2L 3G1",
        email: "johndoe@customer.com",
        phone: "+1(111) 111-1111",
        dob:DateTime.new(2017,1,1,1),
        progress:"Not Started",
        status:"New Lead"
    }, {
        first_name: "John",
        last_name: "Smith",
        address: "75 University Ave W, Waterloo, ON N2L 3C5",
        email: "johnsmith@customer.com",
        phone: "+1(222) 222-2222",
        dob:DateTime.new(2017,3,1,1),
        progress:"In Progress",
        status:"Complaint"
    },
    {
        first_name: "Chad",
        last_name: "Read",
        address: "New York Way, Rotherham S60 1FJ, UK",
        email: "chadread@customer.com",
        phone: "+1(333) 333-3333",
        dob:DateTime.new(2017,3,1,1),
        progress:"Closed",
        status:"New Lead"
    },
    {
        first_name: "James",
        last_name: "Stewart Jr.",
        address: "175 N State St, Chicago, IL 60601, USA",
        email: "jamesstewardjr@customer.com",
        phone: "+1(444) 444-4444",
        dob:DateTime.new(2017,3,1,1),
        progress:"Closed",
        status:"Removed"
    },
    {
        first_name: "Jeremy",
        last_name: "McGrath",
        address: "18 W Monroe St, Chicago, IL 60603, USA",
        email: "jeremymcgrath@customer.com",
        phone: "+1(555) 555-5555",
        dob:DateTime.new(2017,3,1,1),
        progress:"Not Started",
        status:"Removed"
    },
    {
        first_name: "LeBron",
        last_name: "James",
        address: "1111 S Figueroa St, Los Angeles, CA 90015, USA",
        email: "lebronjames@customer.com",
        phone: "+1(666) 666-6666",
        dob:DateTime.new(2017,3,1,1),
        progress:"In Progress",
        status:"New Lead"
    },
    {
        first_name: "Travis",
        last_name: "Docker",
        address: "301 Front St W, Toronto, ON M5V 2T6",
        email: "travisdocker@customer.com",
        phone: "+1(777) 777-7777",
        dob:DateTime.new(2017,3,1,1),
        progress:"Closed",
        status:"Complaint"
    }
])

notes = Note.create([
  {
    customer_id: 1,
    message: "Looking to get started in dirt bikes"
  },
  {
    customer_id: 2,
    message: "Complaint on order"
  },
  {
    customer_id: 2,
    message: "Experienced user"
  },
  {
    customer_id: 2,
    message: "Owning multiple bikes from different manufacturers"
  },
  {
    customer_id: 3,
    message: "Scheduled to be in touched within 2 days"
  },
  {
    customer_id: 4,
    message: "Customer quitting the sport"
  },
  {
    customer_id: 5,
    message: "Customer quitting the sport"
  },
  {
    customer_id: 6,
    message: "Latest winner of some tournament"
  },
  {
    customer_id: 7,
    message: "Complaint on order"
  }
])

orders = Order.create([
  {
    customer_id: 2,
    item: "2017 WR250R",
    purchased_date:DateTime.new(2017,3,1,1),
    description: "DISPLACEMENT(cc): 250, SEAT HEIGHT(IN): 37, WET WEIGHT(LBS): 295"
  },
  {
    customer_id: 4,
    item: "2015 TT-R50E",
    purchased_date:DateTime.new(2017,3,1,1),
    description: "DISPLACEMENT(cc): 49, SEAT HEIGHT(IN): 22, WET WEIGHT(LBS): 126"
  },
  {
    customer_id: 5,
    item: "2016 TW200",
    purchased_date:DateTime.new(2017,3,1,1),
    description: "DISPLACEMENT(cc): 196, SEAT HEIGHT(IN): 31, WET WEIGHT(LBS): 278"
  },
  {
    customer_id: 7,
    item: "2017 SCR950",
    purchased_date:DateTime.new(2017,3,1,1),
    description: "DISPLACEMENT(cc): 942, SEAT HEIGHT(IN): 33, WET WEIGHT(LBS): 547"
  }
])
