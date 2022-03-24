import{render,fireEvent} from'@testing-library/react';
import Register from './Register';

it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Register/>);
    const FIRST=queryByTitle("firstName");
    expect(FIRST).toBeTruthy();
}

);
describe('changefirstname',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Register/>);
    const FIRST=queryByTitle("firstName");
    fireEvent.change(FIRST,{target:{value:'test'}});
    expect(FIRST.value).toBe('test');
    });
});
it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Register/>);
    const LAST=queryByTitle("lastName");
    expect(LAST).toBeTruthy();
}

);
describe('changelastname',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Register/>);
    const LAST=queryByTitle("lastName");
    fireEvent.change(LAST,{target:{value:'test'}});
    expect(LAST.value).toBe('test');
    });
});
it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Register/>);
    const EMAIL=queryByTitle("email");
    expect(EMAIL).toBeTruthy();
}

);
describe('changeemail',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Register/>);
    const EMAIL=queryByTitle("email");
    fireEvent.change(EMAIL,{target:{value:'sri@gmail.com'}});
    expect(EMAIL.value).toBe('sri@gmail.com');
    });
});
it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Register/>);
    const PASS=queryByTitle("password");
    expect(PASS).toBeTruthy();
}

);
describe('changechangepassword',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Register/>);
    const PASS=queryByTitle("password");
    fireEvent.change(PASS,{target:{value:'TEST'}});
    expect(PASS.value).toBe('TEST');
    });
});
it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Register/>);
    const SEX=queryByTitle("sex");
    expect(SEX).toBeTruthy();
}

);
describe('changesex',()=>{
    it("onChange",()=>{
        const{queryByTitle}=render(<Register/>);
    const SEX=queryByTitle("sex");
    fireEvent.change(SEX,{target:{value:'test'}});
    expect(SEX.value).toBe('test');
    });
});