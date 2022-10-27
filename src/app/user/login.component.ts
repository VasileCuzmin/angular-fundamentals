import { Component } from '@angular/core'

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string | undefined
    password: string | undefined

    login(formValues: any) {
        console.log(formValues)
    }

    test() {
        console.log('test')
    }
}