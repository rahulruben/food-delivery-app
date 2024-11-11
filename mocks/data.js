export const Restaurants = {
  status: "success",
  message: "List of restaurants fetched successfully.",
  data: [
    {
      restaurant_id: "12345",
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.5,
      delivery_time: "30-40 min",
      delivery_fee: 3.99,
      is_open: true,
      address: {
        street: "123 Main St",
        city: "New York",
        zip_code: "10001",
      },
      contact: {
        phone: "+1 555-1234",
        website: "https://pastaparadise.com",
      },
      menu: [
        {
          item_id: "1",
          name: "Spaghetti Carbonara",
          price: 12.99,
          description: "Classic carbonara pasta with creamy sauce.",
        },
        {
          item_id: "2",
          name: "Margherita Pizza",
          price: 9.99,
          description: "Thin crust pizza with mozzarella, basil, and tomato.",
        },
      ],
    },
    {
      restaurant_id: "67890",
      name: "Sushi Roll King",
      cuisine: "Japanese",
      rating: 4.8,
      delivery_time: "20-30 min",
      delivery_fee: 2.99,
      is_open: true,
      address: {
        street: "456 Oak Rd",
        city: "San Francisco",
        zip_code: "94107",
      },
      contact: {
        phone: "+1 555-6789",
        website: "https://sushirollking.com",
      },
      menu: [
        {
          item_id: "1",
          name: "California Roll",
          price: 8.99,
          description: "A roll with crab, avocado, and cucumber.",
        },
        {
          item_id: "2",
          name: "Salmon Sashimi",
          price: 10.99,
          description: "Fresh, sliced salmon served with soy sauce.",
        },
      ],
    },
    {
      restaurant_id: "24680",
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.2,
      delivery_time: "25-35 min",
      delivery_fee: 4.5,
      is_open: false,
      address: {
        street: "789 Elm St",
        city: "Chicago",
        zip_code: "60611",
      },
      contact: {
        phone: "+1 555-2468",
        website: "https://burgerhaven.com",
      },
      menu: [
        {
          item_id: "1",
          name: "Cheeseburger",
          price: 7.99,
          description: "A juicy beef patty with cheese, lettuce, and tomato.",
        },
        {
          item_id: "2",
          name: "Fries",
          price: 3.49,
          description: "Crispy golden fries.",
        },
      ],
    },
  ],
};
