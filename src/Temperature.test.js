import {render,screen}from'@testing-library/react'
//import userEvent from'@testing-library/user-event'
import '@testing-library/jest-dom'
import Temparature from './Temparature'
describe('testing temperature component',()=>{
 test('testing1 ', async() => {
  render(<Temparature/>)
  const buttonlist= await screen.findAllByRole('button')
  //console.log(buttonlist)
  expect(buttonlist).toHaveLength(1)
 })
 test('test2',()=>{
  render(<Temparature/>)
  const btn=screen.getByTestId('button')
  expect(btn).toBeEnabled()
 })
 test('test3',()=>{
  render(<Temparature/>)
  const input=screen.getByTestId('required-input')
  expect(input).toBeRequired()
})
test('test4',()=>{
 render(<Temparature/>)
 const forminput=screen.getByTestId('invalid-form')
 const htmltext=screen.getByText('Check your city weather')
 const image=screen.getByTestId('avatar')
 expect(forminput).not.toBeValid() 
 expect(htmltext).toBeInTheDocument()
 expect(htmltext).toBeVisible()
 expect(image).not.toHaveAccessibleDescription('weatherimage')
})
})

