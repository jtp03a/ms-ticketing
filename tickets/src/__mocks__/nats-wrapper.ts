// Steps to create a Mock with jest
// 1 Find the file we want to 'fake
// 2 in the same directory, create a folder called '__mocks__'
// 3 in that folder, create a file with an identical name to the file we want to fake
// 4 write the fake implementation - 
// 5 tell jest to use that file file in our test - in the test file import the mock with jest.mock('path to mock')

// When looking at the real natsWrapper file we know that we want to export a const called natsWrapper which is an instance of a class or essentially an object

//Provide a fake function
// export const natsWrapper = {
//   client: {
//     publish: (subject: string, data: string, callback: () => void) => {
//       callback()
//     }
//   }
// }

//Provide a mock function which is like a fake function but allows us to use jest to make expectations for that function
export const natsWrapper = {
  client: {
    publish: jest.fn().mockImplementation((subject: string, data: string, callback: () => void) => {
      callback()
    })
  }
}