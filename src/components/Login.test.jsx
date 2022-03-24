import {render,fireEvent} from '@testing-library/react';
import Login from './Login';

it("LoginRenderCheck",()=>{
    const{queryByTitle}=render(<Login/>);
    const emailcheck=queryByTitle("email");
    expect(emailcheck).toBeTruthy();
}

);
describe('emailOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Login/>);
    const emailcheck=queryByTitle("email");
    fireEvent.change(emailcheck,{target:{value:'sri@gmail.com'}});
    expect(emailcheck.value).toBe('sri@gmail.com');
    });
});
it("LoginRenderCheck",()=>{
    const{queryByTitle}=render(<Login/>);
    const passwordcheck=queryByTitle("password");
    expect(passwordcheck).toBeTruthy();
}

);
describe('passwordOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Login/>);
    const passwordcheck=queryByTitle("password");
    fireEvent.change(passwordcheck,{target:{value:'TEST'}});
    expect(passwordcheck.value).toBe('TEST');
    });
});
describe('LoginonClick',()=>{
    it("onClick",()=>{
        const{queryByTitle}=render(<Login/>);
    const login=queryByTitle("login");
   
    expect(login).toBeTruthy;
    });
});
describe('registeronClick',()=>{
    it("onClick",()=>{
        const{queryByTitle}=render(<Login/>);
    const register=queryByTitle("register");
   
    expect(register).toBeTruthy;
    });
});