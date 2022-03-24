import {render,fireEvent} from'@testing-library/react';
import AddExpense from './AddExpense';
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const description=queryByTitle("descript");
    expect(description).toBeTruthy();
}

);
describe('descriptOnChange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const description=queryByTitle("descript");
    fireEvent.change(description,{target:{value:'test'}});
    expect(description.value).toBe('test');
    });
});
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const category=queryByTitle("category");
    expect(category).toBeTruthy();
}

);
describe('categoryOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const category=queryByTitle("category");
    fireEvent.change(category,{target:{value:'test'}});
    expect(category.value).toBe('test');
    });
});
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const category=queryByTitle("category");
    expect(category).toBeTruthy();
}

);
describe('categoryOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const category=queryByTitle("category");
    fireEvent.change(category,{target:{value:'test'}});
    expect(category.value).toBe('test');
    });
});
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const amount=queryByTitle("amount");
    expect(amount).toBeTruthy();
}

);
describe('amountOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const amount=queryByTitle("amount");
    fireEvent.change(amount,{target:{value:'100'}});
    expect(amount.value).toBe('100');
    });
});
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const date=queryByTitle("expense");
    expect(date).toBeTruthy();
}

);
describe('dateOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const date=queryByTitle("expense");
    fireEvent.change(date,{target:{value:'22-02-2021'}});
    expect(date.value).toBe('22-02-2021');
    });
});
it("AddExpenseRenderCheck",()=>{
    const{queryByTitle}=render(<AddExpense/>);
    const currency=queryByTitle("currency");
    expect(currency).toBeTruthy();
}

);
describe('currencyOnchange',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const currency=queryByTitle("currency");
    fireEvent.change(currency,{target:{value:'USD'}});
    expect(currency.value).toBe('USD');
    });
});
describe('saveonClick',()=>{
    it("onClick",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const save=queryByTitle("save");
   
    expect(save).toBeTruthy;
    });
});
describe('cancelonClick',()=>{
    it("onClick",()=>{
        const{queryByTitle}=render(<AddExpense/>);
    const cancel=queryByTitle("cancel");
   
    expect(cancel).toBeTruthy;
    });
});