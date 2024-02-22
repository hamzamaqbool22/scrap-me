import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"


export const config: PlasmoCSConfig = {
  matches: ["https://www.insolvencydirect.bis.gov.uk/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

console.log("Content script loaded")
let results = {};

//  function to get the data from the page
const getData = () => {
  const data = document.querySelectorAll('#MyTable > tbody > tr')
  const rows = data.forEach((row) => {
    console.log(row)
   
  })

  if(!data){
    console.log("No data found")
  }

}
getData()