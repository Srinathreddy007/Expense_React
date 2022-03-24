import{react,fireEvent} from '@testing-library/react';
import ListExpense from './ListExpense';

it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<ListExpense/>);
    const FIRST=queryByTitle("del");
    expect(FIRST).toBeTruthy();
}


);