import React from 'react'
import { EmployeeList } from './EmployeeList'
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

Enzyme.configure({ adapter: new Adapter() });

describe('EmployeeList component', () => {
    let wrapper;
    beforeEach( () => {
        const props = {
            employee: {
                first_name: 'Manish',
                last_name: 'dixit',
                avatar: 'https://sdsdsdsd',
                email: 'abc@gmail.com'
            },
            showDetail: jest.fn()
        }
        wrapper = shallow(<EmployeeList {...props}/>)
    })

    it('should show employee first_name and last_name', () => {
        expect(wrapper.find('span').length).toBe(2)
    })
})