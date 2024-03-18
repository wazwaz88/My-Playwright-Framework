import { BasePage } from './BasePage'

export class TodoPage extends BasePage {
    constructor(page){
        super(page)
        this.inputBox = page.locator('#input-add')
        this.todoItems = page.locator('.todo-item:not(.has-text-danger)')
    }

    async goto() {
        await this.page.goto('https://techglobal-training.com/frontend/project-6')
    }

    async addTodo(text){
        await this.inputBox.fill(text)
        await this.inputBox.press('Enter')
    }

    async remove(text){
        const todo = this.todoItems.filter({ hasText: text})
        await todo.hover()
        await todo.locator('.destroy').click()
    }

    async removeAll(){
        while(await this.todoItems.count() > 0) {
            await this.todoItems.first().hover()
            await this.todoItems.locator('.destroy').first().click()
        }
    }

}