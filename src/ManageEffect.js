import React, { useState } from "react";
const INITIAL_LIST = [
  {
    id: "0",
    title: "React with RxJS for State Management Tutorial",
    url: "https://www.robinwieruch.de/react-rxjs-state-management-tutorial/",
  },
  {
    id: "1",
    title: "React with Apollo and GraphQL Tutorial",
    url: "https://www.robinwieruch.de/react-graphql-apollo-tutorial",
  },
];
const ManageEffect = () => {
  const [list, setList] = React.useState(INITIAL_LIST);

  const onRemoveItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button type="button" onClick={() => onRemoveItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ManageEffect;
