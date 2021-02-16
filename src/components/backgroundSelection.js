import React, {useContext} from "react";
import { BkgdSelectorContainer, BkgdSelectorBox } from "../styles/components/backgroundSelection-styled";
import { GlobalContext } from "../context/global-provider";

const BackgroundSelection = () => {
   const { backgroundSelected, selectBackground } = useContext(GlobalContext);
   const selectorBoxes = [];
   for(let i = 0; i < 3; i++) {
      selectorBoxes.push(
         <BkgdSelectorBox 
            key={`filter${i}`} 
            backgroundNum={i} 
            onClick={() => selectBackground(i)}
         />
      );
   }
   return (
      <BkgdSelectorContainer backgroundNum={backgroundSelected} >
         {selectorBoxes}
      </BkgdSelectorContainer>
   )
};

export default BackgroundSelection;