import { addInfo, sendInfo, deleteInfoCard, sendSingleInformation} from "./functionsForButtons"

function returnArrBtns(duplicateState, sectionName) {
  return (
    (!Object.values(this.state)[1]) 
    ?
      [{
        class: 'addInfo',
        value: 'add information', 
        func: sendSingleInformation.bind(this)
      }]
    : (Object.values(this.state)[1].length) 
    ?
      [{
        value: 'add information',
        class: 'addInfo', 
        func: sendInfo.bind(this, duplicateState, sectionName)
      },
      {
        class: 'plus', 
        func: addInfo.bind(this, duplicateState)
      },
      {
        class: 'minus', 
        func: deleteInfoCard.bind(this, duplicateState)
      }]
    : 
      [{
        value: 'add information',
        class: 'addInfo', 
        func: sendInfo.bind(this, duplicateState, sectionName)
      },
      {
        class: 'plus', 
        func: addInfo.bind(this, duplicateState)
      }]
  )
}

export default returnArrBtns;