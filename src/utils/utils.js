import React from "react";
// Utilities functions

export const parseStringToHtml = htmlString => {
   // Convert html string to proper react elements, does not support props yet
   const parsedString = [];
   let tempString = '';
   let tempTag = '';
   let searchForTag = true;
   let searchForChild = false;

   for(let i = 0; i < htmlString.length; i++) {
      const char = htmlString.charAt(i);        
      //Process char
      if(searchForTag && char === '<' && !searchForChild) {
         // Search for beginning of tag
         searchForTag = false;
      } else if(!searchForTag && !searchForChild && char === '>') {
         // Begining of child
         searchForChild = true;
         tempTag = tempString;
         tempString = '';
      } else if(!searchForTag && char === '<' && searchForChild && htmlString.charAt(i + 1) === '/') {
         // End of child
         searchForTag = true;
         searchForChild = false;
         parsedString.push(React.createElement(tempTag, { key: `${tempTag}${i}` }, [tempString]));
         tempString = '';
      } else if(!searchForTag || searchForChild) {
         // add char to temp string
         tempString += char;
      }
   }

   return parsedString;
}