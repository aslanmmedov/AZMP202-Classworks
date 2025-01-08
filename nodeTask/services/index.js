const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

const data = [
    {
      id: "2",
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: "1",
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: "3",
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: "4",
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: "5",
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: "6",
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: '7',
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: "8",
      description: "Seaweed and fish",
      name: "Seafood",
    },
];

let counter = 9;

app.get('/', (req, res) => {
  res.send(data);
});

app.post("/add", (req, res) => {
  const { name, description } = req.body;
  const newItem = { name, description, id: counter };
  data.push(newItem);
  counter++;

  console.log(data);  
  res.send("Success");
});

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
     const idx = data.findIndex((q) => q.id === +id);

     if(idx !== -1){
        const deleted = data.splice(idx,1)
        res.send(data)
     }
     else{
        res.send('Cannot find something to delete')
     }
    res.send('Succesfuly deleted')
  })

  app.put("/put/:id", (req, res) => {
    const { id } = req.params;
    const{name,description} = req.body;

    const idx= data.findIndex((q) => q.id === +id);

    data[idx]={id:+id,name,description};
    res.send("You put something to your api");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
