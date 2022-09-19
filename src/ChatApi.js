import React, { useState, useEffect } from "react";

// const ChatApi = (props) => {
//   const [isOnline, setIsOnline] = useState(null);

//   useEffect(() => {
//     const handleStatusChange = (status) => {
//       setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // Indique comment nettoyer l'effet :
//     return function cleanup() {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return "Chargement...";
//   }
//   return isOnline ? "En ligne" : "Hors-ligne";
// }
// export default ChatApi;
