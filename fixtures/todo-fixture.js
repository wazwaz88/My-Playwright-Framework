import { test as base, expect } from '@playwright/test'
import { TodoPage } from './todo-page'

export const test = base.test.extend({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new TodoPage(page)
    
    // This is the Setup Phase
    await todoPage.goto()
    await todoPage.addToDo('item1')
    await todoPage.addToDo('item2')

    // Use the fixture value in the test.
    await use(todoPage)

    // Clean up the fixture. This is the Teardown Phase
    await todoPage.removeAll()
  },

  
})
exports.expect = base.expect
