const xOffset = window.innerWidth * 0.7;
export const diagram = {
  tables: [
    {
      id: 0,
      name: "product",
      x: 100,
      y: 50,
      fields: [
        { name: "id", type: "INT" },
        { name: "name", type: "VARCHAR" },
        { name: "price", type: "FLOAT" },
        { name: "image", type: "VARCHAR" },
      ],
      color: "#7d9dff",
    },
    {
      id: 1,
      name: "order",
      x: xOffset,
      y: 80,
      fields: [
        { name: "id", type: "INT" },
        { name: "user_id", type: "INT" },
        { name: "total_price", type: "FLOAT" },
        { name: "status", type: "ENUM" },
        { name: "created_at", type: "TIMESTAMP" },
      ],
      color: "#89e667",
    },
    {
      id: 2,
      name: "order_item",
      x: xOffset / 2,
      y: window.innerHeight / 3,
      fields: [
        { name: "id", type: "INT" },
        { name: "order_id", type: "INT" },
        { name: "product_id", type: "INT" },
        { name: "quantity", type: "INT" },
      ],
      color: "#f7a35c",
    },
  ],
  relationships: [
    {
      startTableId: 2, // order_item
      startFieldId: 1, // order_id
      endTableId: 1, // order
      endFieldId: 0, // id
      cardinality: "many_to_one",
    },
    {
      startTableId: 2, // order_item
      startFieldId: 2, // product_id
      endTableId: 0, // product
      endFieldId: 0, // id
      cardinality: "many_to_one",
    },
  ],
};
