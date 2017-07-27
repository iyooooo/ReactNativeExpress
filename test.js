"use strict";
const fetchData = async () => {
  return fetch('https://randomuser.me/api/')
}

const printData = async () => {
  try {
    const json = await fetchData()
    console.log(json)
  } catch(e) {
    console.error("Problem", e)
  }
}

printData();