import Logout from "./Logout";
import {react}from '@testing-library/react';
it("searchregisterRenderCheck",()=>{
    const{queryByTitle}=render(<Logout/>);
    const FIRST=queryByTitle("logout");
    expect(FIRST).toBeTruthy();
}


);