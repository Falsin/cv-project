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
        value: ' + ', 
        func: addInfo.bind(this, duplicateState)
      },
      {
        value: ' − ', 
        func: deleteInfoCard.bind(this, duplicateState)
      }]
    : 
      [{
        value: 'Add information', 
        func: sendInfo.bind(this, duplicateState, sectionName)
      },
      {
        value: ' + ', 
        func: addInfo.bind(this, duplicateState)
      }]
  )
}

export default returnArrBtns;