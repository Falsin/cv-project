import { addInfo, sendInfo, deleteInfoCard, sendSingleInformation} from "./functionsForButtons"

function returnArrBtns(duplicateState, sectionName) {
  return (
    (!Object.values(this.state)[1]) 
    ?
      [{
        value: 'Add information', 
        func: sendSingleInformation.bind(this)
      }]
    : (Object.values(this.state)[1].length) 
    ?
      [{
        value: 'Add information', 
        func: sendInfo.bind(this, duplicateState, sectionName)
      },
      {
        value: 'Plus', 
        func: addInfo.bind(this, duplicateState)
      },
      {
        value: 'Minus', 
        func: deleteInfoCard.bind(this)
      }]
    : 
      [{
        value: 'Add information', 
        func: sendInfo.bind(this, duplicateState, sectionName)
      },
      {
        value: 'Plus', 
        func: addInfo.bind(this, duplicateState)
      }]
  )
}

export default returnArrBtns;